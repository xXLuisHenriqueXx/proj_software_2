import {
  IFieldsAddress,
  IFieldsLogin,
  IFieldsRegister,
} from "@src/common/Interfaces/Auth.interface";
import { FieldValidation } from "./FormValidator";
import { validationRules } from "./ValidationRules";

export const addressSchema: FieldValidation<IFieldsAddress>[] = [
  { field: "addressStreet", rules: [validationRules.required()] },
  { field: "addressNumber", rules: [validationRules.required()] },
  { field: "addressDistrict", rules: [validationRules.required()] },
];

export const loginSchema: FieldValidation<IFieldsLogin>[] = [
  {
    field: "email",
    rules: [validationRules.required(), validationRules.email()],
  },
  { field: "password", rules: [validationRules.required()] },
];

export const registerSchema = (
  type: "personal" | "enterprise"
): FieldValidation<IFieldsRegister>[] => [
  { field: "name", rules: [validationRules.required()] },
  {
    field: "email",
    rules: [validationRules.required(), validationRules.email()],
  },
  {
    field: "password",
    rules: [validationRules.required(), validationRules.minLength(8)],
  },
  {
    field: "passwordConfirmation",
    rules: [validationRules.required(), validationRules.match("password")],
  },
  ...(type === "enterprise"
    ? [
        {
          field: "cnpj" as keyof IFieldsRegister,
          rules: [validationRules.required()],
        },
      ]
    : []),
];
