import { IUser } from "./User";

interface IMessage {
  id: string;
  message: string;
  senderId: string;
  receiverId: string;
  createdAt: Date;
  updatedAt: Date;
}

export interface IChat {
  id: string;
  participant: IUser;
  lastMessage: IMessage;
  messages: IMessage[];
  createdAt: Date;
  updatedAt: Date;
}
