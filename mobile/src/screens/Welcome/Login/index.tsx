import { useRef, useState } from "react";
import { ActivityIndicator, Alert } from "react-native";
import {
  ButtonBack,
  ButtonLogin,
  LoginText,
  Container,
  ContainerHeader,
  Title,
} from "./styles";
import { useNavigation } from "@react-navigation/native";
import BottomSheet from "@gorhom/bottom-sheet";
import { ChevronLeft } from "lucide-react-native";

import Fields from "./_components/Fields";

import { PropsStack } from "@src/routes";
import { useThemeStore } from "@src/stores/ThemeStore";
import { validateLoginFields } from "@src/utils/ValidateLoginFields";
import SheetEmail from "../_components/SheetEmail";
import SheetCode from "../_components/SheetCode";
import { EMAIL_REGEX } from "@src/constants/Regex";

export interface IFieldsLogin {
  email: string;
  password: string;
}

const Login = () => {
  const { theme } = useThemeStore();

  const navigation = useNavigation<PropsStack>();
  const bottomSheetEmailRef = useRef<BottomSheet>(null);
  const bottomSheetCodeRef = useRef<BottomSheet>(null);

  const [fields, setFields] = useState<IFieldsLogin>({
    email: "",
    password: "",
  });
  const [email, setEmail] = useState<string>("");
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

  const handleOpenSheetEmail = () => {
    bottomSheetEmailRef.current?.expand();
  };

  const handleCloseSheetEmail = () => {
    bottomSheetEmailRef.current?.close();
    console.log("BottomSheet fechado → resetando ações...");
  };

  const handleSendEmail = () => {
    if (!EMAIL_REGEX.test(email)) {
      Alert.alert("Aviso", "Preencha um e-mail válido");
      return;
    }

    bottomSheetEmailRef.current?.close();
    bottomSheetCodeRef.current?.expand();
  };

  return (
    <Container>
      <ContainerHeader>
        <ButtonBack onPress={() => navigation.goBack()}>
          <ChevronLeft size={24} color={theme.colors.textPrimary} />
        </ButtonBack>
        <Title>Acessar conta</Title>
      </ContainerHeader>

      <Fields
        fields={fields}
        setFields={setFields}
        onLogin={handleLogin}
        onForgotEmail={handleOpenSheetEmail}
      />

      <ButtonLogin onPress={handleLogin} disabled={loading}>
        {loading ? (
          <ActivityIndicator size="small" color={theme.colors.textContrast} />
        ) : (
          <LoginText>Acessar</LoginText>
        )}
      </ButtonLogin>

      <SheetEmail
        ref={bottomSheetEmailRef}
        email={email}
        setEmail={setEmail}
        onSend={handleSendEmail}
        onClose={handleCloseSheetEmail}
      />
      <SheetCode ref={bottomSheetCodeRef} onClose={handleCloseSheetEmail} />
    </Container>
  );
};

export default Login;
