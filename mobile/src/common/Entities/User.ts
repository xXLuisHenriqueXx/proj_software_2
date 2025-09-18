export interface IAddress {
  district: string;
  street: string;
  number: string;
  detail?: string;
  cep: string;
}

export interface IUserUpdate {
  name?: string;
  email?: string;
  password?: string;
  cpf?: string;
  cnpj?: string;
  address?: IAddress;
}

export interface IUser {
  id: string;
  name: string;
  email: string;
  password: string;
  cpf?: string;
  cnpj?: string;
  parentalControl: boolean;
  active: boolean;
  address: IAddress;
  createdAt: Date;
  updatedAt: Date;
  toys: string[];
  history: string[];
  ratings: number[];
  organizationInfo?: string;
  chatsAsUser1: string[];
  chatsAsUser2: string[];
  messages: string[];
}

export interface IUserResponse {
  id: string;
  name: string;
  email: string;
  picture?: string;
}
