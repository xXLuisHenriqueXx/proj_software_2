import {
  EAgeRange,
  EToyType,
  IToyOwner,
  IToyPicture,
} from "../Interfaces/Toy.interface";

export interface IProduct {
  id: string;
  name: string;
  description: string;
  price: number;
  isNew: boolean;
  canTrade: boolean;
  canLend: boolean;
  usageTime: number;
  preservation: number;
  type: EToyType[];
  ageGroup: EAgeRange;
  pictures: IToyPicture[];
  owner: IToyOwner;
}
