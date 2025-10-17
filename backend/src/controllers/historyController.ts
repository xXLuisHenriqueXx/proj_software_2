import { FastifyRequest, FastifyReply } from "fastify";
import { prisma } from "../prisma";
import { z } from "zod";
import { ToyHelper } from "../helpers/toyHelper";

export async function getUserHistory(request: FastifyRequest, reply: FastifyReply) {
  const userId = request.user.sub;

  var historyEntries = await prisma.historyEntry.findMany({
    where: {
      userId: userId,
      visible: true,
    },
    include: {
      toy: {
        include: {
          ToyPictures: true, owner: true
        },
      },
    },
    orderBy: {
      createdAt: 'desc', 
    },
  });

  historyEntries.map((entry) => {
    entry.toy = ToyHelper.fixToyObject(entry.toy)
  })
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