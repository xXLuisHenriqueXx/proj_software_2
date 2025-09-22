import { EToyType } from "@src/common/Interfaces/Toy.interface";
import {
  Baby,
  Bot,
  Car,
  Club,
  Compass,
  Dice2,
  Gamepad,
  GraduationCap,
  LucideIcon,
  Medal,
  Palette,
  Puzzle,
  WholeWord,
} from "lucide-react-native";

interface ICategoriesDataProps {
  id: number;
  name: string;
  icon: LucideIcon;
  value: EToyType;
}

export const categoriesData: ICategoriesDataProps[] = [
  {
    id: 1,
    name: "Artístico",
    icon: Palette,
    value: EToyType.ARTISTIC,
  },
  {
    id: 2,
    name: "Aventura",
    icon: Compass,
    value: EToyType.ADVENTURE,
  },
  {
    id: 3,
    name: "Bonecos",
    icon: Bot,
    value: EToyType.DOLLS,
  },
  {
    id: 4,
    name: "Carrinhos",
    icon: Car,
    value: EToyType.CARS,
  },
  {
    id: 5,
    name: "Cartas",
    icon: Club,
    value: EToyType.CARDS,
  },
  {
    id: 6,
    name: "Educativos",
    icon: GraduationCap,
    value: EToyType.EDUCATIONAL,
  },
  {
    id: 7,
    name: "Esportes",
    icon: Medal,
    value: EToyType.SPORTS,
  },
  {
    id: 8,
    name: "Palavras",
    icon: WholeWord,
    value: EToyType.WORDS,
  },
  {
    id: 9,
    name: "Para bebês",
    icon: Baby,
    value: EToyType.BABIES,
  },
  {
    id: 10,
    name: "Quebra-cabeças",
    icon: Puzzle,
    value: EToyType.PUZZLES,
  },
  {
    id: 11,
    name: "Tabuleiros",
    icon: Dice2,
    value: EToyType.BOARD,
  },
  {
    id: 12,
    name: "Videogames",
    icon: Gamepad,
    value: EToyType.VIDEOGAME,
  },
];
