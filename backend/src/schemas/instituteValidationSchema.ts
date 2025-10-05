import { z } from "zod";

export const instituteResponseSchema = z.object({
  id: z.string(),
  name: z.string(),
  description: z.string(),
  picture: z.string(),
  phone: z.array(z.string()),
  online: z.string(),
  address: z.string(),
  ageRange: z.string(),
  pix_key: z.string(),
  latitude: z.number(),
  longitude: z.number(),
});

export const institutesResponseSchema = z.array(instituteResponseSchema);

