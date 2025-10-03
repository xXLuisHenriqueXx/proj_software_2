import { useCallback, useRef, useState } from "react";
import { useNavigation } from "@react-navigation/native";
import BottomSheet from "@gorhom/bottom-sheet";
import Toast from "react-native-toast-message";

import useAuth from "./useAuth";
import { PropsRoot } from "@src/routes";
import { IFieldsLogin } from "@src/common/Interfaces/Auth.interface";
import { validateForm } from "@src/utils/FormValidator";
import { loginSchema } from "@src/utils/ValidationSchemas";
import { EMAIL_REGEX } from "@src/constants/Regex";

export function useLogin() {
  const { login } = useAuth();
  const navigation = useNavigation<PropsRoot>();
  const bottomSheetEmailRef = useRef<BottomSheet>(null);
  const bottomSheetCodeRef = useRef<BottomSheet>(null);

  const [fields, setFields] = useState<IFieldsLogin>({
    email: "",
    password: "",
  });
  const [email, setEmail] = useState<string>("");
  const [code, setCode] = useState<string>("");
  const [loading, setLoading] = useState<boolean>(false);

  const validateFields = useCallback(() => {
    const { values, error } = validateForm(fields as any, loginSchema);
    if (error) {
      Toast.show({
        type: "error",
        text1: "Aviso",
        text2: error,
      });

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
      Toast.show({
        type: "error",
        text1: "Aviso",
        text2: "E-mail inválido",
      });

      return;
    }

    bottomSheetEmailRef.current?.close();
    bottomSheetCodeRef.current?.expand();
  };

  return {
    fields,
    setFields,
    email,
    setEmail,
    code,
    setCode,
    navigation,
    loading,
    bottomSheetCodeRef,
    bottomSheetEmailRef,
    handleLogin,
    handleOpenSheetEmail,
    handleCloseSheetEmail,
    handleCloseSheetCode,
    handleSendEmail,
  };
}
