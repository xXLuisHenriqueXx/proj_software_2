import type { FastifyInstance } from "fastify";
import { z } from "zod";

import { authController } from "./controllers/authController";
import { ToyController } from "./controllers/toyController";

import {
  authHeaderSchema,
  loginSchema,
  registerSchema,
  updateUserSchema,
} from "./schemas/authValidationSchemas";

export async function routes(app: FastifyInstance) {
  // ======================
  // Authentication routes
  // ======================
  app.post(
    "/auth/register",
    {
      schema: {
        tags: ["Authentication"],
        summary: "Register a new user",
        body: registerSchema,
        response: {
          200: z
            .object({
              message: z.string(),
              token: z.string(),
            })
            .describe("User registered successfully"),
        },
      },
    },
    authController.register
  );

  app.patch(
    "/auth/patch",
    {
      schema: {
        tags: ["Authentication"],
        summary: "Update existing user",
        headers: authHeaderSchema,
        body: updateUserSchema,
        response: {
          200: z
            .object({
              message: z.string(),
            })
            .describe("User updated successfully"),
        },
      },
    },
    authController.update
  );

  app.delete(
    "/auth/delete",
    {
      schema: {
        tags: ["Authentication"],
        summary: "Delete existing user",
        headers: authHeaderSchema,
        response: {
          200: z
            .object({
              message: z.string(),
            })
            .describe("User deleted successfully"),
        },
      },
    },
    authController.delete
  );

  app.post(
    "/auth/login",
    {
      schema: {
        tags: ["Authentication"],
        summary: "Provide auth token",
        body: loginSchema,
        response: {
          200: z
            .object({
              token: z.string(),
            })
            .describe("User logged sucessfully"),
        },
      },
    },
    authController.login
  );

  // ======================
  // Toy feed / history routes
  // ======================
  app.post(
    "/toys/:id/view",
    {
      schema: {
        tags: ["Toys"],
        summary: "Registrar visualização de um brinquedo",
        headers: authHeaderSchema,
        params: z.object({
          id: z.string().uuid(),
        }),
        response: {
          200: z.object({
            recorded: z.boolean(),
          }),
        },
      },
    },
    ToyController.recordView
  );

  app.get(
    "/toys/feed",
    {
      schema: {
        tags: ["Toys"],
        summary: "Obter feed de brinquedos baseado no histórico",
        headers: authHeaderSchema,
        querystring: z.object({
          limit: z.coerce.number().min(1).max(50).default(10).optional(),
          cursor: z.string().optional(),
          // comma-separated list of IDs already shown on the client
          excludeIds: z.string().optional(),
        }),
        // You can expand this response schema later to match your Toy shape
        response: {
          200: z.object({
            items: z.array(z.any()),
            nextCursor: z.string().optional(),
          }),
        },
      },
    },
    ToyController.getFeed
  );
}
