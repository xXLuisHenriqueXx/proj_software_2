import { useCallback, useRef, useState } from "react";
import {
  ActivityIndicator,
  Alert,
  Text,
  TouchableOpacity,
  View,
} from "react-native";
import { styles } from "./styles";
import { useNavigation } from "@react-navigation/native";
import BottomSheet from "@gorhom/bottom-sheet";
import { ChevronLeft } from "lucide-react-native";

import Fields from "./_components/Fields";
import SheetEmail from "../_components/SheetEmail";
import SheetCode from "../_components/SheetCode";

import { EMAIL_REGEX } from "@src/constants/Regex";
import { PropsRoot } from "@src/routes";
import { IFieldsLogin } from "@src/common/Interfaces/Auth.interface";
import useAuth from "@src/hooks/useAuth";
import { validateForm } from "@src/utils/FormValidator";
import { loginSchema } from "@src/utils/ValidationSchemas";
import { CONTRAST_COLOR, PRIMARY_COLOR } from "@src/constants/Colors";

const Login = () => {
  const { login } = useAuth();
  const navigation = useNavigation<PropsRoot>();
  const bottomSheetEmailRef = useRef<BottomSheet>(null);
  const bottomSheetCodeRef = useRef<BottomSheet>(null);

  const [fields, setFields] = useState<IFieldsLogin>({
    email: "",
    password: "",
  });
  const [email, setEmail] = useState<string>("");
  const [loading, setLoading] = useState<boolean>(false);

  const validateFields = useCallback(() => {
    const { values, error } = validateForm(fields as any, loginSchema);
    if (error) {
      Alert.alert("Aviso", error);

      return;
    }

    return values;
  }, [fields]);

  const handleLogin = () => {
    setLoading(true);

    try {
      const validFields = validateFields();
      if (!validFields) return;

      login(validFields);

      navigation.replace("AppStack");
    } catch (error) {
      console.error(error);
    } finally {
      setLoading(false);
    }
  };

  const handleOpenSheetEmail = () => {
    bottomSheetEmailRef.current?.expand();
  };

  const handleCloseSheetEmail = () => {
    bottomSheetEmailRef.current?.close();
  };

  const handleCloseSheetCode = () => {
    bottomSheetCodeRef.current?.close();
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
    <View style={styles.container}>
      <View style={styles.containerHeader}>
        <TouchableOpacity
          activeOpacity={0.85}
          onPress={() => navigation.goBack()}
        >
          <ChevronLeft size={24} color={PRIMARY_COLOR} />
        </TouchableOpacity>

        <Text style={styles.title}>Acessar conta</Text>
      </View>

      <Fields
        fields={fields}
        setFields={setFields}
        onLogin={handleLogin}
        onForgotEmail={handleOpenSheetEmail}
      />

      <TouchableOpacity
        style={styles.buttonLogin}
        activeOpacity={0.85}
        onPress={handleLogin}
        disabled={loading}
      >
        {loading ? (
          <ActivityIndicator size="small" color={CONTRAST_COLOR} />
        ) : (
          <Text style={styles.textLogin}>Acessar</Text>
        )}
      </TouchableOpacity>

      <SheetEmail
        ref={bottomSheetEmailRef}
        email={email}
        setEmail={setEmail}
        onSend={handleSendEmail}
        onClose={handleCloseSheetEmail}
      />
      <SheetCode ref={bottomSheetCodeRef} onClose={handleCloseSheetCode} />
    </View>
  );
};

export default Login;
