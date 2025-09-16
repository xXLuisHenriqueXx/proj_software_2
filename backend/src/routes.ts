import type { FastifyInstance } from "fastify";
import { z } from "zod";
import { authController } from "./controllers/authController";
import { ToyController } from "./controllers/toyController";
import { 
  loginSchema, 
  registerSchema, 
  updateAvatarSchema, 
  updateUserSchema 
} from "./schemas/authValidationSchemas";
import { 
  getToySchema, 
  toyCreateSchema, 
  toyListSchema, 
  toyUpdateSchema 
} from "./schemas/toyValidationSchemas";
import { authMiddleware } from "./middleware/authMiddleware";

export async function routes(app: FastifyInstance) {

  app.post("/auth/register", { schema: { tags: ["Auth"], summary: "Registrar novo usuário", body: registerSchema, response: { 201: z.object({ token: z.string() }) }}}, authController.register);
  app.post("/auth/login", { schema: { tags: ["Auth"], summary: "Login de usuário", body: loginSchema, response: { 200: z.object({ token: z.string() }) }}}, authController.login);
  app.delete("/auth/delete", { schema: { tags: ["Auth"], summary: "Deletar usuário autenticado", security: [{ bearerAuth: [] }] }, onRequest: [authMiddleware] }, authController.delete);
  

  app.patch("/users/patch", { schema: { tags: ["User"], summary: "Atualizar usuário autenticado", security: [{ bearerAuth: [] }], body: updateUserSchema }, onRequest: [authMiddleware] }, authController.update);
  app.patch("/users/picture", { schema: { tags: ["User"], summary: "Atualizar foto do usuário", security: [{ bearerAuth: [] }], body: updateAvatarSchema }, onRequest: [authMiddleware] }, authController.updatePicture);


  app.post("/toys/list", { schema: { tags: ["Toys"], summary: "Listar brinquedos com filtros", body: toyListSchema }}, ToyController.getToyList);
  app.get("/toys/:toyId", { schema: { tags: ["Toys"], summary: "Buscar brinquedo por ID", params: getToySchema }}, ToyController.getToy);
  app.post("/toys", { schema: { tags: ["Toys"], summary: "Criar novo brinquedo", security: [{ bearerAuth: [] }], body: toyCreateSchema }, onRequest: [authMiddleware] }, ToyController.create);
  app.patch("/toys/:toyId", { schema: { tags: ["Toys"], summary: "Atualizar um brinquedo", security: [{ bearerAuth: [] }], params: getToySchema, body: toyUpdateSchema }, onRequest: [authMiddleware] }, ToyController.update);
  app.delete("/toys/:toyId", { schema: { tags: ["Toys"], summary: "Deletar um brinquedo", security: [{ bearerAuth: [] }], params: getToySchema }, onRequest: [authMiddleware] }, ToyController.delete);
}

