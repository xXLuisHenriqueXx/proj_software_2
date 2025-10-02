import { useCallback, useRef, useState } from "react";
import {
  ActivityIndicator,
  Alert,
  Text,
  TouchableOpacity,
  View,
} from "react-native";
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
import { statusBarHeight } from "@src/constants/Values";
import { validateForm } from "@src/utils/FormValidator";
import { loginSchema } from "@src/utils/ValidationSchemas";

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
    <View
      className="relative flex-1 flex-col items-center px-6 bg-backgroundPrimary"
      style={{ paddingTop: statusBarHeight + 32 }}
    >
      <View className="flex-row items-center gap-x-4 w-full py-4">
        <TouchableOpacity
          activeOpacity={0.85}
          onPress={() => navigation.goBack()}
        >
          <ChevronLeft size={24} color={"#131313"} />
        </TouchableOpacity>

        <Text className="text-2xl font-redHatDisplaySemiBold text-primary">
          Acessar conta
        </Text>
      </View>

      <Fields
        fields={fields}
        setFields={setFields}
        onLogin={handleLogin}
        onForgotEmail={handleOpenSheetEmail}
      />

      <TouchableOpacity
        className="absolute bottom-6 flex-row items-center justify-center w-full h-16 bg-highlight rounded-xl"
        activeOpacity={0.85}
        onPress={handleLogin}
        disabled={loading}
      >
        {loading ? (
          <ActivityIndicator size="small" color={"#FEFEFE"} />
        ) : (
          <Text className="text-lg font-redHatDisplayMedium text-contrast">
            Acessar
          </Text>
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
