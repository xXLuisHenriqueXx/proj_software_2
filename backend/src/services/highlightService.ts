import { prisma } from "../prisma";
import { Highlight } from "../generated/prisma";
import { ToyHelper } from "../helpers/toyHelper";

export const HighlightService = {
  async getAllHighlights() {
    return prisma.highlight.findMany({
      orderBy: { createdAt: "asc" },
    });
  },

  async getHighlightById(id: string, userId?: string) {
    const highlight = await prisma.highlight.findUnique({ where: { id } });
    if (!highlight) {
      throw new Error("Highlight não encontrado");
    }

    const toys = await this.getHighlightToys(highlight, userId);

    return {
      ...highlight,
      toys,
    };
  },

  async getHighlightToys(highlight: Highlight, userId?: string) {
    let toys;

    switch (highlight.type) {
      case "FREE":
        toys = await prisma.toy.findMany({
          where: { price: 0 },
          orderBy: { createdAt: "desc" },
          take: 10,
          include: { ToyPictures: true },
        });
        break;

      case "NEW":
        toys = await prisma.toy.findMany({
          where: { isNew: true },
          orderBy: { createdAt: "desc" },
          take: 10,
          include: { ToyPictures: true },
        });
        break;

      case "RECENT":
        toys = await prisma.toy.findMany({
          orderBy: { createdAt: "desc" },
          take: 10,
          include: { ToyPictures: true },
        });
        break;

      case "POPULAR":
        toys = await prisma.toy.findMany({
          orderBy: { history: { _count: "desc" } },
          take: 10,
          include: { ToyPictures: true },
        });
        break;

      case "NEARBY":
        if (!userId) return [];
        const user = await prisma.user.findUnique({ where: { id: userId } });
        if (!user) return [];

        const toysAll = await prisma.toy.findMany({
          include: { ToyPictures: true, owner: true },
        });

        const prefixLength = 5;
        const userCepPrefix = user.addressCep.slice(0, prefixLength);

        const toysSorted = toysAll
          .map((toy) => {
            const toyCepPrefix = toy.owner.addressCep.slice(0, prefixLength);
            const score = toyCepPrefix === userCepPrefix ? 1 : 0;
            return { ...toy, _score: score };
          })
          .sort((a, b) => b._score - a._score)
          .slice(0, 10);

        return toysSorted;


      default:
        return [];
    }

    if (userId && toys && toys.length > 0) {
      const history = await prisma.historyEntry.findMany({
        where: { userId },
        include: { toy: true },
      });

      const seenToyIds = history.map((h) => h.toyId);
      const favoriteTypes = history.flatMap((h) => h.toy.type);
      const favoriteAgeGroups = history.map((h) => h.toy.ageGroup);
      const avgPrice =
        history.length > 0
          ? history.reduce((acc, h) => acc + h.toy.price, 0) / history.length
          : 0;

      const userProfile = {
        favoriteTypes: [...new Set(favoriteTypes)],
        favoriteAgeGroups: [...new Set(favoriteAgeGroups)],
        avgPrice,
        seenToyIds,
      };

      toys = toys
        .map((toy) => ({
          ...toy,
          _score: ToyHelper.computeToyRelevance(toy, userProfile),
        }))
        .sort((a, b) => b._score - a._score)
        .slice(0, 10);
    }

    return toys;
  },
};
