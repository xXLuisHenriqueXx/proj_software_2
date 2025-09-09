export interface IUserCreate {
  name: string;
  cnpj?: string;
  email: string;
  password: string;
}

export interface IUserLogin {
  email: string;
  password: string;
}

export interface IUser {
  id: string;
  name: string;
  avatar?: string;
  cnpj?: string;
  email: string;
  password: string;
}
