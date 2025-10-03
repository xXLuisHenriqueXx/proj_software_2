import { useCallback, useState } from "react";
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

  const validateFields = useCallback(() => {
    const { values, error } = validateForm(fields as any, registerSchema(type));
    return { values, error };
  }, [fields, type]);

  const handleNavigateToAddress = useCallback(() => {
    const { values, error } = validateFields();
    if (error) {
      Toast.show({
        type: "error",
        text1: "Aviso",
        text2: error,
      });

      return;
    }

    if (values) {
      navigation.navigate("Address", { fieldsData: values });
    }
  }, [navigation, fields, type]);

  const isTypePersonal = type === "personal";

  return {
    type,
    setType,
    fields,
    setFields,
    navigation,
    validateFields,
    handleNavigateToAddress,
    isTypePersonal,
  };
}
