import type { FastifyInstance } from "fastify";
import { z } from "zod";
import websocket from '@fastify/websocket';

import { authController } from "./controllers/authController";
import { ToyController } from "./controllers/toyController";
import { HighlightController } from "./controllers/highlightController";
import { InstituteController } from "./controllers/instituteController";
import { getUserHistory, hideHistoryEntry } from './controllers/historyController';
import { favoriteController } from "./controllers/favoriteController"
import { chatController } from './controllers/chatController';
import { createChatSchema, allChats, getChatInfoById, sendMessage, allMessages, chat, messageSchema, wsNewMessageSchema, wsSendMessageSchema, wsGetLatestMessageSchema, wsNoMessagesSchema, wsTokenQuery } from "./schemas/chatValidationSchema";

import { authMiddleware } from "./middleware/authMiddleware";

import {
  registerSchema,
  loginSchema,
  updateUserSchema,
  updateAvatarSchema,
  userResponseSchema,
  getMeResponseSchema,
  updatePictureResponseSchema,
  deleteUserResponseSchema,
} from "./schemas/authValidationSchemas";
import {
  toyCreateSchema,
  toyUpdateSchema,
  getToySchema,
  toyResponseSchema,
  toyListSchema,
  toyListResponseSchema,
} from "./schemas/toyValidationSchemas";
import { highlightResponseSchema, highlightListSchema } from "./schemas/highlightsValidationSchema";
import { institutesResponseSchema, instituteResponseSchema } from "./schemas/instituteValidationSchema";
import {
  addFavoriteSchema,
  removeFavoriteSchema,
  favoriteResponseSchema,
  favoriteListResponseSchema,
} from "./schemas/favoriteValidationSchema"
import {
  historyParamsSchema,
  getUserHistoryResponseSchema
} from "./schemas/historyValidationSchemas";


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
      response: {
        200: updatePictureResponseSchema
      }
    }
  }, authController.updatePicture);

  app.delete('/users/me', {
    onRequest: [authMiddleware],
    schema: {
      tags: ['Users'],
      summary: 'Deleta o utilizador autenticado',
      security: [{ bearerAuth: [] }],
      response: {
        200: deleteUserResponseSchema
      }
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
      response: {
        200: toyListResponseSchema
      }
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
      response: { 200: z.object({ message: z.string(), toy: toyResponseSchema }) }
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

  app.get("/history", {
    onRequest: [authMiddleware],
    schema: {
      tags: ["History"],
      summary: "Busca o histórico de visualização do usuário",
      security: [{ bearerAuth: [] }],
      response: {
        200: getUserHistoryResponseSchema
      }
    }
  }, getUserHistory);

  app.patch("/history/:historyId", {
    onRequest: [authMiddleware],
    schema: {
      tags: ["History"],
      summary: "Oculta um item do histórico de visualização",
      security: [{ bearerAuth: [] }],
      params: historyParamsSchema,
      response: {
        204: z.void()
      }
    }
  }, hideHistoryEntry);

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
  app.post("/chat", {
    onRequest: [authMiddleware],
    schema: {
      tags: ["Chats"],
      summary: "Cria um novo chat entre o usuário logado e outro usuário",
      body: createChatSchema,
      response: {
        201: chat,
        400: z.object({ message: z.string() }),
        409: z.object({ message: z.string() })
      },
      security: [{ bearerAuth: [] }],
    },
  }, chatController.createChat);

  app.get("/chat", {
    onRequest: [authMiddleware],
    schema: {
      tags: ["Chats"],
      summary: "Lista todos os chats do usuário logado",
      response: {
        200: allChats,
      },
      security: [{ bearerAuth: [] }],
    },
  }, chatController.getAllChats);

  app.post("/chat/messages", {
    onRequest: [authMiddleware],
    schema: {
      tags: ["Chats"],
      summary: "Busca todas as mensagens de um chat específico",
      body: getChatInfoById,
      response: {
        200: allMessages,
      },
      security: [{ bearerAuth: [] }],
    },
  }, chatController.getChatMessages);

  app.post("/chat/send", {
    onRequest: [authMiddleware],
    schema: {
      tags: ["Chats"],
      summary: "Envia uma mensagem em um chat existente",
      body: sendMessage,
      response: {
        201: messageSchema,
      },
      security: [{ bearerAuth: [] }],
    },
  }, chatController.sendMessage);
  app.get('/chat/ws/:chatId', {
    schema: {
      tags: ['Chats'],
      summary: 'WebSocket para um chat específico',
      description: 'Abre uma conexão WebSocket para enviar e receber mensagens em tempo real.',
      params: getChatInfoById,
      querystring: wsTokenQuery,
      security: [{ bearerAuth: [] }],
    },
    websocket: true,
  }, chatController.handleSocket);

  // Rota fake só para documentar
  app.get('/chat/ws/:chatId/doc', {
    schema: {
      tags: ['Chats'],
      summary: 'Documentação do WebSocket do chat',
      description: `
Conectar via WebSocket em ws://localhost:3000/api/chat/ws/{chatId}?token={token de autenticação}. Os inputs e outputs esperados estão no JSON da rota (/docs/json)

Mensagens enviadas pelo cliente:
  - sendMessage
  - getLatestMessage

Mensagens enviadas pelo servidor:
  - newMessage
  - no_messages
  - error
`,
      params: getChatInfoById,
      querystring: wsTokenQuery,
      security: [{ bearerAuth: [] }],
      'x-websocket': {
        clientMessages: [
          {
            schema: wsSendMessageSchema,
            description: 'Envia uma nova mensagem no chat',
          },
          {
            schema: wsGetLatestMessageSchema,
            description: 'Solicita todas as mensagens não lidas do chat',
          },
        ],
        serverMessages: [
          {
            schema: wsNewMessageSchema,
            description: 'Mensagem enviada ou recebida no chat',
          },
          {
            schema: wsNoMessagesSchema,
            description: 'Retornado quando não existem mensagens novas',
          },
          {
            schema: z.object({
              type: z.literal('error'),
              message: z.string(),
            }),
            description: 'Erro retornado pelo servidor (ex: chat não encontrado, usuário não participante)',
          },
        ],
      },
    },
  }, async () => {
    return { info: 'Apenas documentação' };
  });
}