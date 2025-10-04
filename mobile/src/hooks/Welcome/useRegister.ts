import { useState } from "react";
import { useNavigation } from "@react-navigation/native";
import Toast from "react-native-toast-message";

import { IFieldsRegister } from "@src/common/Interfaces/Auth.interface";
import { PropsAuthStack } from "@src/routes/stacks/AuthStack";
import { validateForm } from "@src/utils/FormValidator";
import { registerSchema } from "@src/utils/ValidationSchemas";

export function useRegister() {
  const navigation = useNavigation<PropsAuthStack>();

  const [type, setType] = useState<"personal" | "enterprise">("personal");
  const [fields, setFields] = useState<IFieldsRegister>({
    name: "",
    cnpj: "",
    email: "",
    password: "",
    passwordConfirmation: "",
  });

  const validateFields = (): IFieldsRegister => {
    const { values, error } = validateForm(fields as any, registerSchema(type));
    if (error) throw new Error(error);

    return values;
  };

  const handleNavigateToAddress = async () => {
    try {
      const validFields = validateFields();

      navigation.navigate("Address", { fieldsData: validFields, type });
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
    navigation,
    validateFields,
    handleNavigateToAddress,
    isTypePersonal: type === "personal",
  };
}
