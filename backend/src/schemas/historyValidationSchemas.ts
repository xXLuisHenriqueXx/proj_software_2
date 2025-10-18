import { z } from "zod";
import { toyResponseSchema } from "./toyValidationSchemas";

export const historyParamsSchema = z.object({
  historyId: z.string().uuid(),
});

const historyEntrySchema = z.object({
  id: z.string().uuid(),
  userId: z.string().uuid().nullable(), 
  toyId: z.string().uuid(),
  visible: z.boolean(),
  createdAt: z.date(), 
  toy: toyResponseSchema, 
});

export const getUserHistoryResponseSchema = z.array(historyEntrySchema);