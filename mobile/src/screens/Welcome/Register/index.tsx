import { useCallback, useState } from "react";
import { useNavigation } from "@react-navigation/native";
import {
  ButtonBack,
  ButtonRegister,
  RegisterText,
  Container,
  ContainerHeader,
  Title,
  ContainerType,
  ButtonType,
  TextType,
} from "./styles";
import { ChevronLeft } from "lucide-react-native";

import Fields from "./_components/Fields";

import { useThemeStore } from "@src/stores/ThemeStore";
import { PropsStack } from "@src/routes";
import { validateRegisterFields } from "@src/utils/ValidateRegisterFields";
import { ActivityIndicator } from "react-native";

export interface IFieldsRegister {
  name: string;
  cnpj?: string;
  email: string;
  password: string;
  confirmPassword: string;
}

const Register = () => {
  const { theme } = useThemeStore();

  const navigation = useNavigation<PropsStack>();

  const [type, setType] = useState<"personal" | "enterprise">("personal");
  const [fields, setFields] = useState<IFieldsRegister>({
    name: "",
    cnpj: "",
    email: "",
    password: "",
    confirmPassword: "",
  });
  const [loading, setLoading] = useState<boolean>(false);

  const handleRegister = useCallback(() => {
    const validFields = validateRegisterFields(fields, type);
    if (!validFields) return;

    setLoading(true);
    setTimeout(() => {
      setLoading(false);
    }, 3000);

    console.log("[REGISTER] handleRegister: ", validFields);
  }, [fields, type]);

  const handleNavigateToAddress = useCallback(() => {
    const validFields = validateRegisterFields(fields, type);
    if (!validFields) return;

    setLoading(true);
    setTimeout(() => {
      setLoading(false);
    }, 3000);

    console.log("[REGISTER] handleNavigateToAddress: ", validFields);

    navigation.navigate("Address", { fieldsData: validFields });
  }, [navigation, fields, type]);

  const isTypePersonal = type === "personal";

  return (
    <Container>
      <ContainerHeader>
        <ButtonBack onPress={() => navigation.goBack()}>
          <ChevronLeft size={24} color={theme.colors.textPrimary} />
        </ButtonBack>
        <Title>Criar conta</Title>
      </ContainerHeader>

      <ContainerType>
        <ButtonType onPress={() => setType("personal")} active={isTypePersonal}>
          <TextType active={isTypePersonal}>Conta pessoal</TextType>
        </ButtonType>

        <ButtonType
          onPress={() => setType("enterprise")}
          active={!isTypePersonal}
        >
          <TextType active={!isTypePersonal}>Conta jurídica</TextType>
        </ButtonType>
      </ContainerType>

      <Fields
        fields={fields}
        setFields={setFields}
        type={type}
        onNavigate={handleNavigateToAddress}
        onRegister={handleRegister}
      />

      <ButtonRegister
        onPress={isTypePersonal ? handleRegister : handleNavigateToAddress}
        disabled={loading}
      >
        {loading ? (
          <ActivityIndicator size="small" color={theme.colors.textContrast} />
        ) : (
          <RegisterText>
            {isTypePersonal ? "Cadastrar-se" : "Avançar"}
          </RegisterText>
        )}
      </ButtonRegister>
    </Container>
  );
};

export default Register;
