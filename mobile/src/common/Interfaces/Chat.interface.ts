export interface IChatCreate {
  userId: string;
}

export interface IChatAllMessages {
  chatId: string;
}

export interface IChatSendMessage {
  chatId: string;
  message: string;
}
