import { z } from "zod"

// Regex para formato
const cpfRegex = /^(\d{3}\.?\d{3}\.?\d{3}-?\d{2})$/;
const cnpjRegex = /^(\d{2}\.?\d{3}\.?\d{3}\/?\d{4}-?\d{2})$/;

export const registerSchema = z.object({
    name: z.string().trim(),
    email: z.email(),
    password: z.string().trim(),
    cpf: z.string().regex(cpfRegex, "Formato de CPF inválido").optional(),
    cnpj: z.string().regex(cnpjRegex, "Formato de CNPJ inválido").optional(),

    addressDistrict: z.string(),
    addressStreet: z.string(),
    addressNumber: z.int(),
    addressDetail: z.string().optional(),
    addressCep: z.string().regex(/^\d{5}-?\d{3}$/, "CEP inválido"),
}).refine((data) => data.cpf || data.cnpj, {
    message: "É necessário informar CPF ou CNPJ.",
})

export const loginSchema = z.object({
    email: z.email().optional(),
    cpf: z.string().optional(),
    cnpj: z.string().optional(),
    password: z.string().trim(),
}).refine((data) => data.email || data.cpf || data.cnpj, {
    message: "É necessário enviar pelo menos email, CPF ou CNPJ"
})

export const forgottenPasswordSchema = z.object({
    email: z.email()
})

export const updateUserSchema = z.object({
    name: z.string().trim().optional(),
    email: z.email().optional(),
    password: z.string().trim().optional(),
    cpf: z.string().regex(cpfRegex, "Formato de CPF inválido").optional(),
    cnpj: z.string().regex(cnpjRegex, "Formato de CNPJ inválido").optional(),

    addressDistrict: z.string().optional(),
    addressStreet: z.string().optional(),
    addressNumber: z.int().optional(),
    addressDetail: z.string().optional(),
    addressCep: z.string().regex(/^\d{5}-?\d{3}$/, "CEP inválido").optional()
})

export const authHeaderSchema = z.object({
  authorization: z.string().regex(/^Bearer\s.+$/, "Token inválido ou ausente")
});
