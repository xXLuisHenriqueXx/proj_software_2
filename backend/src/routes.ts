import type { FastifyInstance } from "fastify";
import { authController } from "./controllers/authController";
import { ToyController } from "./controllers/toyController";
import { authHeaderSchema, loginSchema, registerSchema, updateUserSchema } from "./schemas/authValidationSchemas";
import { toyCreateSchema, toyListSchema, getToySchema, toyResponseSchema } from "./schemas/toyValidationSchemas";
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
    ),

    app.post("/toys", {
      schema: {
        tags: ["Toys"],
        summary: "Create a new toy",
        headers: authHeaderSchema,
        body: toyCreateSchema,
        response: {
          200: z.object({
            message: z.string()
          }).describe("Toy created successfully"),
        },
        description: `
        - Valores possíveis para 
        `
      }
    }, ToyController.create);

  app.patch("/toys/:id", {
    schema: {
      tags: ["Toys"],
      summary: "Update an existing toy",
      headers: authHeaderSchema,
      body: toyCreateSchema.partial(), // atualização pode ser parcial
      response: {
        200: z.object({
          message: z.string(),
          toy: toyResponseSchema
        }).describe("Toy updated successfully"),
      }
    }
  }, ToyController.update);

  app.delete("/toys/:id", {
    schema: {
      tags: ["Toys"],
      summary: "Delete an existing toy",
      headers: authHeaderSchema,
      response: {
        200: z.object({
          message: z.string()
        }).describe("Toy deleted successfully"),
      }
    }
  }, ToyController.delete);
  app.post("/toys/list", {
    schema: {
      tags: ["Toys"],
      summary: "Get toys with filters",
      body: toyListSchema,
      response: {
        200: z.object({
          result: z.array(toyResponseSchema)
        }).describe("List of toys"),
      },
      description: `
      Lista de brinquedos com paginação e filtros.

      **Campos possíveis no body:**

      - \`page\` (number, opcional): número da página, mínimo 1
      - \`pageSize\` (number, opcional): quantidade por página, mínimo 1, máximo 100
      - \`filter\` (object, opcional):
        - \`orderBy\` (enum): "RELEVANTES" | "MENOR_PRECO" | "MAIOR_PRECO"
        - \`condition\` (enum): "NOVO" | "USADO"
        - \`ageRange\` (enum): "ZERO_A_UM" | "UM_A_TRES" | "TRES_A_SEIS" | "SEIS_A_DOZE" | "DOZE_OU_MAIS"
        - \`priceRange\` (object, opcional):
          - \`min\` (number, opcional): preço mínimo (>=0)
          - \`max\` (number, opcional): preço máximo
        - \`donation\` (boolean, opcional): se está disponível para doação
        - \`trade\` (boolean, opcional): se aceita troca
        - \`lend\` (boolean, opcional): se aceita empréstimo
        - \`search\` (string, opcional): termo de busca textual

        - Caso não seja enviado nenhum order by, será mostrado de acordo com as recomendações
    `
    }
  }, ToyController.getToyList);

  app.get("/toys/:toyId", {
    schema: {
      tags: ["Toys"],
      summary: "Get toy by ID",
      params: getToySchema,
      response: {
        200: toyResponseSchema.describe("Toy details"),
      }
    }
  }, ToyController.getToy);

}
