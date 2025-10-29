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
  icon: LucideIcon;
}

export const buttonsData: IButtonsDataProps[] = [
  { key: "home", text: "Início", label: "home", icon: Home },
  {
    key: "search",
    text: "Pesquisar",
    label: "search",
    icon: Search,
  },
  {
    key: "chats",
    text: "Chats",
    label: "chats",
    icon: MessageCircleMore,
  },
  {
    key: "profile",
    text: "Conta",
    label: "profile",
    icon: UserCircle,
  },
  {
    key: "create",
    text: "Criar",
    label: "create",
    icon: PlusSquare,
  },
];
