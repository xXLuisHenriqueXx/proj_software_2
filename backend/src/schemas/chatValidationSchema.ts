import { z } from "zod";

export const messageSchema = z.object({
    id: z.string().uuid(),
    message: z.string(),
    sent_at: z.date(),
    sent_by_me: z.boolean(),
    seen: z.boolean()
})
export const chat = z.object({
    id: z.string().uuid("O id do chat precisa ser válido"),
    userName: z.string(),
    userPicture: z.string(),
    latestMessage: messageSchema.optional().nullable(),
})

export const sendMessage = z.object({
  chatId: z.string().uuid(),
  message: z
    .string()
    .regex(
      /^(?=.*\S)[\p{L}\p{N}\p{P}\p{Zs}\p{S}]{1,500}$/u,
      "Mensagem inválida: deve ter entre 1 e 500 caracteres e pode conter letras, números, pontuação, espaços e emojis"
    ),
});


export const createChatSchema = z.object({
    userId: z.string().uuid("O id do usuário com quem criar o chat precisa ser válido")
})

export const allChats = z.object({
    chats: z.array(chat)
})

export const latestMessage = z.object({
    messageSchema
})

export const allMessages = z.object({
    messages: z.array(messageSchema)
})

export const getChatInfoById = z.object({
    chatId: z.string().uuid()
})

export const wsSendMessageSchema = z.object({
  type: z.literal("send_message"),
  message: z
    .string()
    .regex(
      /^(?=.*\S)[\p{L}\p{N}\p{P}\p{Zs}\p{S}]{1,500}$/u,
      "Mensagem inválida: deve ter entre 1 e 500 caracteres e pode conter letras, números, pontuação, espaços e emojis"
    ),
});

export const wsGetLatestMessageSchema = z.object({
  type: z.literal("get_latest_message"),
});

export const wsMessageSchema = z.union([wsSendMessageSchema, wsGetLatestMessageSchema]);

export const wsNewMessageSchema = z.object({
  type: z.literal("new_message"),
  message: messageSchema,
});
export const wsNoMessagesSchema = z.object({
  type: z.literal('no_messages'),
  message: z.string().default('Nenhuma mensagem nova encontrada'),
});
