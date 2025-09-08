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
}

export const categoriesData: ICategoriesDataProps[] = [
  {
    id: 1,
    name: "Artístico",
    icon: Palette,
  },
  {
    id: 2,
    name: "Aventura",
    icon: Compass,
  },
  {
    id: 3,
    name: "Bonecos",
    icon: Bot,
  },
  {
    id: 4,
    name: "Carrinhos",
    icon: Car,
  },
  {
    id: 5,
    name: "Cartas",
    icon: Club,
  },
  {
    id: 6,
    name: "Educativos",
    icon: GraduationCap,
  },
  {
    id: 7,
    name: "Esportes",
    icon: Medal,
  },
  {
    id: 8,
    name: "Palavras",
    icon: WholeWord,
  },
  {
    id: 9,
    name: "Para bebês",
    icon: Baby,
  },
  {
    id: 10,
    name: "Quebra-cabeças",
    icon: Puzzle,
  },
  {
    id: 11,
    name: "Tabuleiros",
    icon: Dice2,
  },
  {
    id: 12,
    name: "Videogames",
    icon: Gamepad,
  },
];
