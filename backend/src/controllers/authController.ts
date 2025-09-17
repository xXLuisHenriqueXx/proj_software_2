import { FastifyReply, FastifyRequest } from "fastify";
import { prisma } from "../prisma";
import { authService } from "../services/authService";
import { tokenHelper } from "../helpers/tokenHelper";
import sharp from 'sharp';
import { randomUUID } from "node:crypto";
import { z } from "zod";
import { registerSchema, updateAvatarSchema, updateUserSchema, loginSchema } from "../schemas/authValidationSchemas";
import { passwordHelper } from "../helpers/passwordHelper";

type RegisterBody = z.infer<typeof registerSchema>;
type LoginBody = z.infer<typeof loginSchema>;
type UpdateUserBody = z.infer<typeof updateUserSchema>;
type UpdateAvatarBody = z.infer<typeof updateAvatarSchema>;

export function safeUser(user: any) {
  return {
    id: user.id,
    name: user.name,
    email: user.email,
    picture: user.picture ?? null
  };
}

export const authController = {
    async register(req: FastifyRequest<{ Body: RegisterBody }>, reply: FastifyReply) {
        try {
            const data = req.body;
            const userExists = await prisma.user.findFirst({
                where: { OR: [{ email: data.email }, { cpf: data.cpf }] },
            });
            if (userExists) {
                return reply.status(409).send({ message: "Este usuário já foi registrado" });
            }
            const user = await authService.createUser(data);
            const token = await tokenHelper.generateToken(user.id);
            return reply.status(201).send({ user: safeUser(user), token });
        } catch (error) {
            console.error("Erro no controller de registro:", error);
            return reply.status(500).send({ message: "Erro interno do servidor" });
        }
    },

    async update(req: FastifyRequest<{ Body: UpdateUserBody }>, reply: FastifyReply) {
        try {
            const userId = (req.user as any).userId;
            const updateData = req.body;
            const updatedUser = await authService.updateUser(userId, updateData);
            return reply.status(200).send({ message: "Usuário atualizado com sucesso", user: updatedUser });
        } catch (error) {
            console.error("Erro no controller de update:", error);
            return reply.status(500).send({ message: "Erro interno do servidor" });
        }
    },

    async delete(req: FastifyRequest, reply: FastifyReply) {
        try {
            const userId = (req.user as any).userId;
            await prisma.user.delete({ where: { id: userId } });
            return reply.status(200).send({ message: "Usuário deletado com sucesso" });
        } catch (error) {
            console.error("Erro no controller de delete:", error);
            return reply.status(500).send({ message: "Erro interno do servidor" });
        }
    },

    async login(req: FastifyRequest, reply: FastifyReply) {
        try {
            const data = req.body as any;
            const user = await prisma.user.findFirst({
                where: { OR: [{ email: data.email }, { cpf: data.cpf }] },
            });
            if (!user) {
                return reply.status(404).send({ message: "Usuário não encontrado" });
            }
            const token = await tokenHelper.generateToken(user.id);
            if (await passwordHelper.validatePassword(data.password, user.password)) {
                return reply.status(200).send({ user: safeUser(user), token });
            } else {
                return reply.status(401).send({ message: "Credenciais inválidas" });
            }
        } catch (error) {
            console.error("Erro no controller de login:", error);
            return reply.status(500).send({ message: "Erro interno do servidor" });
        }
    },

    async updatePicture(req: FastifyRequest<{ Body: UpdateAvatarBody }>, reply: FastifyReply) {
        try {
            const userId = (req.user as any).userId;
            const { avatarBase64 } = req.body;
            const base64Data = avatarBase64.replace(/^data:image\/\w+;base64,/, "");
            const imageBuffer = Buffer.from(base64Data, 'base64');
            const processedImageBuffer = await sharp(imageBuffer)
                .resize(512, 512, { fit: 'inside', withoutEnlargement: true })
                .jpeg({ quality: 80 })
                .toBuffer();
            const optimizedBase64String = `data:image/jpeg;base64,${processedImageBuffer.toString('base64')}`;
            await authService.updatePicture(userId, optimizedBase64String);
            return reply.status(200).send({ message: "Foto atualizada com sucesso" });
        } catch (error) {
            console.error("Erro no controller de updatePicture:", error);
            return reply.status(500).send({ message: "Erro interno do servidor" });
        }
    }
}

