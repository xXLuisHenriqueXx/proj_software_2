import { useCallback } from "react";
import {
  ButtonLogin,
  LoginText,
  ButtonRegister,
  RegisterText,
  Container,
  ContainerBottom,
  ContainerText,
  Logo,
  Subtitle,
  Title,
} from "./styles";
import { useNavigation } from "@react-navigation/native";

import { useThemeStore } from "@src/stores/ThemeStore";
import { PropsStack } from "@src/routes";

const logoImage = require("@assets/splash.png");

const Access = () => {
  const { theme } = useThemeStore();

  const navigation = useNavigation<PropsStack>();

  const handleNavigateToLogin = useCallback(() => {
    navigation.navigate("Login");
  }, [navigation]);

  const handleNavigateToRegister = useCallback(() => {
    navigation.navigate("Register");
  }, [navigation]);

  return (
    <Container>
      <Logo source={logoImage} />

      <ContainerText>
        <Title>
          Pais espertos não compram tudo. {"\n"} Compartilham brinquedos!
        </Title>
        <Subtitle>Mais diversão, menos bagunça (e gastos!).</Subtitle>
      </ContainerText>

      <ContainerBottom
        style={{ elevation: 30, shadowColor: theme.colors.textPrimary }}
      >
        <ButtonLogin onPress={handleNavigateToLogin}>
          <LoginText>Acessar minha conta</LoginText>
        </ButtonLogin>
        <ButtonRegister onPress={handleNavigateToRegister}>
          <RegisterText>Criar conta</RegisterText>
        </ButtonRegister>
      </ContainerBottom>
    </Container>
  );
};

export default Access;
