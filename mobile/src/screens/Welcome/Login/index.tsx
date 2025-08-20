import { useNavigation } from "@react-navigation/native";
import { PropsStack } from "@src/routes";
import { useThemeStore } from "@src/stores/ThemeStore";
import {
  ButtonBack,
  ButtonForgot,
  ButtonForgotText,
  ButtonLogin,
  ButtonLoginText,
  Container,
  ContainerFields,
  ContainerHeader,
  Title,
} from "./styles";
import { ChevronLeft, Eye, EyeOff } from "lucide-react-native";
import { useRef, useState } from "react";
import Input from "@src/components/Input";

interface IFields {
  email: string;
  password: string;
}

const Login = () => {
  const { theme } = useThemeStore();

  const navigation = useNavigation<PropsStack>();
  const passwordRef = useRef<any>();

  const [fields, setFields] = useState<IFields>({
    email: "",
    password: "",
  });

  const handleLogin = () => {
    alert(fields);
  };

  return (
    <Container>
      <ContainerHeader>
        <ButtonBack onPress={() => navigation.goBack()}>
          <ChevronLeft size={24} color={theme.colors.textPrimary} />
        </ButtonBack>
        <Title>Acessar conta</Title>
      </ContainerHeader>

      <ContainerFields>
        <Input
          label="E-mail"
          placeholder="seuemail@exemplo.com"
          keyType="next"
          onSubmitEditing={() => passwordRef.current?.focus()}
          blurOnSubmit={false}
          value={fields.email}
          setValue={(text) => {
            setFields({ ...fields, email: text });
          }}
        />

        <Input
          ref={passwordRef}
          label="Senha"
          placeholder="Sua senha"
          keyType="done"
          onSubmitEditing={handleLogin}
          blurOnSubmit={true}
          password
          value={fields.password}
          setValue={(text) => {
            setFields({ ...fields, password: text });
          }}
        />
        <ButtonForgot>
          <ButtonForgotText>Esqueci a senha</ButtonForgotText>
        </ButtonForgot>
      </ContainerFields>

      <ButtonLogin>
        <ButtonLoginText>Acessar</ButtonLoginText>
      </ButtonLogin>
    </Container>
  );
};

export default Login;
