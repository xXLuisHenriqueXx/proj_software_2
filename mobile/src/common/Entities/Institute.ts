import { EAgeRange } from "../Interfaces/Toy.interface";

export interface IInstitute {
  id: string;
  name: string;
  description: string;
  picture: string;
  phone: string[];
  online: string;
  address: string;
  ageRange: EAgeRange;
  pix_key: string;
  latitude: number;
  longitude: number;
}
