import { useEffect, useState, useCallback, useRef } from "react";
import { IMessage } from "@src/common/Entities/Chat";
import { webSocketService } from "@src/services/WebSocketService";
import { chatService } from "@src/services/ChatService";

type MessageWithStatus = IMessage & { status?: "pending" | "sent" };

export function useChatSocket({ chatId }: { chatId?: string }) {
  const [messages, setMessages] = useState<MessageWithStatus[]>([]);
  const [connected, setConnected] = useState(false);

  const socketRef = useRef<ReturnType<typeof webSocketService> | null>(null);
  const initializedRef = useRef(false);
  const chatIdRef = useRef<string | null>(null);
  const pollingRef = useRef<NodeJS.Timeout | null>(null);

  /** 📥 Nova mensagem recebida */
  const handleNewMessage = useCallback((data: any) => {
    const payload = data.payload || data.message;
    if (!payload) return;

    setMessages((prev) => {
      if (prev.some((m) => m.id === payload.id)) return prev;
      return [
        ...prev,
        {
          id: payload.id,
          message: payload.message,
          sent_at: new Date(payload.sent_at),
          sent_by_me: payload.sent_by_me,
          seen: payload.seen,
          status: "sent",
        },
      ];
    });
  }, []);

  /** ⚡ Conectou */
  const handleConnect = useCallback(async () => {
    setConnected(true);
    if (!chatId || initializedRef.current) return;
    initializedRef.current = true;

    try {
      const res = await chatService.getAllMessages({ chatId });
      const newMessages: MessageWithStatus[] = res?.data.messages ?? [];
      setMessages(newMessages);
    } catch (err) {
      console.error("[ChatSocket] Failed to load messages", err);
    }
  }, [chatId]);

  /** 💀 Erro / desconectou */
  const handleError = useCallback(() => setConnected(false), []);

  /** 💬 Enviar mensagem */
  const sendMessage = useCallback((message: string) => {
    if (!message.trim()) return;
    socketRef.current?.sendMessage({ type: "send_message", message });
  }, []);

  /** 🔄 Polling para pegar novas mensagens quando o backend não envia push */
  const startPolling = useCallback(() => {
    if (pollingRef.current) return; // já está rodando

    pollingRef.current = setInterval(() => {
      if (socketRef.current && socketRef.current.isConnected()) {
        socketRef.current.sendMessage({ type: "get_latest_message" });
      }
    }, 3000); // a cada 3s, ajustável
  }, []);

  const stopPolling = useCallback(() => {
    if (pollingRef.current) {
      clearInterval(pollingRef.current);
      pollingRef.current = null;
    }
  }, []);

  /** 🔌 Conecta/desconecta */
  useEffect(() => {
    if (!chatId) return;

    // Evita reconexão desnecessária
    if (chatIdRef.current === chatId && socketRef.current?.isConnected())
      return;

    // Desconecta anterior
    socketRef.current?.disconnect();
    stopPolling();

    // Cria nova instância do socket para este chat
    const ws = webSocketService();
    socketRef.current = ws;
    chatIdRef.current = chatId;
    initializedRef.current = false;

    ws.addCallbacks("new_message", handleNewMessage);
    ws.addCallbacks("connect", () => {
      handleConnect();
      startPolling(); // inicia polling só quando conectado
    });
    ws.addCallbacks("error", handleError);

    ws.connect(chatId);

    return () => {
      ws.removeCallbacks("new_message", handleNewMessage);
      ws.removeCallbacks("connect", handleConnect);
      ws.removeCallbacks("error", handleError);
      ws.disconnect();
      stopPolling();
    };
  }, [
    chatId,
    handleNewMessage,
    handleConnect,
    handleError,
    startPolling,
    stopPolling,
  ]);

  return { messages, sendMessage, connected };
}
