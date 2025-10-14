import { z } from "zod";
import { toyResponseSchema } from "./toyValidationSchemas";

export const addFavoriteSchema = z.object({
  toyId: z.string().uuid("O ID do brinquedo deve ser um UUID válido."),
});

export const removeFavoriteSchema = z.object({
  toyId: z.string().uuid("O ID do brinquedo deve ser um UUID válido."),
});

export const favoriteResponseSchema = z.object({
  id: z.string().uuid(),
  createdAt: z.date(),
  userId: z.string().uuid(),
  toyId: z.string().uuid(),
});

export const favoriteListResponseSchema = z.array(toyResponseSchema);