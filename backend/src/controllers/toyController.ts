import { FastifyReply, FastifyRequest } from "fastify";
import { prisma } from "../prisma";
import { authService } from "../services/authService";
import { tokenHelper } from "../helpers/tokenHelper";

import {
    authHeaderSchema,
} from "../schemas/authValidationSchemas";

import { toyCreateSchema, toyListSchema } from "../schemas/toyValidationSchemas";
import { ToyService } from "../services/toyService";

export const ToyController = {
    async create(req: FastifyRequest, reply: FastifyReply) {
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

            const bodyResult = toyCreateSchema.safeParse(req.body)

            const toyData = { ...bodyResult.data }

            const toy = ToyService.createToy(toyData.name, toyData.price, toyData.usageTime, toyData.preservation, toyData.pictures, toyData.types, userId, toyData.discount)

            return reply.status(200).send({ message: "Brinquedo criado com sucesso" })
        } catch (error) {
            return reply.status(500).send({ error: error })
        }
    },
    async update(req: FastifyRequest, reply: FastifyReply) {
        try {
            const headerResult = authHeaderSchema.safeParse(req.headers)
            if (!headerResult.success) {
                return reply.status(401).send({ error: headerResult.error.issues })
            }

            const token = headerResult.data.authorization.replace("Bearer ", "")
            const decoded = await tokenHelper.verifyToken(token)
            if (!decoded || typeof decoded !== "object") {
                return reply.status(401).send({ error: "Token inválido" })
            }
            const userId = decoded.userId as string

            const toyId = (req.params as any).id
            const body = req.body as any

            const updatedToy = await ToyService.updateToy(toyId, body, userId)

            return reply.status(200).send({ message: "Brinquedo atualizado com sucesso", toy: updatedToy })
        } catch (error) {
            return reply.status(500).send({ error: (error as Error).message })
        }
    },
    async delete(req: FastifyRequest, reply: FastifyReply) {
        try {
            const headerResult = authHeaderSchema.safeParse(req.headers)
            if (!headerResult.success) {
                return reply.status(401).send({ error: headerResult.error.issues })
            }

            const token = headerResult.data.authorization.replace("Bearer ", "")
            const decoded = await tokenHelper.verifyToken(token)
            if (!decoded || typeof decoded !== "object") {
                return reply.status(401).send({ error: "Token inválido" })
            }
            const userId = decoded.userId as string

            const toyId = (req.params as any).id

            const deleted = await ToyService.deleteToy(toyId, userId)

            if (deleted) {
                return reply.status(200).send({ message: "Brinquedo deletado com sucesso" })
            }
        } catch (error) {
            return reply.status(500).send({ error: error })
        }
    },
    async getToyList(req: FastifyRequest, reply: FastifyReply) {
        try {
            let userId: string | null = null
            const headerResult = authHeaderSchema.safeParse(req.headers)

            if (headerResult.success) {
                const token = headerResult.data.authorization.replace("Bearer ", "")
                const decoded = await tokenHelper.verifyToken(token)
                if (decoded && typeof decoded === "object") {
                    userId = decoded.userId as string
                }
            }

            const bodyResult = toyListSchema.safeParse(req.body)
            if (!bodyResult.success) {
                return reply.status(400).send({ error: bodyResult.error.issues })
            }

            const { page, pageSize } = bodyResult.data

            const result = ToyService.searchToys(userId ? userId : null, page, pageSize, bodyResult.data.filter)

            return reply.status(200).send({ result })
        } catch (error) {
            return reply.status(500).send({ error: (error as Error).message })
        }
    }

}