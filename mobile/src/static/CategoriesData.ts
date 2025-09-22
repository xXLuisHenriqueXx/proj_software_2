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
    value: EToyType.ARTÍSTICO,
  },
  {
    id: 2,
    name: "Aventura",
    icon: Compass,
    value: EToyType.AVENTURA,
  },
  {
    id: 3,
    name: "Bonecos",
    icon: Bot,
    value: EToyType.BONECOS,
  },
  {
    id: 4,
    name: "Carrinhos",
    icon: Car,
    value: EToyType.CARRINHOS,
  },
  {
    id: 5,
    name: "Cartas",
    icon: Club,
    value: EToyType.CARTAS,
  },
  {
    id: 6,
    name: "Educativos",
    icon: GraduationCap,
    value: EToyType.EDUCATIVO,
  },
  {
    id: 7,
    name: "Esportes",
    icon: Medal,
    value: EToyType.ESPORTES,
  },
  {
    id: 8,
    name: "Palavras",
    icon: WholeWord,
    value: EToyType.PALAVRAS,
  },
  {
    id: 9,
    name: "Para bebês",
    icon: Baby,
    value: EToyType.PARA_BEBÊS,
  },
  {
    id: 10,
    name: "Quebra-cabeças",
    icon: Puzzle,
    value: EToyType.QUEBRA_CABEÇAS,
  },
  {
    id: 11,
    name: "Tabuleiros",
    icon: Dice2,
    value: EToyType.TABULEIRO,
  },
  {
    id: 12,
    name: "Videogames",
    icon: Gamepad,
    value: EToyType.VIDEOGAME,
  },
];
