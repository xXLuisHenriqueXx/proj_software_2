import { IChat } from "@src/common/Entities/Chat";

export const chatsData: IChat[] = [
  {
    id: "chat-1",
    participant: {
      id: "2",
      name: "Millie",
      avatar: "https://placecats.com/millie/300/300",
      email: "Xx2Hc@example.com",
      password: "123456",
      cnpj: "123456789",
    },
    lastMessage: {
      id: "msg-1",
      message: "Olá, tudo bem?",
      senderId: "1",
      receiverId: "2",
      createdAt: new Date("2025-09-01T10:00:00"),
      updatedAt: new Date("2025-09-01T10:00:00"),
    },
    messages: [
      {
        id: "msg-1",
        message: "Olá, tudo bem?",
        senderId: "1",
        receiverId: "2",
        createdAt: new Date("2025-09-01T10:00:00"),
        updatedAt: new Date("2025-09-01T10:00:00"),
      },
      {
        id: "msg-2",
        message: "Oi! Estou bem sim, e você?",
        senderId: "2",
        receiverId: "1",
        createdAt: new Date("2025-09-01T10:02:00"),
        updatedAt: new Date("2025-09-01T10:02:00"),
      },
    ],
    createdAt: new Date("2025-09-01T10:00:00"),
    updatedAt: new Date("2025-09-01T10:02:00"),
  },

  {
    id: "chat-2",
    participant: {
      id: "3",
      name: "Lucas",
      avatar: "https://placecats.com/millie/300/300",
      email: "Xx2Hc@example.com",
      password: "123456",
      cnpj: "123456789",
    },
    lastMessage: {
      id: "msg-3",
      message: "Vai colar no evento amanhã?",
      senderId: "3",
      receiverId: "1",
      createdAt: new Date("2025-09-02T08:30:00"),
      updatedAt: new Date("2025-09-02T08:30:00"),
    },
    messages: [
      {
        id: "msg-3",
        message: "Vai colar no evento amanhã?",
        senderId: "3",
        receiverId: "1",
        createdAt: new Date("2025-09-02T08:30:00"),
        updatedAt: new Date("2025-09-02T08:30:00"),
      },
    ],
    createdAt: new Date("2025-09-02T08:30:00"),
    updatedAt: new Date("2025-09-02T08:30:00"),
  },
];
