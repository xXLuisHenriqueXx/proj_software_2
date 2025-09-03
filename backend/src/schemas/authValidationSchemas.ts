import { z } from "zod"

// Regex para formato
const cpfRegex = /^(\d{3}\.?\d{3}\.?\d{3}-?\d{2})$/;
const cnpjRegex = /^(\d{2}\.?\d{3}\.?\d{3}\/?\d{4}-?\d{2})$/;

export const registerSchema = z.object({
    name: z.string().trim()
            .min(3, {message: "O nome precisa ter no mínimo 3 caracteres." })
            .max(255, { message: "O nome deve ter no máximo 255 caracteres." }),

    email: z.email({ message: "Formato de e-mail inválido." }).trim()
            .min(1, { message: "O e-mail é obrigatório." })
            .max(255, { message: "O e-mail deve ter no máximo 255 caracteres." }),

    password: z.string().trim()
            .min(8,{message: "A senha deve ter no mínimo 8 caracteres." })
            .max(255, { message: "A senha deve ter no máximo 255 caracteres." }),

    passwordConfirmation: z.string().trim()
            .min(1,{message: "A confirmação de senha é obrigatória."}),

    cpf: z.string().regex(cpfRegex, "Formato de CPF inválido").optional(),
    cnpj: z.string().regex(cnpjRegex, "Formato de CNPJ inválido").optional(),

    addressDistrict: z.string().trim()
            .min(1, { message: "O bairro é obrigatório." })
            .max(255, { message: "O bairro deve ter no máximo 255 caracteres." }),

    addressStreet: z.string().trim()
            .min(1, { message: "A rua é obrigatória." })
            .max(255, { message: "A rua deve ter no máximo 255 caracteres." }),

    addressNumber: z.int()
            .min(1, { message: "O número é obrigatório." })
            .positive({ message: "O número deve ser positivo." }),

    addressDetail: z.string().trim()
            .max(255, { message: "O complemento deve ter no máximo 255 caracteres." })
            .optional(),

    addressCep: z.string().trim()
                .min(1, { message: "O CEP é obrigatório." })
                .regex(/^\d{5}-?\d{3}$/, "CEP inválido")
                .max(9, { message: "O CEP deve ter no máximo 9 caracteres." }),

})

.refine((data) => data.cpf || data.cnpj, {
    message: "É necessário informar CPF ou CNPJ.",
})  

.refine((data) => data.password === data.passwordConfirmation, {
    message: "As senhas não conferem.",
    path: ["passwordConfirmation"],
})

export const loginSchema = z.object({
    email: z.email({message: "Formato de e-mail inválido."}).optional(),
    cpf: z.string().optional(),
    cnpj: z.string().optional(),
    password: z.string().trim().min(1, { message: "A senha é obrigatória." }),
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

export const updateAvatarSchema = z.object({
  avatarBase64: z.string({ required_error: "A imagem em base64 é obrigatória." })
                 .regex(/^data:image\/[a-zA-Z]+;base64,/, { message: "Formato de string base64 de imagem inválido." })
});

export const authHeaderSchema = z.object({
  authorization: z.string().regex(/^Bearer\s.+$/, "Token inválido ou ausente")
});

