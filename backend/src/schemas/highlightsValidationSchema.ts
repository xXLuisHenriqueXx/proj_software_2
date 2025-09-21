import { z } from "zod";
import { HighlightType } from "../generated/prisma";
import { toyResponseSchema } from "./toyValidationSchemas";

export const highlightTypeEnum = z.nativeEnum(HighlightType);

export const highlightCreateSchema = z.object({
  name: z
    .string()
    .min(1, "O nome é obrigatório.")
    .max(100, "O nome não pode ter mais de 100 caracteres."),
  description: z
    .string()
    .max(300, "A descrição não pode ter mais de 300 caracteres.")
    .optional(),
  type: highlightTypeEnum,
  picture: z
    .string()
    .regex(
      /^data:image\/[a-zA-Z]+;base64,/,
      "Formato de imagem Base64 inválido."
    )
    .optional()
});

export const highlightUpdateSchema = highlightCreateSchema.partial();

export const highlightResponseSchema = z.object({
  id: z.string(),
  createdAt: z.date(),
  updatedAt: z.date(),
  name: z.string(),
  description: z.string().nullable(),
  type: highlightTypeEnum,
  picture: z.string().nullable(),
  toys: z.array(toyResponseSchema).optional()
});

export const highlightListSchema = z.array(
  z.object({
    id: z.string(),
    createdAt: z.date(),
    updatedAt: z.date(),
    name: z.string(),
    description: z.string().nullable(),
    type: highlightTypeEnum,
    picture: z.string().nullable(),
  })
);
