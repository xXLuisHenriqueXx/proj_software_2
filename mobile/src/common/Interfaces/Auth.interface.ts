export interface IRegister {
  name: string;
  email: string;
  password: string;
  passwordConfirmation: string;
  cnpj?: string;
  addressDistrict: string;
  addressStreet: string;
  addressNumber: number;
  addressDetail?: string;
  addressCep: string;
}

export interface ILogin {
  email: string;
  password: string;
}

export type IFieldsRegister = Pick<
  IRegister,
  "name" | "email" | "password" | "passwordConfirmation" | "cnpj"
>;

export type IFieldsAddress = Pick<
  IRegister,
  | "addressDistrict"
  | "addressStreet"
  | "addressNumber"
  | "addressDetail"
  | "addressCep"
>;

export type IFieldsLogin = ILogin;
