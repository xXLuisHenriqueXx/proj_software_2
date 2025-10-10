import { LucideIcon } from "lucide-react-native";

import { EToyType } from "../Interfaces/Toy.interface";

export interface ICategory {
  id: number;
  name: string;
  icon: LucideIcon;
  value: EToyType;
}
