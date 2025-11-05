import { useState } from "react";
import Toast from "react-native-toast-message";

import { IFieldsRegister } from "@src/common/Interfaces/Auth.interface";
import { validateForm } from "@src/utils/FormValidator";
import { registerSchema } from "@src/utils/ValidationSchemas";
import { useAppNavigation } from "../useAppNavigation";

export function useRegister() {
  const { authNavigation } = useAppNavigation();

  const [type, setType] = useState<"personal" | "enterprise">("personal");
  const [fields, setFields] = useState<IFieldsRegister>({
    name: "",
    cnpj: "",
    email: "",
    password: "",
    passwordConfirmation: "",
  });

  const validateFields = (): IFieldsRegister | null => {
    const { values, error } = validateForm(fields as any, registerSchema(type));
    if (error) throw new Error(error);

    return values;
  };

  const onNavigateToAddress = async () => {
    try {
      const validFields = validateFields();
      if (!validFields) return;

      authNavigation.navigate("Address", { fieldsData: validFields, type });
    } catch (error: any) {
      Toast.show({
        type: "error",
        text1: "Aviso",
        text2: error.message || "Erro ao fazer cadastro",
      });
    }
  };

  return {
    type,
    setType,
    fields,
    setFields,
    authNavigation,
    validateFields,
    onNavigateToAddress,
    onNavigateGoBack: () => authNavigation.goBack(),
    isTypePersonal: type === "personal",
  };
}
