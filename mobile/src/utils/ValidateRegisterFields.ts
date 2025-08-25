import { Alert } from "react-native";

import { IFieldsRegister } from "@src/screens/Welcome/Register";
import { EMAIL_REGEX } from "@src/constants/Regex";

export const validateRegisterFields = (
  fields: IFieldsRegister,
  type: "personal" | "enterprise"
) => {
  const nameTrimmed = fields.name.trim();
  const cnpjTrimmed = fields.cnpj?.trim() || "";
  const emailTrimmed = fields.email.trim();
  const passwordTrimmed = fields.password.trim();
  const confirmPasswordTrimmed = fields.confirmPassword.trim();

  if (
    !nameTrimmed ||
    !emailTrimmed ||
    !passwordTrimmed ||
    !confirmPasswordTrimmed ||
    (type === "enterprise" && !cnpjTrimmed)
  ) {
    Alert.alert("Aviso", "Preencha todos os campos");
    return null;
  }

  if (!EMAIL_REGEX.test(emailTrimmed)) {
    Alert.alert("Aviso", "Preencha um e-mail válido");
    return null;
  }

  if (passwordTrimmed.length < 8) {
    Alert.alert("Aviso", "A senha deve ter pelo menos 8 caracteres");
    return null;
  }

  if (passwordTrimmed !== confirmPasswordTrimmed) {
    Alert.alert("Aviso", "As senhas são diferentes");
    return null;
  }

  return {
    name: nameTrimmed,
    email: emailTrimmed,
    password: passwordTrimmed,
    ...(type === "enterprise" ? { cnpj: cnpjTrimmed } : {}),
  };
};
