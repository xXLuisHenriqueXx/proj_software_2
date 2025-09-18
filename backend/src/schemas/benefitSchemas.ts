import { z } from "zod"



export const benefitCreateSchema = z.object({
  key: z.string().min(2),
  title: z.string().min(2),
  description: z.string().optional(),
  durationDays: z.number().int().positive().optional(),
  active: z.boolean().optional(),
})

export const benefitUpdateSchema = z.object({
  title: z.string().min(2).optional(),
  description: z.string().optional(),
  durationDays: z.number().int().positive().optional(),
  active: z.boolean().optional(),
})

export const grantBenefitSchema = z.object({
  benefitKey: z.string().min(2),
  source: z.string().optional(),
})

export const userIdParamSchema = z.object({
  userId: z.string().uuid(),
})

export const idParamSchema = z.object({
  id: z.string().uuid(),
})
