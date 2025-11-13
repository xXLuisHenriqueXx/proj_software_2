import * as SecureStore from "expo-secure-store";

type CallbackFn = (data: any) => void;

interface MessageBase {
  type: string;
  [key: string]: any;
}

export function webSocketService() {
  let socketRef: WebSocket | null = null;
  let isConnected = false;
  let reconnectAttempts = 0;
  let timeout: NodeJS.Timeout | null = null;
  let chatId: string | null = null;
  const maxReconnectAttempts = 5;
  const callbacks: Record<string, CallbackFn[]> = {};
  let pendingMessages: MessageBase[] = [];

  async function connect(newChatId: string) {
    if (socketRef) {
      if (__DEV__) console.log("[WS] already connecting or connected");
      return;
    }

    chatId = newChatId;

    const key = process.env.EXPO_PUBLIC_SECURE_TOKEN;
    const baseURL = process.env.EXPO_PUBLIC_BASE_WEBSOCKET_URL;

    if (!key || !baseURL) {
      console.error("[WS] Missing env variables for WebSocket");
      return;
    }

    const token = await SecureStore.getItemAsync(key);
    if (!token) {
      console.error("[WS] No auth token found");
      return;
    }

    const url = `${baseURL}/api/chat/ws/${chatId}?token=${token}`;
    socketRef = new WebSocket(url);

    socketRef.onopen = () => {
      isConnected = true;
      reconnectAttempts = 0;
      if (__DEV__) console.log("[WS] Connected");

      executeCallback("connect", null);
      flushPending();
    };

    socketRef.onmessage = (e) => {
      try {
        const data = JSON.parse(e.data);
        if (__DEV__) console.log("[WS] Message:", data);
        executeCallback(data.type, data);
      } catch (err) {
        console.error("[WS] Failed to parse message", err);
      }
    };

    socketRef.onerror = (e) => {
      console.error("[WS] Error:", e);
      executeCallback("error", e);
    };

    socketRef.onclose = () => {
      isConnected = false;
      socketRef = null;
      if (__DEV__) console.log("[WS] Closed");

      if (reconnectAttempts < maxReconnectAttempts && chatId) {
        const delay = Math.min(1000 * 2 ** reconnectAttempts, 30000);
        timeout = setTimeout(() => {
          reconnectAttempts++;
          if (__DEV__)
            console.log(`[WS] Reconnecting... attempt ${reconnectAttempts}`);
          connect(chatId!);
        }, delay);
      } else {
        executeCallback("close", null);
      }
    };
  }

  function disconnect() {
    if (__DEV__) console.log("[WS] Manual disconnect");
    if (timeout) {
      clearTimeout(timeout);
      timeout = null;
    }
    if (socketRef) {
      socketRef.onopen = null;
      socketRef.onmessage = null;
      socketRef.onerror = null;
      socketRef.onclose = null;
      socketRef.close();
      socketRef = null;
    }
    isConnected = false;
    reconnectAttempts = 0;
    pendingMessages = [];
    chatId = null;
  }

  function sendMessage(data: MessageBase): boolean {
    if (socketRef?.readyState === WebSocket.OPEN) {
      socketRef.send(JSON.stringify(data));
      return true;
    }
    pendingMessages.push(data);
    return false;
  }

  function flushPending() {
    if (!pendingMessages.length) return;
    if (__DEV__)
      console.log(`[WS] Flushing ${pendingMessages.length} pending messages`);
    pendingMessages.forEach((msg) => sendMessage(msg));
    pendingMessages = [];
  }

  function addCallbacks(messageType: string, callback: CallbackFn) {
    if (!callbacks[messageType]) callbacks[messageType] = [];
    if (!callbacks[messageType].includes(callback)) {
      callbacks[messageType].push(callback);
    }
  }

  function removeCallbacks(messageType: string, callback: CallbackFn) {
    if (!callbacks[messageType]) return;
    callbacks[messageType] = callbacks[messageType].filter(
      (cb) => cb !== callback
    );
  }

  function executeCallback(messageType: string, data: any) {
    const list = callbacks[messageType];
    if (!list || list.length === 0) return;
    list.forEach((cb) => cb(data));
  }

  return {
    connect,
    disconnect,
    sendMessage,
    addCallbacks,
    removeCallbacks,
    isConnected: () => isConnected,
  };
}
