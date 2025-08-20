import { useCallback } from "react";
import {
  ButtonLogin,
  ButtonLoginText,
  ButtonRegister,
  ButtonRegisterText,
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
          <ButtonLoginText>Acessar minha conta</ButtonLoginText>
        </ButtonLogin>
        <ButtonRegister>
          <ButtonRegisterText>Criar conta</ButtonRegisterText>
        </ButtonRegister>
      </ContainerBottom>
    </Container>
  );
};

export default Access;
