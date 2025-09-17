import { Alert } from "react-native";

import { EMAIL_REGEX } from "@src/constants/Regex";
import { IFieldsLogin } from "@src/common/Interfaces/Auth.interface";

export const validateLoginFields = (fields: IFieldsLogin) => {
  const emailTrimmed = fields.email.trim();
  const passwordTrimmed = fields.password.trim();

  if (!emailTrimmed || !passwordTrimmed) {
    Alert.alert("Aviso", "Preencha todos os campos");
    return null;
  }

  if (!EMAIL_REGEX.test(emailTrimmed)) {
    Alert.alert("Aviso", "Preencha um e-mail válido");
    return null;
  }

  return {
    email: emailTrimmed,
    password: passwordTrimmed,
  };
};
