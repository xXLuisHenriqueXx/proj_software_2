import { FastifyReply, FastifyRequest } from "fastify";
import { prisma } from "../prisma";
import { authService } from "../services/authService";
import { tokenHelper } from "../helpers/tokenHelper";

import {
  forgottenPasswordSchema,
  loginSchema,
  registerSchema,
  updateUserSchema,
  authHeaderSchema,
} from "../schemas/authValidationSchemas";
import { passwordHelper } from "../helpers/passwordHelper";

function onlyDigits(v?: string | null) {
  return v ? v.replace(/\D/g, "") : undefined;
}

export const authController = {
  async register(req: FastifyRequest, reply: FastifyReply) {
    try {
      const result = registerSchema.safeParse(req.body);
      if (!result.success) {
        return reply.status(400).send({ error: result.error.issues });
      }

      // Normalize cpf/cnpj to digits before checking/persisting
      const data = {
        ...result.data,
        cpf: onlyDigits(result.data.cpf),
        cnpj: onlyDigits(result.data.cnpj),
      };

      const userExists = await prisma.user.findFirst({
        where: {
          OR: [
            { email: data.email },
            { cpf: data.cpf ?? undefined },
            { cnpj: data.cnpj ?? undefined },
          ],
        },
      });

      if (userExists) {
        return reply.status(401).send({ error: "Este usuário já foi registrado" });
      }

      const user = await authService.createUser(data);
      const authToken = await tokenHelper.generateToken(user.id);

      return reply.status(200).send({ message: "Usuário criado com sucesso", token: authToken });
    } catch (error) {
      return reply.status(500).send({ error: "Erro interno do servidor", msg: error });
    }
  },

  async update(req: FastifyRequest, reply: FastifyReply) {
    try {
      const headerResult = authHeaderSchema.safeParse(req.headers);
      if (!headerResult.success) {
        return reply.status(401).send({ error: headerResult.error.issues });
      }

      const token = headerResult.data.authorization.replace("Bearer ", "");
      const decoded = await tokenHelper.verifyToken(token);
      if (!decoded || typeof decoded !== "object") {
        return reply.status(401).send({ error: "Token inválido" });
      }
      const userId = decoded.userId as string;

      const bodyResult = updateUserSchema.safeParse(req.body);
      if (!bodyResult.success) {
        return reply.status(400).send({ error: bodyResult.error.issues });
      }

      // Normalize cpf/cnpj if provided
      const data = {
        ...bodyResult.data,
        cpf: onlyDigits(bodyResult.data.cpf),
        cnpj: onlyDigits(bodyResult.data.cnpj),
      };

      // Prevent duplications with other users (exclude current user)
      if (data.email || data.cpf || data.cnpj) {
        const conflicting = await prisma.user.findFirst({
          where: {
            AND: [
              {
                OR: [
                  data.email ? { email: data.email } : undefined,
                  data.cpf ? { cpf: data.cpf } : undefined,
                  data.cnpj ? { cnpj: data.cnpj } : undefined,
                ].filter(Boolean) as any[],
              },
              { id: { not: userId } },
            ],
          },
        });

        if (conflicting) {
          return reply.status(401).send({ error: "Este usuário já foi registrado" });
        }
      }

      await authService.updateUser(userId, data);

      return reply.status(200).send({ message: "Usuário atualizado com sucesso" });
    } catch (error) {
      return reply.status(500).send({ error: "Erro interno do servidor" });
    }
  },

  async delete(req: FastifyRequest, reply: FastifyReply) {
    try {
      const headerResult = authHeaderSchema.safeParse(req.headers);
      if (!headerResult.success) {
        return reply.status(401).send({ error: headerResult.error.issues });
      }

      const token = headerResult.data.authorization.replace("Bearer ", "");
      const decoded = await tokenHelper.verifyToken(token);
      if (!decoded || typeof decoded !== "object") {
        return reply.status(401).send({ error: "Token inválido" });
      }
      const userId = decoded.userId as string;

      await prisma.user.delete({ where: { id: userId } });

      return reply.status(200).send({ message: "Usuário deletado com sucesso" });
    } catch (error) {
      return reply.status(500).send({ error: "Erro interno do servidor" });
    }
  },

  async login(req: FastifyRequest, reply: FastifyReply) {
    try {
      const bodyResult = loginSchema.safeParse(req.body);
      if (!bodyResult.success) {
        return reply.status(400).send({ error: bodyResult.error.issues });
      }

      const data = bodyResult.data;

      // Normalize cpf/cnpj to digits to match how we stored them
      const normCpf = onlyDigits(data.cpf);
      const normCnpj = onlyDigits(data.cnpj);

      // Build an OR where only with provided fields
      const orClauses = [
        data.email ? { email: data.email } : undefined,
        normCpf ? { cpf: normCpf } : undefined,
        normCnpj ? { cnpj: normCnpj } : undefined,
      ].filter(Boolean) as any[];

      const user = await prisma.user.findFirst({ where: { OR: orClauses } });

      if (!user) {
        return reply.status(404).send({ message: "Usuário não encontrado" });
      }

      const isValid = await passwordHelper.validatePassword(data.password, user.password);
      if (!isValid) {
        return reply.status(401).send({ message: "Credenciais inválidas" });
      }

      const token = await tokenHelper.generateToken(user.id);
      return reply.status(200).send({ message: "Usuário logado com sucesso", token });
    } catch (error) {
      return reply.status(500).send({ error: "Erro interno do servidor" });
    }
  },
};
