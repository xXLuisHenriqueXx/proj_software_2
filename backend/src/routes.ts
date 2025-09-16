import type { FastifyInstance } from "fastify";
import { authController } from "./controllers/authController";
import { authHeaderSchema, loginSchema, registerSchema, updateUserSchema, updateAvatarSchema } from "./schemas/authValidationSchemas";
import { z } from "zod";

export async function routes(app: FastifyInstance) {
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
        }
      }
    },
    authController.register
  );
  app.patch(
    "/auth/patch", {
    schema: {
      tags: ["Authentication"],
      summary: "Update existing user",
      headers: authHeaderSchema,
      body: updateUserSchema,
      response: {
        200: z.object({
          message: z.string()
        }).describe("User updated successfully"),
      }
    }
  },
    authController.update
  ),
    app.delete(
      "/auth/delete", {
      schema: {
        tags: ["Authentication"],
        summary: "Delete existing user",
        headers: authHeaderSchema,
        response: {
          200: z.object({
            message: z.string()
          }).describe("User deleted successfully"),
        }
      }
    },
      authController.delete
    ),
    app.post("/auth/login", {
      schema: {
        tags: ["Authentication"],
        summary: "Provide auth token",
        body: loginSchema,
        response: {
          200: z.object({
            token: z.string()
          }).describe("User logged sucessfully"),
        }
      }
    },
      authController.login
    )
  app.patch(
    "/users/picture",
    {
      schema: {
        tags: ["Users"],
        summary: "Atualizar avatar do usuário via Base64",
        body: updateAvatarSchema,
        headers: authHeaderSchema,
        response: {
          200: z.object({
            message: z.string()
          }).describe("Avatar atualizado com sucesso")
        }
      }
    },
    authController.updatePicture
  );
}
