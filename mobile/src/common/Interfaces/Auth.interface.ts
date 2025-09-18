export interface IRegister {
  name: string;
  email: string;
  password: string;
  passwordConfirmation: string;
  cpf?: string;
  cnpj?: string;
  addressDistrict?: string;
  addressStreet?: string;
  addressNumber?: number;
  addressDetail?: string;
  addressCep?: string;
}

export interface ILogin {
  email: string;
  password: string;
}

export interface IFieldsRegister {
  name: string;
  cnpj?: string;
  email: string;
  password: string;
  passwordConfirmation: string;
}

export interface IFieldsAddress {
  street: string;
  number: string;
  neighborhood: string;
  extra?: string;
  city: string;
  state: string;
}

export interface IFieldsLogin {
  email: string;
  password: string;
}
