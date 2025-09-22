import { FastifyReply, FastifyRequest } from "fastify";
import { z } from "zod";
import { ToyService } from "../services/toyService";
import { authHeaderSchema } from "../schemas/authValidationSchemas";
import {
  getToySchema,
  toyCreateSchema,
  toyListSchema,
  toyUpdateSchema,
} from "../schemas/toyValidationSchemas";
import { tokenHelper } from "../helpers/tokenHelper";

type ToyCreateBody = z.infer<typeof toyCreateSchema>;
type ToyUpdateBody = z.infer<typeof toyUpdateSchema>;
type GetToyParams = z.infer<typeof getToySchema>;
type toyListBody = z.infer<typeof toyListSchema>;

export const ToyController = {
  async create(
    req: FastifyRequest<{ Body: ToyCreateBody }>,
    reply: FastifyReply
  ) {
    try {
      const userId = (req as any).user.userId;

      const toy = await ToyService.createToy(req.body, userId);

      return reply.status(201).send(toy);
    } catch (error) {
      console.error("Erro ao criar brinquedo:", error);
      return reply.status(500).send({ error: "Erro interno do servidor" });
    }
  },

  async update(
    req: FastifyRequest<{ Body: ToyUpdateBody; Params: { id: string } }>,
    reply: FastifyReply
  ) {
    try {
      const userId = (req as any).user.userId;
      const { id: toyId } = req.params;

      const updatedToy = await ToyService.updateToy(toyId, req.body, userId);

      return reply
        .status(200)
        .send({ message: "Brinquedo atualizado com sucesso", toy: updatedToy });
    } catch (error) {
      console.error("Erro ao atualizar brinquedo:", error);
      return reply.status(500).send({
        error: "Erro interno do servidor",
        msg: (error as Error).message,
      });
    }
  },

  async delete(
    req: FastifyRequest<{ Params: { id: string } }>,
    reply: FastifyReply
  ) {
    try {
      const userId = (req as any).user.userId;
      const { id: toyId } = req.params;

      await ToyService.deleteToy(toyId, userId);

      return reply
        .status(200)
        .send({ message: "Brinquedo deletado com sucesso" });
    } catch (error) {
      console.error("Erro ao deletar brinquedo:", error);
      return reply.status(500).send({
        error: "Erro interno do servidor",
        msg: (error as Error).message,
      });
    }
  },

  async getToyList(
    req: FastifyRequest<{ Body: toyListBody }>,
    reply: FastifyReply
  ) {
    try {
      let userId: string | null = null;
      const headerResult = authHeaderSchema.safeParse(req.headers);
      if (headerResult.success) {
        const token = headerResult.data.authorization.replace("Bearer ", "");
        const decoded = await tokenHelper.verifyToken(token);
        if (!decoded || typeof decoded !== "object" || !decoded.userId) {
          return reply.status(401).send({ error: "Token inválido" });
        }
        userId = decoded.userId as string;
      }

      const data = req.body;

      const result = await ToyService.searchToys(
        userId,
        data.page,
        data.pageSize,
        data.filter
      );
      return reply.status(200).send(result);
    } catch (error) {
      console.error("Erro ao listar brinquedos:", error);
      return reply.status(500).send({ error: "Erro interno do servidor" });
    }
  },

  async getToy(
    req: FastifyRequest<{ Params: GetToyParams }>,
    reply: FastifyReply
  ) {
    try {
      let userId: string | null = null;
      const headerResult = authHeaderSchema.safeParse(req.headers);
      if (headerResult.success) {
        const token = headerResult.data.authorization.replace("Bearer ", "");
        const decoded = await tokenHelper.verifyToken(token);
        if (!decoded || typeof decoded !== "object" || !decoded.userId) {
          return reply.status(401).send({ error: "Token inválido" });
        }
        userId = decoded.userId as string;
      }
      const { toyId } = req.params;
      const toy = await ToyService.getToyById(toyId);

      if (!toy) {
        return reply.status(404).send({ message: "Brinquedo não encontrado" });
      }
      if (userId) {
        await ToyService.pushToUserHistory(userId, toyId);
      }
      return reply.status(200).send(toy);
    } catch (error) {
      console.error("Erro ao buscar brinquedo:", error);
      return reply.status(500).send({ error: "Erro interno do servidor" });
    }
  },
};
