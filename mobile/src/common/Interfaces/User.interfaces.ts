export interface IUpdateUser {
  name?: string;
  email?: string;
  password?: string;
  cpf?: string;
  cnpj?: string;
  addressDistrict?: string;
  addressStreet?: string;
  addressNumber?: number;
  addressDetail?: string;
  addressCep?: string;
}

export interface IUpdateAvatar {
  avatarBase64: string;
}

export interface IUser {
  id: string;
  name: string;
  email: string;
  password: string;
  cpf?: string;
  cnpj?: string;
  addressDistrict?: string;
  addressStreet?: string;
  addressNumber?: number;
  addressDetail?: string;
  addressCep?: string;
  createdAt: Date;
  updatedAt: Date;
}
