export interface IMessage {
  id: string;
  message: string;
  sent_at: Date;
  sent_by_me: boolean;
  seen: boolean;
}

export interface IChat {
  id: string;
  userName: string;
  userPicture: string;
  latestMessage: IMessage;
}
