import { FastifyReply, FastifyRequest } from "fastify";
import { prisma } from "../prisma";
import { authService } from "../services/authService";
import { tokenHelper } from "../helpers/tokenHelper";
import {
    loginSchema,
    registerSchema,
    updateUserSchema,
    authHeaderSchema,
    updateAvatarSchema
} from "../schemas/authValidationSchemas";
import { passwordHelper } from "../helpers/passwordHelper";
import * as sharp from 'sharp';
import { randomUUID } from "node:crypto";

export const authController = {
    async register(req: FastifyRequest, reply: FastifyReply) {
        try {
            const result = registerSchema.safeParse(req.body);
            if (!result.success) {
                return reply.status(400).send({ error: result.error.issues });
            }

            const data = result.data;

            const userExists = await prisma.user.findFirst({
                where: { OR: [{ email: data.email }, { cpf: data.cpf }] },
            });
            if (userExists) {
                return reply.status(409).send({ error: "Este usuário já foi registrado" });
            }

            const user = await authService.createUser(data);
            const authToken = await tokenHelper.generateToken(user.id);
            return reply.status(201).send({ message: "Usuário criado com sucesso", token: authToken });

        } catch (error) {
            console.error("Erro no controller de registro:", error);
            return reply.status(500).send({ error: "Erro interno do servidor" });
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
            if (!decoded || typeof decoded !== "object" || !decoded.sub) {
                return reply.status(401).send({ error: "Token inválido ou expirado" });
            }
            const userId = decoded.sub;

            const bodyResult = updateUserSchema.safeParse(req.body);
            if (!bodyResult.success) {
                return reply.status(400).send({ error: bodyResult.error.issues });
            }

            await authService.updateUser(userId, bodyResult.data);
            return reply.status(200).send({ message: "Usuário atualizado com sucesso" });

        } catch (error) {
            console.error("Erro no controller de update:", error);
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
            if (!decoded || typeof decoded !== "object" || !decoded.sub) {
                return reply.status(401).send({ error: "Token inválido ou expirado" });
            }
            const userId = decoded.sub;

            await prisma.user.delete({ where: { id: userId } });
            return reply.status(200).send({ message: "Usuário deletado com sucesso" });

        } catch (error) {
            console.error("Erro no controller de delete:", error);
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

            const user = await prisma.user.findFirst({
                where: { OR: [{ email: data.email }, { cpf: data.cpf }] },
            });
            if (!user) {
                return reply.status(404).send({ message: "Usuário não encontrado" });
            }

            if (await passwordHelper.validatePassword(data.password, user.password)) {
                const token = await tokenHelper.generateToken(user.id);
                return reply.status(200).send({ message: "Usuário logado com sucesso", token });
            } else {
                return reply.status(401).send({ message: "Credenciais inválidas" });
            }
        } catch (error) {
            console.error("Erro no controller de login:", error);
            return reply.status(500).send({ error: "Erro interno do servidor" });
        }
    },
    async updatePicture(req: FastifyRequest, reply: FastifyReply) {
        try {
            const headerResult = authHeaderSchema.safeParse(req.headers);
            if (!headerResult.success) {
                return reply.status(401).send({ error: headerResult.error.issues });
            }
            const token = headerResult.data.authorization.replace("Bearer ", "");
            const decoded = await tokenHelper.verifyToken(token);
            if (!decoded || typeof decoded !== "object" || !decoded.sub) {
                return reply.status(401).send({ error: "Token inválido ou expirado" });
            }
            const userId = decoded.sub;

            const bodyResult = updateAvatarSchema.safeParse(req.body);
            if (!bodyResult.success) {
                return reply.status(400).send({ error: bodyResult.error.issues });
            }
            const { avatarBase64 } = bodyResult.data;

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
            return reply.status(500).send({ error: "Erro interno do servidor" });
        }
    }
}

