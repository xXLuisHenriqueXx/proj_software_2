import { z } from "zod";

export const instituteResponseSchema = z.array(
  z.object({
    id: z.string(),
    name: z.string(),
    description: z.string(),
    picture: z.string(),
    phone: z.array(z.string()),
    online: z.string(),
    address: z.string(),
    ageRange: z.string(),
    pix_key: z.string(),
  })
);
