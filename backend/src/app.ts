import { fastify } from "fastify";
import { ZodTypeProvider, jsonSchemaTransform, serializerCompiler, validatorCompiler } from "fastify-type-provider-zod";
import { fastifySwagger } from "@fastify/swagger";
import { fastifySwaggerUi } from "@fastify/swagger-ui";
import { routes } from "./routes";
import fastifyJwt from "@fastify/jwt";  

export const app = fastify().withTypeProvider<ZodTypeProvider>();

app.register(fastifyJwt, {
  secret: process.env.JWT_SECRET || 'supersecret-fallback-key-for-dev', 
});

app.setValidatorCompiler(validatorCompiler);
app.setSerializerCompiler(serializerCompiler);

app.register(fastifySwagger, {
  openapi: {
    info: { title: "Re.Brinque Backend", version: "1.0.0" },
    components: {
      securitySchemes: {
        bearerAuth: { type: 'http', scheme: 'bearer', bearerFormat: 'JWT' }
      }
    }
  },
  transform: jsonSchemaTransform,
});

app.register(fastifySwaggerUi, { routePrefix: "/docs" });
app.register(routes, { prefix: "/api" });

app.get("/ping", async () => {
  return { message: "pong" };
});

