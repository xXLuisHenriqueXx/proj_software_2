import { FastifyReply, FastifyRequest } from "fastify";
import { HighlightService } from "../services/highlightService";
import { authHeaderSchema } from "../schemas/authValidationSchemas";
import { tokenHelper } from "../helpers/tokenHelper";

export const HighlightController = {
  async getHighlights(req: FastifyRequest, reply: FastifyReply) {
    try {
      const highlights = await HighlightService.getAllHighlights();
      return reply.status(200).send(highlights);
    } catch (error) {
      console.error("Erro ao listar highlights:", error);
      return reply.status(500).send({ error: "Erro interno do servidor" });
    }
  },

  async getHighlight(req: FastifyRequest<{ Params: { id: string } }>, reply: FastifyReply) {
    try {
      let userId: string | undefined = undefined
            const headerResult = authHeaderSchema.safeParse(req.headers);
            if (headerResult.success) {
              const token = headerResult.data.authorization.replace("Bearer ", "");
              const decoded = await tokenHelper.verifyToken(token);
              if (!decoded || typeof decoded !== "object" || !decoded.userId) {
                return reply.status(401).send({ error: "Token inválido" });
              }
              userId = decoded.userId as string;
            }

      const { id } = req.params;
      const highlight = await HighlightService.getHighlightById(id, userId);

      if (!highlight) {
        return reply.status(404).send({ message: "Highlight não encontrado" });
      }

      return reply.status(200).send(highlight);
    } catch (error) {
      return reply.status(500).send({ error: error });
    }
  }
};
