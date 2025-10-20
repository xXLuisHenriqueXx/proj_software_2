import { prisma } from "../prisma";
import { z } from "zod";
import {
  toyCreateSchema,
  toyUpdateSchema,
  toyListSchema,
} from "../schemas/toyValidationSchemas";
import { ToyHelper } from "../helpers/toyHelper";
import { ToyType } from "../generated/prisma";

type ToyCreateData = z.infer<typeof toyCreateSchema>;
type ToyUpdateData = z.infer<typeof toyUpdateSchema>;
type ToyFilter = z.infer<typeof toyListSchema>["filter"];

export const ToyService = {
  async createToy(data: ToyCreateData, ownerId: string): Promise<any> {
    if (data.discount && data.discount > data.price) {
      throw new Error("Desconto não pode ser maior que o preço");
    }

    const { pictures, ...toyData } = data;

    const toy = await prisma.toy.create({
      data: {
        ...toyData,
        ownerId,
        ToyPictures: {
          create:
            pictures?.map((pic, index) => ({
              picture: pic,
              order: index + 1,
            })) || [],
        },
      },
      include: {
        ToyPictures: { orderBy: { order: "asc" } },
        owner: { select: { id: true, name: true, picture: true } },
      },
    });

    return {
      id: toy.id,
      createdAt: toy.createdAt,
      name: toy.name,
      description: toy.description,
      price: toy.price,
      isNew: toy.isNew,
      canTrade: toy.canTrade,
      canLend: toy.canLend,
      usageTime: toy.usageTime,
      type: toy.type,
      ageGroup: toy.ageGroup,
      discount: toy.discount ?? undefined,
      pictures:
        toy.ToyPictures?.map((p) => ({
          id: p.id,
          order: p.order,
          picture: p.picture,
        })) ?? [],
      owner: {
        id: toy.owner.id,
        name: toy.owner.name,
        picture:
          toy.owner.picture ?? "/public/assets/avatar_not_found.webp",
      },
    };
  },

  async updateToy(toyId: string, data: ToyUpdateData, ownerId: string): Promise<any> {
    const toy = await prisma.toy.findUnique({ where: { id: toyId } });
    if (!toy) throw new Error("Brinquedo não encontrado");
    if (toy.ownerId !== ownerId)
      throw new Error("Você não tem permissão para atualizar este brinquedo");

    const { pictures, ...toyData } = data;

    const updatedToy = await prisma.toy.update({
      where: { id: toyId },
      data: {
        ...toyData,
        ToyPictures: pictures
          ? {
              deleteMany: {},
              create: pictures.map((pic, index) => ({
                picture: pic,
                order: index + 1,
              })),
            }
          : undefined,
      },
      include: {
        ToyPictures: { orderBy: { order: "asc" } },
        owner: { select: { id: true, name: true, picture: true } },
      },
    });

    return {
      id: updatedToy.id,
      createdAt: updatedToy.createdAt,
      name: updatedToy.name,
      description: updatedToy.description,
      price: updatedToy.price,
      isNew: updatedToy.isNew,
      canTrade: updatedToy.canTrade,
      canLend: updatedToy.canLend,
      usageTime: updatedToy.usageTime,
      type: updatedToy.type,
      ageGroup: updatedToy.ageGroup,
      discount: updatedToy.discount ?? undefined,
      pictures:
        updatedToy.ToyPictures?.map((p) => ({
          id: p.id,
          order: p.order,
          picture: p.picture,
        })) ?? [],
      owner: {
        id: updatedToy.owner.id,
        name: updatedToy.owner.name,
        picture:
          updatedToy.owner.picture ?? "/public/assets/avatar_not_found.webp",
      },
    };
  },

  async deleteToy(toyId: string, ownerId: string): Promise<any> {
    const toy = await prisma.toy.findUnique({
      where: { id: toyId },
      include: {
        ToyPictures: { orderBy: { order: "asc" } },
        owner: { select: { id: true, name: true, picture: true } },
      },
    });

    if (!toy) throw new Error("Brinquedo não encontrado");
    if (toy.ownerId !== ownerId)
      throw new Error("Você não tem permissão para deletar este brinquedo");

    await prisma.toy.delete({ where: { id: toyId } });

    return {
      id: toy.id,
      createdAt: toy.createdAt,
      name: toy.name,
      description: toy.description,
      price: toy.price,
      isNew: toy.isNew,
      canTrade: toy.canTrade,
      canLend: toy.canLend,
      usageTime: toy.usageTime,
      type: toy.type,
      ageGroup: toy.ageGroup,
      discount: toy.discount ?? undefined,
      pictures:
        toy.ToyPictures?.map((p) => ({
          id: p.id,
          order: p.order,
          picture: p.picture,
        })) ?? [],
      owner: {
        id: toy.owner.id,
        name: toy.owner.name,
        picture:
          toy.owner.picture ?? "/public/assets/avatar_not_found.webp",
      },
    };
  },

  async getToyById(id: string) {
    try {
      const toy = await prisma.toy.findUnique({
        where: { id: id },
        include: {
          ToyPictures: {
            orderBy: { order: "asc" },
          },
          owner: {
            select: {
              id: true,
              name: true,
              picture: true,
            },
          },
        },
      });

      if (!toy) {
        throw new Error("Brinquedo não encontrado");
      }

      const response = {
        id: toy.id,
        createdAt: toy.createdAt,
        name: toy.name,
        description: toy.description,
        price: toy.price,
        isNew: toy.isNew,
        canTrade: toy.canTrade,
        canLend: toy.canLend,
        usageTime: toy.usageTime,
        type: toy.type,
        ageGroup: toy.ageGroup,
        discount: toy.discount,
        pictures: toy.ToyPictures.map((p) => ({
          id: p.id,
          order: p.order,
          picture: p.picture,
        })),
        owner: {
          id: toy.owner.id,
          name: toy.owner.name,
          picture: toy.owner.picture
            ? toy.owner.picture
            : "/public/assets/avatar_not_found.webp",
        },
      };
      return response;
    } catch (error) {
      return { error: error };
    }
  },

  async pushToUserHistory(userId: string, toyId: string) {
    try {
      await prisma.historyEntry.create({
        data: {
          userId: userId,
          toyId: toyId,
        },
      });
      return "Brinquedo registrado no histórico com sucesso";
    } catch (error) {
      throw new Error(error);
    }
  },

  async searchToys(
    userId: string | null,
    page: number = 1,
    pageSize: number = 10,
    filter?: ToyFilter
  ) {
    const skip = (page - 1) * pageSize;
    const take = pageSize;

    if (pageSize > 100) {
      throw new Error("Não é possível buscar mais que 100 itens por vez");
    }

    const where: any = {};

    if (filter?.condition) {
      where.isNew = filter.condition === "NOVO";
    }

    if (filter?.type) {
      where.type = {
        has: filter.type,
      };
    }

    if (filter?.ageRange) {
      where.ageGroup = filter.ageRange;
    }

    if (filter?.priceRange) {
      where.price = {};
      if (filter.priceRange.min !== undefined) {
        where.price.gte = filter.priceRange.min;
      }
      if (filter.priceRange.max !== undefined) {
        where.price.lte = filter.priceRange.max;
      }
    }

    if (filter?.donation) {
      where.price = 0;
    }

    if (filter?.trade !== undefined) {
      where.canTrade = filter.trade;
    }
    if (filter?.lend !== undefined) {
      where.canLend = filter.lend;
    }

    if (filter?.search) {
      where.OR = [
        { name: { contains: filter.search, mode: "insensitive" } },
        { description: { contains: filter.search, mode: "insensitive" } },
      ];
    }

    let toys: any[] = [];

    if ((filter?.orderBy === "RELEVANTES" || !filter?.orderBy) && userId) {
      toys = await prisma.toy.findMany({
        where,
        include: { ToyPictures: true },
      });

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
        .sort((a, b) => b._score - a._score);

      toys = toys.slice(skip, skip + take);
    } else {
      let orderBy: any = { createdAt: "desc" };
      if (filter?.orderBy === "MENOR_PRECO") orderBy = { price: "asc" };
      if (filter?.orderBy === "MAIOR_PRECO") orderBy = { price: "desc" };

      toys = await prisma.toy.findMany({
        where,
        skip,
        take,
        orderBy,
        include: { ToyPictures: true },
      });
    }

    toys = toys.map((toy) => {
      const result = {
        ...toy,
        pictures: toy.ToyPictures.map((p) => ({
          id: p.id,
          order: p.order,
          picture: p.picture,
        })),
      };
      delete (result as any).ToyPictures;
      return result;
    });


    const total = await prisma.toy.count({ where });

    return {
      page,
      pageSize,
      total,
      totalPages: Math.ceil(total / pageSize),
      toys,
    };
  },
};
