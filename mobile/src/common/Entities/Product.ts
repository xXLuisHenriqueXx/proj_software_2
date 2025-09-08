export enum Size {
  P = "P",
  M = "M",
  G = "G",
}

export enum Condition {
  NEW = "Novo",
  USED = "Usado",
}

export enum AgeRange {
  ZERO_ONE = "0-1",
  ONE_THREE = "1-3",
  THREE_SIX = "3-6",
  SIX_TWELVE = "6-12",
}

export interface IProduct {
  id: string;
  name: string;
  description: string;
  price: number;
  images: string[];
  size?: Size;
  condition: Condition;
  brand: string;
  ageRange: AgeRange;
}
