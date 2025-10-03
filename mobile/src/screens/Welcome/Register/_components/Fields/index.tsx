import { forwardRef, useMemo, useRef, useState } from "react";
import {
  ScrollView,
  Text,
  TextInput,
  TextInputProps,
  View,
} from "react-native";
import { styles } from "./styles";
import { Eye, EyeOff } from "lucide-react-native";

import MaskedInput from "@src/components/MaskedInput";

import { SECONDARY_COLOR } from "@src/constants/Colors";
import { useRegister } from "@src/hooks/Welcome/useRegister";
import { CNPJ_MASK } from "@src/constants/Masks";
import { IFieldsRegister } from "@src/common/Interfaces/Auth.interface";

type IInputProps = TextInputProps & {
  label: string;
  instruction?: string;
  password?: boolean;
};

export const Input = forwardRef<any, IInputProps>((props, ref) => {
  const { label, instruction, ...rest } = props;

  return (
    <View style={{ flexDirection: "column" }}>
      <View style={styles.containerInput}>
        <Text style={styles.labelText}>{label}</Text>
        <TextInput style={styles.input} ref={ref} {...rest} />
      </View>
    </View>
  );
});

export const PasswordInput = forwardRef<any, IInputProps>((props, ref) => {
  const { label, instruction, ...rest } = props;
  const [showPassword, setShowPassword] = useState(true);

  return (
    <View style={{ flexDirection: "column" }}>
      <View style={styles.containerInput}>
        <Text style={styles.labelText}>{label}</Text>
        <TextInput
          style={styles.input}
          ref={ref}
          secureTextEntry={showPassword}
          {...rest}
        />
        {showPassword ? (
          <Eye
            onPress={() => setShowPassword(false)}
            size={24}
            color={SECONDARY_COLOR}
          />
        ) : (
          <EyeOff
            onPress={() => setShowPassword(true)}
            size={24}
            color={SECONDARY_COLOR}
          />
        )}
      </View>
      {instruction && <Text style={styles.instructionText}>{instruction}</Text>}
    </View>
  );
});

interface IParams {
  type: "personal" | "enterprise";
  refs: any;
  handleNavigateToAddress: () => void;
}

const getFieldsRegister = ({
  type,
  refs,
  handleNavigateToAddress,
}: IParams) => {
  const { emailRef, cnpjRef, passwordRef, passwordConfirmationRef } = refs;

  return [
    {
      key: "name",
      label: type === "personal" ? "Nome completo" : "Nome da instituição",
      placeholder:
        type === "personal" ? "Seu nome ..." : "Nome da instituição ...",
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
      component: PasswordInput,
    },
    {
      key: "passwordConfirmation",
      label: "Confirmar senha",
      placeholder: "Confirme sua senha ...",
      ref: passwordConfirmationRef,
      onSubmitEditing: handleNavigateToAddress,
      password: true,
      component: PasswordInput,
    },
  ];
};

interface IFieldsProps {
  type: "personal" | "enterprise";
  fields: IFieldsRegister;
  setFields: (fields: IFieldsRegister) => void;
  handleNavigateToAddress: () => void;
}

const Fields = ({
  type,
  fields,
  setFields,
  handleNavigateToAddress,
}: IFieldsProps) => {
  const emailRef = useRef<TextInput>();
  const cnpjRef = useRef<TextInput>();
  const passwordRef = useRef<TextInput>();
  const passwordConfirmationRef = useRef<TextInput>();

  const refs = { emailRef, cnpjRef, passwordRef, passwordConfirmationRef };
  const fieldConfigs = useMemo(
    () => getFieldsRegister({ type, refs, handleNavigateToAddress }),
    [type, handleNavigateToAddress]
  );

  return (
    <ScrollView
      style={styles.container}
      contentContainerStyle={{ rowGap: 32, paddingBottom: 120 }}
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
