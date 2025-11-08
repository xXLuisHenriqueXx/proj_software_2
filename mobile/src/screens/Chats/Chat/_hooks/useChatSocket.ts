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

  const handleError = useCallback(() => setConnected(false), []);

  const sendMessage = useCallback((message: string) => {
    if (!message.trim()) return;
    socketRef.current?.sendMessage({ type: "send_message", message });
  }, []);

  const startPolling = useCallback(() => {
    if (pollingRef.current) return;

    pollingRef.current = setInterval(() => {
      if (socketRef.current && socketRef.current.isConnected()) {
        socketRef.current.sendMessage({ type: "get_latest_message" });
      }
    }, 3000);
  }, []);

  const stopPolling = useCallback(() => {
    if (pollingRef.current) {
      clearInterval(pollingRef.current);
      pollingRef.current = null;
    }
  }, []);

  useEffect(() => {
    if (!chatId) return;

    if (chatIdRef.current === chatId && socketRef.current?.isConnected())
      return;

    socketRef.current?.disconnect();
    stopPolling();

    const ws = webSocketService();
    socketRef.current = ws;
    chatIdRef.current = chatId;
    initializedRef.current = false;

    ws.addCallbacks("new_message", handleNewMessage);
    ws.addCallbacks("connect", () => {
      handleConnect();
      startPolling();
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
