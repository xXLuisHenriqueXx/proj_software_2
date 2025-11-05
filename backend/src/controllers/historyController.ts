import { FastifyRequest, FastifyReply } from "fastify";
import { prisma } from "../prisma";
import { z } from "zod";
import { ToyHelper } from "../helpers/toyHelper";
import { historyParamsSchema } from "../schemas/historyValidationSchemas";

export async function getUserHistory(request: FastifyRequest, reply: FastifyReply) {
  const userId = request.user.sub;

  let favoritedToyIds = new Set<string>();
  const userFavorites = await prisma.favorite.findMany({
    where: { userId },
    select: { toyId: true },
  });
  favoritedToyIds = new Set(userFavorites.map((f) => f.toyId));

  let historyEntries = await prisma.historyEntry.findMany({
    where: {
      userId: userId,
      visible: true,
    },
    include: {
      toy: {
        include: {
          ToyPictures: true,
          owner: true,
        },
      },
    },
    orderBy: {
      createdAt: 'desc',
    },
  });

  historyEntries = historyEntries.map((entry) => {

    const isFavorited = favoritedToyIds.has(entry.toyId);
    const fixedToy = ToyHelper.fixToyObject(entry.toy);

    entry.toy = {
      ...fixedToy,
      isFavorited: isFavorited,
    };
    return entry;
  });

  const uniqueMap = new Map<string, typeof historyEntries[0]>();
  for (const entry of historyEntries) {
    if (!uniqueMap.has(entry.toyId)) {
      uniqueMap.set(entry.toyId, entry);
    }
  }

  const uniqueHistoryEntries = Array.from(uniqueMap.values());

  return reply.status(200).send(uniqueHistoryEntries);
}

export async function hideHistoryEntry(request: FastifyRequest, reply: FastifyReply) {
  const userId = request.user.sub;

  const { historyId } = historyParamsSchema.parse(request.params);

  try {
    const historyEntry = await prisma.historyEntry.findUnique({
      where: { id: historyId },
    });

    if (!historyEntry) {
      return reply.status(404).send({ message: "Registro de histórico não encontrado." });
    }

    if (historyEntry.userId !== userId) {
      return reply.status(403).send({ message: "Você não pode modificar este histórico." });
    }

    await prisma.historyEntry.updateMany({
      where: {
        toyId: historyEntry.toyId,
        userId: userId,
      },
      data: {
        visible: false,
      },
    });

    return reply.status(204).send();
  } catch (error) {
    console.error(error);
    return reply.status(500).send({ message: "Erro ao atualizar histórico." });
  }
}