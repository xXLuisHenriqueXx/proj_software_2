import { useState } from "react";
import { ActivityIndicator } from "react-native";
import {
  ButtonBack,
  ButtonLogin,
  LoginText,
  Container,
  ContainerHeader,
  Title,
} from "./styles";
import { useNavigation } from "@react-navigation/native";
import { ChevronLeft } from "lucide-react-native";

import Fields from "./_components/Fields";

import { PropsStack } from "@src/routes";
import { useThemeStore } from "@src/stores/ThemeStore";
import { validateLoginFields } from "@src/utils/ValidateLoginFields";

export interface IFieldsLogin {
  email: string;
  password: string;
}

const Login = () => {
  const { theme } = useThemeStore();

  const navigation = useNavigation<PropsStack>();

  const [fields, setFields] = useState<IFieldsLogin>({
    email: "",
    password: "",
  });
  const [loading, setLoading] = useState<boolean>(false);

  const handleLogin = () => {
    const validFields = validateLoginFields(fields);
    if (!validFields) return;

    setLoading(true);
    setTimeout(() => {
      setLoading(false);
    }, 3000);

    console.log("[LOGIN]: ", validFields);
  };

  return (
    <Container>
      <ContainerHeader>
        <ButtonBack onPress={() => navigation.goBack()}>
          <ChevronLeft size={24} color={theme.colors.textPrimary} />
        </ButtonBack>
        <Title>Acessar conta</Title>
      </ContainerHeader>

      <Fields fields={fields} setFields={setFields} onLogin={handleLogin} />

      <ButtonLogin onPress={handleLogin} disabled={loading}>
        {loading ? (
          <ActivityIndicator size="small" color={theme.colors.textContrast} />
        ) : (
          <LoginText>Acessar</LoginText>
        )}
      </ButtonLogin>
    </Container>
  );
};

export default Login;
