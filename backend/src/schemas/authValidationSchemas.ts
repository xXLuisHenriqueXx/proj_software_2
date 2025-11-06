import { z } from "zod";

export const userResponseSchema = z.object({
  id: z.string().uuid(),
  name: z.string(),
  email: z.string().email(),
  picture: z.string().nullable(),
});

const getMeToyPictureSchema = z.object({
  id: z.string().uuid(),
  order: z.number().int(),
  toyId: z.string().uuid(),
  picture: z.string(),
});

const getMeToySchema = z.object({
  id: z.string().uuid(),
  createdAt: z.string().datetime(),
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
  pictures: z.array(getMeToyPictureSchema),
  isFavorited: z.boolean(),
});

export const getMeResponseSchema = z.object({
  id: z.string().uuid(),
  email: z.string().email(),
  name: z.string(),
  parentalControl: z.boolean(),
  cnpj: z.string().optional().nullable(),
  pix_key: z.string().optional().nullable(),
  picture: z.string().optional().nullable(),
  addressDistrict: z.string(),
  addressStreet: z.string(),
  addressNumber: z.number().int(),
  addressDetail: z.string().optional().nullable(),
  addressCep: z.string(),
  toys: z.array(getMeToySchema),
});

const cnpjRegex = /^(\d{2}\.?\d{3}\.?\d{3}\/?\d{4}-?\d{2})$/;

export const registerSchema = z.object({
    name: z.string().trim()
        .min(3, { message: "O nome precisa ter no mínimo 3 caracteres." })
        .max(255, { message: "O nome deve ter no máximo 255 caracteres." }),

    email: z.string().trim()
        .min(1, { message: "O e-mail é obrigatório." })
        .email({ message: "Formato de e-mail inválido." })
        .max(255, { message: "O e-mail deve ter no máximo 255 caracteres." }),

    password: z.string().trim()
        .min(8, { message: "A senha deve ter no mínimo 8 caracteres." })
        .max(255, { message: "A senha deve ter no máximo 255 caracteres." }),

    passwordConfirmation: z.string().trim()
        .min(1, { message: "A confirmação de senha é obrigatória." }),

    cnpj: z.string().regex(cnpjRegex, "Formato de CNPJ inválido").optional(),

    addressDistrict: z.string().trim()
        .min(1, { message: "O bairro é obrigatório." })
        .max(255, { message: "O bairro deve ter no máximo 255 caracteres." }),

    addressStreet: z.string().trim()
        .min(1, { message: "A rua é obrigatória." })
        .max(255, { message: "A rua deve ter no máximo 255 caracteres." }),

    addressNumber: z.number()
        .int({ message: "O número deve ser um inteiro." })
        .positive({ message: "O número deve ser positivo." }),

    addressDetail: z.string().trim()
        .max(255, { message: "O complemento deve ter no máximo 255 caracteres." })
        .optional(),

    addressCep: z.string().trim()
        .min(1, { message: "O CEP é obrigatório." })
        .regex(/^\d{5}-?\d{3}$/, "CEP inválido")
        .max(9, { message: "O CEP deve ter no máximo 9 caracteres." }),
})
.refine((data) => data.password === data.passwordConfirmation, {
    message: "As senhas não conferem.",
    path: ["passwordConfirmation"],
});

export const loginSchema = z.object({
    email: z.string().email({ message: "Formato de e-mail inválido." }).optional(),
    cnpj: z.string().optional(),
    password: z.string().trim().min(1, { message: "A senha é obrigatória." }),
}).refine((data) => data.email || data.cnpj, {
    message: "É necessário enviar pelo menos email ou CNPJ"
});

export const updateUserSchema = z.object({
    name: z.string().trim().min(3).optional(),
    pix_key: z.string().trim().optional(),
    parentalControl: z.boolean().optional(),
    addressDistrict: z.string().optional(),
    addressStreet: z.string().optional(),
    addressNumber: z.number().int().positive().optional(),
    addressDetail: z.string().optional(),
    addressCep: z.string().regex(/^\d{5}-?\d{3}$/, "CEP inválido").optional(),
    email: z.email().optional(),
    picture: z.string().regex(/^data:image\/[a-zA-Z]+;base64/, { message: "Formato de string base64 de imagem inválido." }).optional(),
});

export const updateAvatarSchema = z.object({
  avatarBase64: z.string()
    .nonempty("A imagem em base64 é obrigatória.")
    .regex(/^data:image\/[a-zA-Z]+;base64,/, { message: "Formato de string base64 de imagem inválido." }),
});

export const authHeaderSchema = z.object({
  authorization: z.string().regex(/^Bearer\s.+$/, "Token inválido ou ausente")
});

export const updatePictureResponseSchema = z.object({
  message: z.string(),
});

export const deleteUserResponseSchema = z.object({
  message: z.string(),
});