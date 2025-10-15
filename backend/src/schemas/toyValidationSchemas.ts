import { z } from "zod";

export const ageRangeEnum = z.string();
export const toyTypeEnum = z.string();

export const orderByEnum = z.enum([
  "RELEVANT",
  "LOWEST_PRICE",
  "HIGHEST_PRICE"
]);

export const conditionEnum = z.enum(["NEW", "USED"]);

export const toyCreateSchema = z.object({
  name: z.string().min(1, "O nome é obrigatório.").max(50, "O nome não pode ter mais de 50 caracteres."),
  description: z.string().min(1, "A descrição é obrigatória.").max(300, "A descrição não pode ter mais de 300 caracteres."),
  price: z.number().positive("O preço deve ser um número positivo."),
  isNew: z.boolean(),
  canTrade: z.boolean(),
  canLend: z.boolean(),
  usageTime: z.number().int().nonnegative("O tempo de uso deve ser 0 ou maior."),
  type: z.array(toyTypeEnum).nonempty("Pelo menos um tipo de brinquedo é obrigatório."),
  ageGroup: ageRangeEnum,
  pictures: z
    .array(
      z.string().refine((val) => {
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
  discount: z.number().nonnegative().optional()
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
          max: z.number().optional()
        })
        .refine((data) => !data.min || !data.max || data.min <= data.max, {
          message: "min deve ser menor ou igual a max"
        })
        .optional(),
      donation: z.boolean().optional(),
      trade: z.boolean().optional(),
      lend: z.boolean().optional(),
      search: z.string().min(1).optional()
    })
    .optional()
});

export const getToySchema = z.object({
  toyId: z.string().uuid("O ID do brinquedo deve ser um UUID válido.")
});

export const toyPictureSchema = z.object({
  id: z.string(),
  order: z.number(),
  picture: z.string()
});

export const toyOwnerSchema = z.object({
  id: z.string(),
  name: z.string(),
  picture: z.string().nullable()
});

export const toyResponseSchema = z.object({
  id: z.string(),
  createdAt: z.string().datetime(),
  name: z.string(),
  description: z.string(),
  ownerId: z.string(),
  price: z.number(),
  isNew: z.boolean(),
  canTrade: z.boolean(),
  canLend: z.boolean(),
  usageTime: z.number(),
  type: z.array(toyTypeEnum),
  ageGroup: ageRangeEnum,
  discount: z.number().nonnegative().optional(),
  ToyPictures: z.array(toyPictureSchema),
  owner: toyOwnerSchema
});
