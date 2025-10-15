import { FastifyRequest, FastifyReply } from "fastify";
import { prisma } from "../../lib/prisma";
import { z } from "zod";

export async function getUserHistory(request: FastifyRequest, reply: FastifyReply) {
  const userId = request.user.sub;

  const historyEntries = await prisma.historyEntry.findMany({
    where: {
      userId: userId,
      visible: true,
    },
    include: {
      toy: {
        include: {
          ToyPictures: true,
        },
      },
    },
    orderBy: {
      createdAt: 'desc', 
    },
  });

  return reply.status(200).send(historyEntries);
}

export async function hideHistoryEntry(request: FastifyRequest, reply: FastifyReply) {
  const userId = request.user.sub;

  const hideHistoryParamsSchema = z.object({
    historyId: z.string().uuid(),
  });

  const { historyId } = hideHistoryParamsSchema.parse(request.params);

  try {

    await prisma.historyEntry.update({
      where: {
        id: historyId,
        userId: userId, 
      },
      data: {
        visible: false, 
      },
    });
    return reply.status(204).send();

  } catch (error) {
    return reply.status(404).send({ message: "Registro de histórico não encontrado." });
  }
}