import { forwardRef, useRef, useState } from "react";
import { TextInput, TextInputProps } from "react-native";
import {
  ContainerField,
  ContainerFields,
  ContainerInput,
  InputField,
  Instruction,
  Label,
} from "./styles";
import { Eye, EyeOff } from "lucide-react-native";

import MaskedInput from "@src/components/MaskedInput";

import { IFieldsRegister } from "../..";
import { useThemeStore } from "@src/stores/ThemeStore";
import { CNPJ_MASK } from "@src/constants/Masks";

interface IFieldProps {
  fields: IFieldsRegister;
  setFields: (fields: IFieldsRegister) => void;
  type: "personal" | "enterprise";
  onNavigate: () => void;
  onRegister: () => void;
}

type IInputProps = TextInputProps & {
  label: string;
  instruction?: string;
  password?: boolean;
};

const Input = forwardRef<any, IInputProps>((props, ref) => {
  const { theme } = useThemeStore();
  const { label, instruction, password, ...rest } = props;

  const [showPassword, setShowPassword] = useState<boolean>(true);

  return (
    <ContainerField>
      <ContainerInput>
        <Label>{label}</Label>
        <InputField
          ref={ref}
          placeholderTextColor={theme.colors.textPrimary60}
          secureTextEntry={password ? showPassword : false}
          {...rest}
        />
        {password &&
          (showPassword ? (
            <Eye
              onPress={() => setShowPassword(!showPassword)}
              size={24}
              color={theme.colors.textSecondary}
            />
          ) : (
            <EyeOff
              onPress={() => setShowPassword(!showPassword)}
              size={24}
              color={theme.colors.textSecondary}
            />
          ))}
      </ContainerInput>
      <Instruction hasInstruction={!!instruction}>{instruction}</Instruction>
    </ContainerField>
  );
});

const Fields = ({
  fields,
  setFields,
  type,
  onNavigate,
  onRegister,
}: IFieldProps) => {
  const emailRef = useRef<TextInput>();
  const cnpjRef = useRef<TextInput>();
  const passwordRef = useRef<TextInput>();
  const confirmPasswordRef = useRef<TextInput>();

  const fieldConfigs = [
    {
      key: "name",
      label: type === "personal" ? "Nome completo" : "Nome da instituição",
      placeholder:
        type === "personal" ? "Seu nome ..." : "Nome da instituição ...",
      ref: undefined,
      nextRef: type === "enterprise" ? cnpjRef : emailRef,
      component: Input,
    },
    ...(type === "enterprise"
      ? [
          {
            key: "cnpj",
            label: "CNPJ",
            placeholder: "Seu CNPJ ...",
            ref: cnpjRef,
            nextRef: emailRef,
            mask: CNPJ_MASK,
            component: MaskedInput,
          },
        ]
      : []),
    {
      key: "email",
      label: "E-mail",
      placeholder: "seuemail@exemplo.com",
      ref: emailRef,
      nextRef: passwordRef,
      component: Input,
    },
    {
      key: "password",
      label: "Senha",
      placeholder: "Sua senha ...",
      ref: passwordRef,
      nextRef: confirmPasswordRef,
      password: true,
      instruction: "Deve conter no mínimo 8 caracteres",
      component: Input,
    },
    {
      key: "confirmPassword",
      label: "Confirmar senha",
      placeholder: "Confirme sua senha ...",
      ref: confirmPasswordRef,
      onSubmitEditing: type === "enterprise" ? onNavigate : onRegister,
      password: true,
      component: Input,
    },
  ];

  return (
    <ContainerFields
      contentContainerStyle={{ rowGap: 24, paddingBottom: 120 }}
      showsVerticalScrollIndicator={false}
    >
      {fieldConfigs.map((field, index) => (
        <field.component
          key={field.key}
          ref={field.ref}
          label={field.label}
          placeholder={field.placeholder}
          returnKeyType={index === fieldConfigs.length - 1 ? "done" : "next"}
          onSubmitEditing={
            field.onSubmitEditing
              ? field.onSubmitEditing
              : () => field.nextRef?.current?.focus()
          }
          password={field.password}
          instruction={field.instruction}
          value={fields[field.key as keyof typeof fields]}
          onChangeText={(text: string) =>
            setFields({ ...fields, [field.key]: text })
          }
          mask={field.mask}
        />
      ))}
    </ContainerFields>
  );
};

export default Fields;
