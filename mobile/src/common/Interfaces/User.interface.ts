import { IUser } from "../Entities/User";

export type IUpdateUser = Partial<IUser>;

export interface IUserResponse {
  id: string;
  name: string;
  email: string;
  picture?: string;
}
