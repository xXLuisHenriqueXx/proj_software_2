import React, { memo, useState } from "react";
import { Button, ButtonText, Container } from "./styles";
import {
  Home,
  LucideIcon,
  PlusSquare,
  Search,
  UserCircle,
} from "lucide-react-native";

import { useThemeStore } from "@src/stores/ThemeStore";
import { AnimatePresence, MotiView } from "moti";

interface IButtonsDataProps {
  id: number;
  text: string;
  label: "home" | "search" | "create" | "account";
  width: number;
  icon: LucideIcon;
}

const Navbar = () => {
  const { theme } = useThemeStore();

  const [active, setActive] = useState<
    "home" | "search" | "create" | "account"
  >("home");

  const buttonsData: IButtonsDataProps[] = [
    { id: 1, text: "Início", label: "home", width: 40, icon: Home },
    { id: 2, text: "Pesquisar", label: "search", width: 74, icon: Search },
    { id: 3, text: "Criar", label: "create", width: 40, icon: PlusSquare },
    { id: 4, text: "Conta", label: "account", width: 46, icon: UserCircle },
  ];

  return (
    <Container>
      {buttonsData.map(({ id, icon: Icon, text, label, width }) => {
        const isActive = label === active;

        return (
          <Button key={id} onPress={() => setActive(label)}>
            <Icon size={24} color={theme.colors.textContrast} />
            <AnimatePresence initial={false}>
              {isActive && (
                <MotiView
                  from={{ width: 0, opacity: 0 }}
                  animate={{ width: width, opacity: 1 }}
                  exit={{ width: 0, opacity: 0 }}
                  transition={{ type: "timing", duration: 350 }}
                  style={{ overflow: "hidden" }}
                >
                  <ButtonText numberOfLines={1}>{text}</ButtonText>
                </MotiView>
              )}
            </AnimatePresence>
          </Button>
        );
      })}
    </Container>
  );
};

export default memo(Navbar);
