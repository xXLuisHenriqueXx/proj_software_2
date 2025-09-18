import { Alert } from "react-native";

import { EMAIL_REGEX } from "@src/constants/Regex";
import { IFieldsRegister } from "@src/common/Interfaces/Auth.interface";

export const validateRegisterFields = (
  fields: IFieldsRegister,
  type: "personal" | "enterprise"
) => {
  const nameTrimmed = fields.name.trim();
  const cnpjTrimmed = fields.cnpj?.trim() || "";
  const emailTrimmed = fields.email.trim();
  const passwordTrimmed = fields.password.trim();
  const passwordConfirmationTrimmed = fields.passwordConfirmation.trim();

  if (
    !nameTrimmed ||
    !emailTrimmed ||
    !passwordTrimmed ||
    !passwordConfirmationTrimmed ||
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

  if (passwordTrimmed !== passwordConfirmationTrimmed) {
    Alert.alert("Aviso", "As senhas são diferentes");
    return null;
  }

  return {
    name: nameTrimmed,
    email: emailTrimmed,
    password: passwordTrimmed,
    passwordConfirmation: passwordConfirmationTrimmed,
    ...(type === "enterprise" ? { cnpj: cnpjTrimmed } : {}),
  };
};
