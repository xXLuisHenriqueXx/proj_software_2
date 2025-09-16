import { prisma } from "../prisma";
import { z } from "zod";
import { toyCreateSchema, toyUpdateSchema, toyListSchema } from "../schemas/toyValidationSchemas";
import { pictureHelper } from "../helpers/pictureHelpers";

type ToyCreateData = z.infer<typeof toyCreateSchema>;
type ToyUpdateData = z.infer<typeof toyUpdateSchema>;
type ToyFilter = z.infer<typeof toyListSchema>['filter'];

export const ToyService = {
  async createToy(data: ToyCreateData, ownerId: string): Promise<any> {
    if (data.discount && data.discount > data.price) {
      throw new Error("Desconto não pode ser maior que o preço");
    }
    
    data.pictures?.forEach((pic) => {
      if (!pictureHelper.isValidBase64Image(pic)) {
        throw new Error("A foto precisa estar no formato base64");
      }
    });

    const { pictures, ...toyData } = data;

    const toy = await prisma.toy.create({
      data: {
        ...toyData,
        ownerId,
        ToyPictures: {
          create: pictures?.map((pic, index) => ({
            picture: pic,
            order: index + 1,
          })) || [],
        },
      },
      include: { ToyPictures: true, owner: true }
    });
    return toy;
  },

  async updateToy(toyId: string, data: ToyUpdateData, ownerId: string): Promise<any> {
    const toy = await prisma.toy.findUnique({ where: { id: toyId } });
    if (!toy) throw new Error("Brinquedo não encontrado");
    if (toy.ownerId !== ownerId) throw new Error("Você não tem permissão para atualizar este brinquedo");
    
    const { pictures, ...toyData } = data;

    const updatedToy = await prisma.toy.update({
      where: { id: toyId },
      data: {
        ...toyData,
        ToyPictures: pictures ? {
          deleteMany: {},
          create: pictures.map((pic, index) => ({
            picture: pic,
            order: index + 1,
          })),
        } : undefined,
      },
      include: { ToyPictures: true, owner: true }
    });
    return updatedToy;
  },

  async deleteToy(toyId: string, ownerId: string): Promise<boolean> {
    const toy = await prisma.toy.findUnique({ where: { id: toyId } });
    if (!toy) throw new Error("Brinquedo não encontrado");
    if (toy.ownerId !== ownerId) throw new Error("Você não tem permissão para deletar este brinquedo");

    await prisma.toy.delete({ where: { id: toyId } });
    return true;
  },
  
  async getToyById(id: string) {
    const toy = await prisma.toy.findUnique({
      where: { id },
      include: { 
        ToyPictures: { orderBy: { order: "asc" } },
        owner: { select: { id: true, name: true, picture: true } }
      },
    });
    return toy;
  },

  async searchToys(userId: string | null, page: number = 1, pageSize: number = 10, filter?: ToyFilter) {
  }
};

