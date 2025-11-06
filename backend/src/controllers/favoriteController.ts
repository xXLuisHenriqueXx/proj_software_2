import { FastifyReply, FastifyRequest } from "fastify";
import { z } from "zod";
import { prisma } from "../prisma";
import { addFavoriteSchema, removeFavoriteSchema } from "../schemas/favoriteValidationSchema";
import { ToyHelper } from "../helpers/toyHelper";

type AddFavoriteBody = z.infer<typeof addFavoriteSchema>;
type RemoveFavoriteParams = z.infer<typeof removeFavoriteSchema>;

export const favoriteController = {
  /**
   * Adiciona um brinquedo aos favoritos de um usuário.
   */
  async addFavorite(
    req: FastifyRequest<{ Body: AddFavoriteBody }>,
    reply: FastifyReply
  ) {
    try {
      const userId = (req.user as any).userId;
      const { toyId } = req.body;

      const toy = await prisma.toy.findUnique({ where: { id: toyId } });
      if (!toy) {
        return reply.status(404).send({ message: "Brinquedo não encontrado" });
      }

      const existingFavorite = await prisma.favorite.findUnique({
        where: { userId_toyId: { userId, toyId } },
      });

      if (existingFavorite) {
        return reply.status(409).send({ message: "Este brinquedo já está nos favoritos" });
      }

      const favorite = await prisma.favorite.create({
        data: { userId, toyId },
      });

      return reply.status(201).send(favorite);
    } catch (error) {
      console.error("Erro ao adicionar favorito:", error);
      return reply.status(500).send({ message: "Erro interno do servidor" });
    }
  },

  /**
   * Lista os brinquedos favoritos do usuário autenticado.
   */
  // src/controllers/favoriteController.ts

async getFavorites(req: FastifyRequest, reply: FastifyReply) {
  try {
    const userId = (req.user as any).userId;

    const favorites = await prisma.favorite.findMany({
      where: { userId },
      orderBy: { createdAt: "desc" },
      select: {
        toy: {
          include: {ToyPictures:true, owner: true}
          },
        },
      },
    );

    // Mapeia os resultados para montar o objeto de resposta final
    var favoriteToys = ToyHelper.fixToyListObject(favorites.map(fav => fav.toy));

    favoriteToys.map((favorite)=>{
      favorite.isFavorited = true
    })

    return reply.status(200).send(favoriteToys);
  } catch (error) {
    console.error("Erro ao buscar favoritos:", error);
    return reply.status(500).send({ message: "Erro interno do servidor" });
  }
},

  /**
   * Remove um brinquedo dos favoritos do usuário.
   */
  async removeFavorite(
    req: FastifyRequest<{ Params: RemoveFavoriteParams }>,
    reply: FastifyReply
  ) {
    try {
      const userId = (req.user as any).userId;
      const { toyId } = req.params;

      const favorite = await prisma.favorite.findUnique({
        where: { userId_toyId: { userId, toyId } },
      });

      if (!favorite) {
        return reply.status(404).send({ message: "Favorito não encontrado" });
      }

      await prisma.favorite.delete({
        where: { userId_toyId: { userId, toyId } },
      });

      return reply.status(200).send({ message: "Favorito removido com sucesso" });
    } catch (error) {
      console.error("Erro ao remover favorito:", error);
      return reply.status(500).send({ message: "Erro interno do servidor" });
    }
  },
};