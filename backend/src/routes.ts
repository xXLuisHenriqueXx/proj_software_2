import type { FastifyInstance } from "fastify";
import { z } from "zod";

import { authController } from "./controllers/authController";
import { ToyController } from "./controllers/toyController";
import { getPublicUserById } from "./services/userService";

import { HighlightController } from "./controllers/highlightController";
import { highlightResponseSchema, highlightListSchema } from "./schemas/highlightsValidationSchema";

import { authMiddleware } from "./middleware/authMiddleware";


import {
  registerSchema,
  loginSchema,
  updateUserSchema,
  updateAvatarSchema,
  userResponseSchema,
  userMeResponseSchema
} from "./schemas/authValidationSchemas";



import {
  toyCreateSchema,
  toyUpdateSchema,
  getToySchema,
  toyResponseSchema,
  toyListSchema
} from "./schemas/toyValidationSchemas";

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
    summary: 'Retorna informações do utilizador autenticado',
    response: { 200: userMeResponseSchema }
  }
}, async (req, reply) => {
  const userId = (req as any).user?.userId ?? (req as any).userId;
  if (!userId) return reply.status(401).send({ message: "Unauthorized" });
  const user = await getPublicUserById(userId);
  if (!user) return reply.status(404).send({ message: "User not found" });
  return reply.send(user);
});

  app.patch('/users/me', {
    onRequest: [authMiddleware],
    schema: {
      tags: ['Users'],
      summary: 'Atualiza informações do utilizador autenticado',
      body: updateUserSchema,
    }
  }, authController.update);

  app.patch('/users/picture', {
    onRequest: [authMiddleware],
    schema: {
      tags: ['Users'],
      summary: 'Atualiza a foto de perfil do utilizador autenticado',
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
      params: getToySchema,
    }
  }, ToyController.delete);

  app.get('/highlights', {
    schema: {
      tags: ['Highlights'],
      summary: 'Lista todos os highlights disponíveis',
      response: {200: highlightListSchema }
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
}
