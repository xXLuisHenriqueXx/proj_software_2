import type { FastifyInstance } from "fastify";
import { z } from "zod";

import { authController } from "./controllers/authController";
import { ToyController } from "./controllers/toyController";
import { HighlightController } from "./controllers/highlightController";
import { InstituteController } from "./controllers/instituteController";
import { getUserHistory, hideHistoryEntry } from './controllers/historyController';
import { favoriteController } from "./controllers/favoriteController"

import { authMiddleware } from "./middleware/authMiddleware";

import {
  registerSchema,
  loginSchema,
  updateUserSchema,
  updateAvatarSchema,
  userResponseSchema,
  getMeResponseSchema,
} from "./schemas/authValidationSchemas";
import {
  toyCreateSchema,
  toyUpdateSchema,
  getToySchema,
  toyResponseSchema,
  toyListSchema
} from "./schemas/toyValidationSchemas";
import { highlightResponseSchema, highlightListSchema } from "./schemas/highlightsValidationSchema";
import { institutesResponseSchema, instituteResponseSchema } from "./schemas/instituteValidationSchema";
import {
  addFavoriteSchema,
  removeFavoriteSchema,
  favoriteResponseSchema,
  favoriteListResponseSchema,
} from "./schemas/favoriteValidationSchema"


export async function routes(app: FastifyInstance) {
  app.get('/health', {
    schema: {
      tags: ['Health'],
      summary: 'Verifica se a API está rodando',
      response: {
        200: z.object({ status: z.string() })
      }
    }
  }, async () => {
    return { status: "ok" };
  });

  app.post('/auth/register', {
    schema: {
      tags: ['Auth'],
      summary: 'Regista um novo utilizador',
      body: registerSchema,
      response: { 201: z.object({ user: userResponseSchema, token: z.string() }) }
    }
  }, authController.register);

  app.post('/auth/login', {
    schema: {
      tags: ['Auth'],
      summary: 'Autentica um utilizador e retorna um token',
      body: loginSchema,
      response: { 200: z.object({ user: userResponseSchema, token: z.string() }) }
    }
  }, authController.login);

  app.get('/users/me', {
    onRequest: [authMiddleware],
    schema: {
        tags: ['Users'],
        summary: 'Busca os dados completos do usuário autenticado e seus brinquedos',
        security: [{ bearerAuth: [] }],
        response: {
            200: getMeResponseSchema
        }
    }
  }, authController.getMe);

  app.patch('/users/me', {
    onRequest: [authMiddleware],
    schema: {
      tags: ['Users'],
      summary: 'Atualiza informações do utilizador autenticado',
      security: [{ bearerAuth: [] }],
      body: updateUserSchema,
      response: {
        200: z.object({
          message: z.string(),
          user: userResponseSchema
        })
      }
    }
  }, authController.update);

  app.patch('/users/picture', {
    onRequest: [authMiddleware],
    schema: {
      tags: ['Users'],
      summary: 'Atualiza a foto de perfil do utilizador autenticado',
      security: [{ bearerAuth: [] }],
      body: updateAvatarSchema,
    }
  }, authController.updatePicture);

  app.delete('/users/me', {
    onRequest: [authMiddleware],
    schema: {
      tags: ['Users'],
      summary: 'Deleta o utilizador autenticado',
    }
  }, authController.delete);

  app.post('/toys', {
    onRequest: [authMiddleware],
    schema: {
      tags: ['Toys'],
      summary: 'Cria um novo brinquedo',
      security: [{ bearerAuth: [] }],
      body: toyCreateSchema,
      response: { 201: toyResponseSchema }
    }
  }, ToyController.create);

  app.get('/toys/:toyId', {
    schema: {
      tags: ['Toys'],
      summary: 'Busca um brinquedo por ID',
      params: getToySchema,
      response: { 200: toyResponseSchema }
    }
  }, ToyController.getToy);

  app.post('/toys/list', {
    schema: {
      tags: ['Toys'],
      summary: 'Lista brinquedos com filtros e paginação',
      body: toyListSchema,
    }
  }, ToyController.getToyList);

  app.patch('/toys/:toyId', {
    onRequest: [authMiddleware],
    schema: {
      tags: ['Toys'],
      summary: 'Atualiza um brinquedo existente',
      security: [{ bearerAuth: [] }],
      params: getToySchema,
      body: toyUpdateSchema,
      response: { 200: toyResponseSchema }
    }
  }, ToyController.update);

  app.delete('/toys/:toyId', {
    onRequest: [authMiddleware],
    schema: {
      tags: ['Toys'],
      summary: 'Deleta um brinquedo existente',
      security: [{ bearerAuth: [] }],
      params: getToySchema,
      response: { 200: z.object({ message: z.string() }) }
    }
  }, ToyController.delete);

  app.get('/highlights', {
    schema: {
      tags: ['Highlights'],
      summary: 'Lista todos os highlights disponíveis',
      response: { 200: highlightListSchema }
    }
  }, HighlightController.getHighlights);

  app.get('/highlights/:id', {
    schema: {
      tags: ['Highlights'],
      summary: 'Busca um highlight por ID e retorna brinquedos associados',
      params: z.object({ id: z.string() }),
      response: { 200: highlightResponseSchema }
    }
  }, HighlightController.getHighlight);

  app.get('/institutes', {
    schema: {
      tags: ['Institutes'],
      summary: 'Lista todas as instituições aprovadas',
      response: { 200: institutesResponseSchema },
    },
  }, InstituteController.getAll);

  app.get('/institutes/:id', {
    schema: {
      tags: ['Institutes'],
      summary: 'Busca uma instituição pelo ID',
      params: z.object({ id: z.string() }),
      response: { 200: instituteResponseSchema },
    },
  }, InstituteController.getById);


  app.get("/history", { onRequest: [authMiddleware] }, getUserHistory);

  app.patch("/history/:historyId", { onRequest: [authMiddleware] }, hideHistoryEntry);

  app.post(
    "/favorites",
    {
      onRequest: [authMiddleware],
      schema: {
        tags: ["Favorites"],
        summary: "Adiciona um brinquedo aos favoritos",
        security: [{ bearerAuth: [] }],
        body: addFavoriteSchema,
        response: {
          201: favoriteResponseSchema,
        },
      },
    },
    favoriteController.addFavorite
  );

  app.get(
    "/favorites",
    {
      onRequest: [authMiddleware],
      schema: {
        tags: ["Favorites"],
        summary: "Lista os brinquedos favoritos do usuário",
        security: [{ bearerAuth: [] }],
        response: {
          200: favoriteListResponseSchema,
        },
      },
    },
    favoriteController.getFavorites
  );

  app.delete(
    "/favorites/:toyId",
    {
      onRequest: [authMiddleware],
      schema: {
        tags: ["Favorites"],
        summary: "Remove um brinquedo dos favoritos",
        security: [{ bearerAuth: [] }],
        params: removeFavoriteSchema,
        response: {
          200: z.object({ message: z.string() }),
        },
      },
    },
    favoriteController.removeFavorite
  );
}