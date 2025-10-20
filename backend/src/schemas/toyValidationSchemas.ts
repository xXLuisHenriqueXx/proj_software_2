import { z } from "zod";
import { AgeRange, ToyType } from "../generated/prisma";

export const ageRangeEnum = z.nativeEnum(AgeRange);
export const toyTypeEnum = z.nativeEnum(ToyType);

export const orderByEnum = z.enum([
  "RELEVANT",
  "LOWEST_PRICE",
  "HIGHEST_PRICE",
]);

export const conditionEnum = z.enum(["NEW", "USED"]);

export const toyCreateSchema = z.object({
  name: z
    .string()
    .min(1, "O nome é obrigatório.")
    .max(50, "O nome não pode ter mais de 50 caracteres."),
  description: z
    .string()
    .min(1, "A descrição é obrigatória.")
    .max(300, "A descrição não pode ter mais de 300 caracteres."),
  price: z.number().nonnegative("O preço deve ser um número positivo."),
  isNew: z.boolean(),
  canTrade: z.boolean(),
  canLend: z.boolean(),
  usageTime: z
    .number()
    .int()
    .nonnegative("O tempo de uso deve ser 0 ou maior."),
  type: z
    .array(toyTypeEnum)
    .nonempty("Pelo menos um tipo de brinquedo é obrigatório."),
  ageGroup: ageRangeEnum,
  pictures: z
    .array(
    z
      .string()
      .refine((val) => /^data:image\/[a-zA-Z]+;base64,/.test(val), {
        message: "A imagem deve estar em formato Base64 válido (data:image/...;base64,)",
      })
      .refine((val) => {
        try {
          const base64 = val.split(",")[1] ?? val;
          const sizeInBytes = (base64.length * 3) / 4; 
          const maxSize = 5 * 1024 * 1024;
          return sizeInBytes <= maxSize;
        } catch {
          return false;
        }
      }, "A imagem deve ter no máximo 5MB.")
    )
    .optional(),
  discount: z.number().nonnegative().optional(),
});

export const toyUpdateSchema = toyCreateSchema.partial();

export const toyListSchema = z.object({
  page: z.number().min(1).optional(),
  pageSize: z.number().min(1).max(100).optional(),
  filter: z
    .object({
      orderBy: orderByEnum.optional(),
      condition: conditionEnum.optional(),
      type: toyTypeEnum.optional(),
      ageRange: ageRangeEnum.optional(),
      priceRange: z
        .object({
          min: z.number().nonnegative().optional(),
          max: z.number().optional(),
        })
        .refine((data) => !data.min || !data.max || data.min <= data.max, {
          message: "min deve ser menor ou igual a max",
        })
        .optional(),
      donation: z.boolean().optional(),
      trade: z.boolean().optional(),
      lend: z.boolean().optional(),
      search: z.string().min(1).optional(),
    })
    .optional(),
});

export const getToySchema = z.object({
  toyId: z.string().uuid("O ID do brinquedo deve ser um UUID válido."),
});

const toyPictureSchema = z.object({
  id: z.string(),
  order: z.number().int(),
  picture: z.string(),
});

const toyOwnerSchema = z.object({
  id: z.string().uuid(),
  name: z.string(),
  picture: z.string().nullable(),
});

const toyInListSchema = z.object({
  id: z.string().uuid(),
  createdAt: z.date(),
  name: z.string(),
  description: z.string(),
  ownerId: z.string().uuid(),
  price: z.number(),
  isNew: z.boolean(),
  canTrade: z.boolean(),
  canLend: z.boolean(),
  usageTime: z.number(),
  type: z.array(z.string()),
  ageGroup: z.string(),
  discount: z.number(),
  pictures: z.array(toyPictureSchema),
  _score: z.number().optional(),
});

export const toyListResponseSchema = z.object({
  page: z.number(),
  pageSize: z.number(),
  total: z.number(),
  totalPages: z.number(),
  toys: z.array(toyInListSchema),
});

export const toyResponseSchema = z.object({
  id: z.string().uuid(),
  createdAt: z.date(),
  name: z.string(),
  description: z.string(),
  price: z.number(),
  isNew: z.boolean(),
  canTrade: z.boolean(),
  canLend: z.boolean(),
  usageTime: z.number(),
  type: z.array(z.string()),
  ageGroup: z.string(),
  discount: z.number(),
  pictures: z.array(toyPictureSchema), 
  owner: toyOwnerSchema, 
});