import { z } from "zod"

export const toyCreateSchema = z.object({
  name: z.string(),
  price: z.number(),
  discount: z.number().optional(),
  usageTime: z.number(),
  preservation: z.number(),
  type: z.array(z.string()),
  pictures: z.array(z.string())
})

export const ageRangeEnum = z.enum([
  "ZERO_A_UM",
  "UM_A_TRES",
  "TRES_A_SEIS",
  "SEIS_A_DOZE",
  "DOZE_OU_MAIS"
])

export const orderByEnum = z.enum([
  "RELEVANTES",
  "MENOR_PRECO",
  "MAIOR_PRECO"
])

export const conditionEnum = z.enum([
  "NOVO",
  "USADO"
])

export const toyListSchema = z.object({
  page: z.number().min(1).optional(),
  pageSize: z.number().min(1).max(100).optional(),
  filter: z.object({
    orderBy: orderByEnum.optional(),
    condition: conditionEnum.optional(),
    ageRange: ageRangeEnum.optional(),
    priceRange: z
      .object({
        min: z.number().nonnegative().optional(),
        max: z.number().optional()
      })
      .refine(
        (data) => !data.min || !data.max || data.min <= data.max,
        { message: "min deve ser menor ou igual a max" }
      )
      .optional(),
    donation: z.boolean().optional(),
    trade: z.boolean().optional(),
    lend: z.boolean().optional(),
    search: z.string().min(1).optional()
  }).optional()
})
