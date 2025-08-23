import { fastifySwagger } from "@fastify/swagger";
import { fastify } from "fastify";
import {
  type ZodTypeProvider,
  jsonSchemaTransform,
  serializerCompiler,
  validatorCompiler,
} from "fastify-type-provider-zod";

export const app = fastify().withTypeProvider<ZodTypeProvider>();

app.setValidatorCompiler(validatorCompiler);
app.setSerializerCompiler(serializerCompiler);

app.get("/ping", async () => {
  return { message: "pong" };
});

app.listen({ port: 3000, host: "0.0.0.0" }).then(() => {
  console.log("Server is running on port 3000");
});
