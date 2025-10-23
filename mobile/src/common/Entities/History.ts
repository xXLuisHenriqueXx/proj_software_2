import { IProduct } from "./Product";

export interface IHistory {
  id: string;
  userId: string;
  toyId: string;
  visible: boolean;
  createdAt: Date;
  toy: IProduct;
}
