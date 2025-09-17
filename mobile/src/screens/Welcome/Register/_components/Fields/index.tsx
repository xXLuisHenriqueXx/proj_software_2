import { forwardRef, useRef, useState } from "react";
import {
  ScrollView,
  Text,
  TextInput,
  TextInputProps,
  View,
} from "react-native";
import { Eye, EyeOff } from "lucide-react-native";

import MaskedInput from "@src/components/MaskedInput";

import { CNPJ_MASK } from "@src/constants/Masks";
import { IFieldsRegister } from "@src/common/Interfaces/Auth.interface";

interface IFieldProps {
  fields: IFieldsRegister;
  setFields: (fields: IFieldsRegister) => void;
  type: "personal" | "enterprise";
  onNavigate: () => void;
}

type IInputProps = TextInputProps & {
  label: string;
  instruction?: string;
  password?: boolean;
};

const Input = forwardRef<any, IInputProps>((props, ref) => {
  const { label, instruction, password, ...rest } = props;

  const [showPassword, setShowPassword] = useState<boolean>(true);

  return (
    <View className="flex-col">
      <View className="relative flex-row items-center justify-center h-16 px-4 border border-highlight rounded-xl">
        <Text className="absolute -top-3 left-4 px-2 bg-backgroundPrimary text-sm font-redHatDisplayMedium text-highlight">
          {label}
        </Text>
        <TextInput
          className="flex-1 text-base font-redHatDisplayRegular text-primary"
          ref={ref}
          secureTextEntry={password ? showPassword : false}
          {...rest}
        />
        {password &&
          (showPassword ? (
            <Eye
              onPress={() => setShowPassword(!showPassword)}
              size={24}
              color={"#373737"}
            />
          ) : (
            <EyeOff
              onPress={() => setShowPassword(!showPassword)}
              size={24}
              color={"#373737"}
            />
          ))}
      </View>

      <Text className="mt-1 text-sm font-redHatDisplayRegular text-primary">
        {instruction}
      </Text>
    </View>
  );
});

const Fields = ({ fields, setFields, type, onNavigate }: IFieldProps) => {
  const emailRef = useRef<TextInput>();
  const cnpjRef = useRef<TextInput>();
  const passwordRef = useRef<TextInput>();
  const passwordConfirmationRef = useRef<TextInput>();

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
      nextRef: passwordConfirmationRef,
      password: true,
      instruction: "Deve conter no mínimo 8 caracteres",
      component: Input,
    },
    {
      key: "passwordConfirmation",
      label: "Confirmar senha",
      placeholder: "Confirme sua senha ...",
      ref: passwordConfirmationRef,
      onSubmitEditing: onNavigate,
      password: true,
      component: Input,
    },
  ];

  return (
    <ScrollView
      className="w-full pt-12"
      contentContainerStyle={{ rowGap: 28, paddingBottom: 120 }}
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
    </ScrollView>
  );
};

export default Fields;
