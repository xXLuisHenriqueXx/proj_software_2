import { FastifyReply, FastifyRequest } from "fastify";
import { tokenHelper } from "../helpers/tokenHelper";
import { authHeaderSchema } from "../schemas/authValidationSchemas";

export async function authMiddleware(request: FastifyRequest, reply: FastifyReply) {
  try {
    const headerResult = authHeaderSchema.safeParse(request.headers);
    if (!headerResult.success) return reply.status(401).send({ error: "Token não fornecido" });

    const token = headerResult.data.authorization.replace("Bearer ", "");
    const decoded = await tokenHelper.verifyToken(token);

    if (!decoded || typeof decoded !== "object" || !decoded.userId) {
      return reply.status(401).send({ error: "Token inválido ou expirado" });
    }

    (request as any).user = { userId: decoded.userId };
  } catch (err) {
    return reply.status(401).send({ message: "Autenticação necessária.", error: "Token inválido ou expirado" });
  }
}
