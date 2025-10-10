import { RefObject, useRef, useState } from "react";
import { useNavigation } from "@react-navigation/native";
import BottomSheet from "@gorhom/bottom-sheet";
import Toast from "react-native-toast-message";

import useAuth from "../useAuth";
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

  const validateFields = (): IFieldsLogin => {
    const { values, error } = validateForm(fields as any, loginSchema);
    if (error) throw new Error(error);

    return values;
  };

  const handleLogin = async () => {
    setLoading(true);

    try {
      const validFields = validateFields();

      await login(validFields);

      navigation.replace("AppStack");
    } catch (error: any) {
      Toast.show({
        type: "error",
        text1: "Aviso",
        text2: error.message || "Erro ao fazer login",
      });
    } finally {
      setLoading(false);
    }
  };

  const openSheet = (ref: RefObject<BottomSheet>) => ref.current?.expand();
  const closeSheet = (ref: RefObject<BottomSheet>) => ref.current?.close();

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
    loading,
    bottomSheetCodeRef,
    bottomSheetEmailRef,
    handleLogin,
    handleSendEmail,
    handleNavigateGoBack: () => navigation.goBack(),
    handleOpenSheetEmail: () => openSheet(bottomSheetEmailRef),
    handleCloseSheetEmail: () => closeSheet(bottomSheetEmailRef),
    handleCloseSheetCode: () => closeSheet(bottomSheetCodeRef),
  };
}
