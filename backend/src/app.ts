import { fastifySwagger } from "@fastify/swagger";
import { fastifySwaggerUi } from "@fastify/swagger-ui";
import { fastify } from "fastify";
import {
  type ZodTypeProvider,
  jsonSchemaTransform,
  serializerCompiler,
  validatorCompiler,
} from "fastify-type-provider-zod";
import { routes } from "./routes"

export const app = fastify().withTypeProvider<ZodTypeProvider>();

app.setValidatorCompiler(validatorCompiler);
app.setSerializerCompiler(serializerCompiler);

app.register(fastifySwagger, {
  openapi: {
    info: {
      title: "Re.Brinque Backend",
      version: "1.0.0",
    },
  },
  transform: jsonSchemaTransform,
});
app.register(fastifySwaggerUi, {
  routePrefix: "/docs",
});

app.get("/ping", async () => {
  return { message: "pong" };
});

app.register(routes, { prefix: "/api"});

app.listen({ port: 3000, host: "0.0.0.0" }).then(() => {
  console.log("Server is running on port 3000");
});
