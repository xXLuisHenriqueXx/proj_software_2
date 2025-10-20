import { IProduct } from "./Product";

export interface IUser {
  id: string;
  name: string;
  email: string;
  parentalControl: boolean;
  cnpj?: string;
  pix_key?: string;
  picture?: string;
  addressDistrict: string;
  addressStreet: string;
  addressNumber: number;
  addressDetail?: string;
  addressCep: string;
  toys: IProduct[];
}
