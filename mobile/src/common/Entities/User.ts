export interface UserCreate {
  name: string;
  cnpj?: string;
  email: string;
  password: string;
}

export interface UserLogin {
  email: string;
  password: string;
}
