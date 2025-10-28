import { FastifyReply, FastifyRequest } from "fastify";
import { prisma } from "../prisma";
import { createChatSchema, chat, allChats, allMessages, getChatInfoById, sendMessage, messageSchema } from "../schemas/chatValidationSchema";

export const chatController = {
    async createChat(req: FastifyRequest, res: FastifyReply) {
        try {
            const { userId: targetUserId } = createChatSchema.parse(req.body);

            const currentUserId = (req.user as any).userId;

            if (currentUserId === targetUserId) {
                return res
                    .status(400)
                    .send({ message: "Você não pode criar um chat consigo mesmo." });
            }

            const existingChat = await prisma.chat.findFirst({
                where: {
                    AND: [
                        { participants: { some: { id: currentUserId } } },
                        { participants: { some: { id: targetUserId } } },
                    ],
                },
                include: {
                    participants: {
                        select: { id: true, name: true, picture: true },
                    },
                },
            });

            if (existingChat) {
                return res.status(409).send({
                    message: "Já existe um chat entre esses dois usuários.",
                    chat: existingChat,
                });
            }

            const newChat = await prisma.chat.create({
                data: {
                    participants: {
                        connect: [
                            { id: currentUserId },
                            { id: targetUserId },
                        ],
                    },
                },
                include: {
                    participants: {
                        select: { id: true, name: true, picture: true },
                    },
                },
            });

            const formattedChat = {
                id: newChat.id,
                userName: newChat.participants.find((p) => p.id !== currentUserId)?.name || "",
                userPicture: newChat.participants.find((p) => p.id !== currentUserId)?.picture || "",
                latestMessage: null,
            };

            const validatedChat = chat.parse(formattedChat);

            return res.status(201).send(validatedChat);
        } catch (error) {
            console.error("Erro ao criar chat:", error);
            return res.status(500).send({ message: "Erro interno ao criar chat." });
        }
    },

    async getAllChats(req: FastifyRequest, res: FastifyReply) {
        try {
            const currentUserId = (req.user as any).userId;

            const chats = await prisma.chat.findMany({
                where: {
                    participants: { some: { id: currentUserId } },
                },
                include: {
                    participants: { select: { id: true, name: true, picture: true } },
                    messages: {
                        orderBy: { createdAt: "desc" },
                        take: 1,
                        include: {
                            sender: { select: { id: true } }
                        },
                    },
                },
                orderBy: { createdAt: "desc" },
            });

            console.log(chats[0])
            const formatted = chats.map((c) => {
                const latest = c.messages[0];
                return {
                    id: c.id,
                    userName: c.participants.find((p) => p.id !== currentUserId)?.name ?? "",
                    userPicture: c.participants.find((p) => p.id !== currentUserId)?.picture ?? "",
                    latestMessage: latest
                        ? {
                            id: latest.id,
                            message: latest.content,
                            sent_at: latest.createdAt,
                            sent_by_me: latest.sender.id === currentUserId,
                            seen: latest.seen,
                        }
                        : null,
                };
            });


            const validated = allChats.parse({ chats: formatted });

            return res.status(200).send(validated);
        } catch (error) {
            console.error("Erro ao buscar chats:", error);
            return res.status(500).send({ message: "Erro interno ao buscar chats." });
        }
    },
    async getChatMessages(req: FastifyRequest, res: FastifyReply) {
        try {
            const currentUserId = (req.user as any).userId;

            const { chatId } = getChatInfoById.parse(req.body);

            const chat = await prisma.chat.findUnique({
                where: { id: chatId },
                include: {
                    participants: { select: { id: true } },
                    messages: {
                        orderBy: { createdAt: "asc" },
                        include: {
                            sender: { select: { id: true } },
                        },
                    },
                },
            });

            if (!chat) {
                return res.status(404).send({ message: "Chat não encontrado." });
            }

            const isParticipant = chat.participants.some((p) => p.id === currentUserId);
            if (!isParticipant) {
                return res.status(403).send({ message: "Você não participa deste chat." });
            }

            const formattedMessages = chat.messages.map((m) => ({
                id: m.id,
                message: m.content,
                sent_at: m.createdAt,
                sent_by_me: m.sender.id === currentUserId,
                seen: m.seen,
            }));

            await prisma.message.updateMany({
                where: {
                    chatId: chat.id,
                    senderId: { not: currentUserId },
                    seen: false,
                },
                data: { seen: true },
            });

            const validated = allMessages.parse({ messages: formattedMessages });

            return res.status(200).send(validated);
        } catch (error) {
            console.error("Erro ao buscar mensagens do chat:", error);
            return res.status(500).send({ message: "Erro interno ao buscar mensagens." });
        }
    },
    async sendMessage(req: FastifyRequest, res: FastifyReply) {
        try {
            const currentUserId = (req.user as any).userId;

            const { chatId, message } = sendMessage.parse(req.body);

            const chat = await prisma.chat.findUnique({
                where: { id: chatId },
                include: { participants: { select: { id: true } } },
            });

            if (!chat) {
                return res.status(404).send({ message: "Chat não encontrado." });
            }

            const isParticipant = chat.participants.some((p) => p.id === currentUserId);
            if (!isParticipant) {
                return res.status(403).send({ message: "Você não participa deste chat." });
            }

            const newMessage = await prisma.message.create({
                data: {
                    content: message,
                    sender: { connect: { id: currentUserId } },
                    chat: { connect: { id: chatId } },
                },
            });

            const formattedMessage = {
                id: newMessage.id,
                message: newMessage.content,
                sent_at: newMessage.createdAt,
                sent_by_me: true,
                seen: false,
            };

            const validated = messageSchema.parse(formattedMessage);

            console.log(validated)
            return res.status(201).send(validated);
        } catch (error) {
            console.error("Erro ao enviar mensagem:", error);
            return res.status(500).send({ message: "Erro interno ao enviar mensagem." });
        }
    }
};
