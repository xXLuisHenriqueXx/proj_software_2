import type { FastifyInstance } from "fastify";
import { z } from "zod";

import { authController } from "./controllers/authController";
import { ToyController } from "./controllers/toyController";
import { BenefitController } from "./controllers/benefitController"; // 👈 novo

import { authMiddleware } from "./middleware/authMiddleware";
import {
  registerSchema,
  loginSchema,
  updateUserSchema,
  updateAvatarSchema,
  userResponseSchema
} from "./schemas/authValidationSchemas";
import {
  toyCreateSchema,
  toyUpdateSchema,
  getToySchema,
  toyResponseSchema,
  toyListSchema
} from "./schemas/toyValidationSchemas";
import {
  benefitCreateSchema,          // 👈 novo
  benefitUpdateSchema,          // 👈 novo
  grantBenefitSchema,           // 👈 novo
  userIdParamSchema,            // 👈 novo
  idParamSchema,                // 👈 novo
} from "./schemas/benefitSchemas";

export async function routes(app: FastifyInstance) {

  // ===== Auth =====
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

  // ===== Toys =====
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

  // ===== Benefits (novo) =====
  // Lista benefícios ativos do utilizador (endpoint que o front vai consumir)
  app.get('/users/:userId/benefits/active', {
    schema: {
      tags: ['Benefits'],
      summary: 'Lista benefícios ativos do utilizador',
      params: userIdParamSchema,
    }
  }, BenefitController.listActiveForUser);

  // Catálogo: listar
  app.get('/benefits', {
    schema: {
      tags: ['Benefits'],
      summary: 'Lista catálogo de benefícios',
    }
  }, BenefitController.list);

  // Catálogo: criar (recomendo proteger com auth/role)
  app.post('/benefits', {
    onRequest: [authMiddleware],
    schema: {
      tags: ['Benefits'],
      summary: 'Cria um benefício no catálogo',
      body: benefitCreateSchema,
    }
  }, BenefitController.create);

  // Catálogo: atualizar (recomendo proteger com auth/role)
  app.patch('/benefits/:id', {
    onRequest: [authMiddleware],
    schema: {
      tags: ['Benefits'],
      summary: 'Atualiza um benefício do catálogo',
      params: idParamSchema,
      body: benefitUpdateSchema,
    }
  }, BenefitController.update);

  // Conceder benefício a um utilizador (recomendo proteger com auth/role)
  app.post('/users/:userId/benefits/grant', {
    onRequest: [authMiddleware],
    schema: {
      tags: ['Benefits'],
      summary: 'Concede um benefício a um utilizador',
      params: userIdParamSchema,
      body: grantBenefitSchema,
    }
  }, BenefitController.grant);
}
