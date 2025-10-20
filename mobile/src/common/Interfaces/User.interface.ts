import { IUser } from "../Entities/User";

export type IUpdateUser = Partial<IUser>;

export interface IUpdateAvatar {
  avatarBase64: string;
}

export interface IUserResponse {
  id: string;
  name: string;
  email: string;
  picture?: string;
}
