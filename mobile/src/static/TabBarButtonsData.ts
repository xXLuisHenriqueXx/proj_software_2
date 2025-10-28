import {
  Home,
  LucideIcon,
  MessageCircleMore,
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
    key: "chats",
    text: "Chats",
    label: "chats",
    width: 40,
    icon: MessageCircleMore,
  },
  {
    key: "profile",
    text: "Conta",
    label: "profile",
    width: 46,
    icon: UserCircle,
  },
  {
    key: "create",
    text: "Criar",
    label: "create",
    width: 40,
    icon: PlusSquare,
  },
];
