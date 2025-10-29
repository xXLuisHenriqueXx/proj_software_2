import { FastifyReply, FastifyRequest } from "fastify";
import { prisma } from "../prisma";
import { createChatSchema, chat, allChats, allMessages, getChatInfoById, sendMessage, messageSchema, wsMessageSchema } from "../schemas/chatValidationSchema";
import { tokenHelper } from "../helpers/tokenHelper";

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

            return res.status(201).send(validated);
        } catch (error) {
            console.error("Erro ao enviar mensagem:", error);
            return res.status(500).send({ message: "Erro interno ao enviar mensagem." });
        }
    },
    async handleSocket(connection: any, req: FastifyRequest) {
        try {
            const { chatId } = getChatInfoById.parse(req.params)
            const token = (req.query as { token?: string })?.token;
            if (!token) {
                connection.send(JSON.stringify({ type: "error", message: "Token ausente." }));
                connection.close();
                return;
            }
            const decoded = await tokenHelper.verifyToken(token);
            const currentUserId = decoded.userId

            if (!currentUserId || !decoded || typeof decoded !== "object") {
                connection.send(JSON.stringify({ type: "error", message: "Token ausente." }));
                connection.close();
                connection.close();
                return;
            }

            const chat = await prisma.chat.findUnique({
                where: { id: chatId },
                include: { participants: { select: { id: true } } },
            });

            if (!chat) {
                connection.send(JSON.stringify({ type: "error", message: "Chat não encontrado." }));
                connection.close();
            }


            const isParticipant = chat.participants.some((p) => p.id === currentUserId);
            if (!isParticipant) {
                connection.send(JSON.stringify({ type: "error", message: "Você não participa deste chat." }));
                connection.close();
            }

            connection.on("message", async (raw: string) => {
                try {
                    const data = wsMessageSchema.parse(JSON.parse(raw));

                    if (data.type === "send_message") {
                        const msg = await prisma.message.create({
                            data: {
                                content: data.message,
                                sender: { connect: { id: currentUserId } },
                                chat: { connect: { id: chatId } },
                            },
                        });

                        connection.send(
                            JSON.stringify({
                                type: "new_message",
                                message: {
                                    id: msg.id,
                                    chatId: msg.chatId,
                                    message: msg.content,
                                    sent_at: msg.createdAt,
                                    sent_by_me: true,
                                    seen: false,
                                },
                            })
                        );
                    }
                    if (data.type === "get_latest_message") {
                        const unreadMessages = await prisma.message.findMany({
                            where: {
                                chatId,
                                seen: false,
                                NOT: { senderId: currentUserId },
                            },
                            include: { sender: { select: { id: true } } },
                            orderBy: { createdAt: "asc" },
                        });

                        if (unreadMessages.length === 0) {
                            connection.send(
                                JSON.stringify({
                                    type: "no_messages",
                                    message: "Nenhuma mensagem nova encontrada",
                                })
                            );
                        }

                        await prisma.message.updateMany({
                            where: {
                                chatId,
                                seen: false,
                                NOT: { senderId: currentUserId },
                            },
                            data: { seen: true },
                        });

                        for (const msg of unreadMessages) {
                            connection.send(
                                JSON.stringify({
                                    type: "new_message",
                                    message: {
                                        id: msg.id,
                                        chatId: msg.chatId,
                                        message: msg.content,
                                        sent_at: msg.createdAt,
                                        sent_by_me: false,
                                        seen: true,
                                    },
                                })
                            );
                        }
                    }

                } catch (err) {
                    console.error("Erro ao processar WS:", err);
                }
            });
            connection.on("close", () => {

            });
        } catch (err) {
            console.error("Erro no socket:", err);
        }
    }
};
