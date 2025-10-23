import {
  Home,
  LucideIcon,
  PlusSquare,
  Search,
  UserCircle,
} from "lucide-react-native";

interface IButtonsDataProps {
  key: string;
  text: string;
  label: string;
  width: number;
  icon: LucideIcon;
}

export const buttonsData: IButtonsDataProps[] = [
  { key: "home", text: "Início", label: "home", width: 40, icon: Home },
  {
    key: "search",
    text: "Pesquisar",
    label: "search",
    width: 74,
    icon: Search,
  },
  {
    key: "create",
    text: "Criar",
    label: "create",
    width: 40,
    icon: PlusSquare,
  },
  {
    key: "profile",
    text: "Conta",
    label: "profile",
    width: 46,
    icon: UserCircle,
  },
];
