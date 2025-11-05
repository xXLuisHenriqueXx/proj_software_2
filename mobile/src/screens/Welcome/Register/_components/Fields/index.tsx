import { useMemo, useRef } from "react";
import { ScrollView, TextInput } from "react-native";
import { styles } from "./styles";

import { Input } from "@src/components/Input";

import { CNPJ_MASK } from "@src/constants/Masks";
import { IFieldsRegister } from "@src/common/Interfaces/Auth.interface";

interface IParams {
  type: "personal" | "enterprise";
  refs: any;
  onNavigateToAddress: () => void;
}

const getFieldsRegister = ({ type, refs, onNavigateToAddress }: IParams) => {
  const { emailRef, cnpjRef, passwordRef, passwordConfirmationRef } = refs;

  return [
    {
      key: "name",
      label: type === "personal" ? "Nome completo" : "Nome da instituição",
      placeholder:
        type === "personal" ? "Seu nome ..." : "Nome da instituição ...",
      nextRef: type === "enterprise" ? cnpjRef : emailRef,
      component: Input.Normal,
    },
    ...(type === "enterprise"
      ? [
          {
            key: "cnpj",
            label: "CNPJ",
            placeholder: "XX.XXX.XXX/XXXX-XX",
            ref: cnpjRef,
            nextRef: emailRef,
            mask: CNPJ_MASK,
            component: Input.Masked,
          },
        ]
      : []),
    {
      key: "email",
      label: "E-mail",
      placeholder: "seuemail@exemplo.com",
      ref: emailRef,
      nextRef: passwordRef,
      component: Input.Normal,
    },
    {
      key: "password",
      label: "Senha",
      placeholder: "Sua senha ...",
      ref: passwordRef,
      nextRef: passwordConfirmationRef,
      password: true,
      instruction: "Deve conter no mínimo 8 caracteres",
      component: Input.Password,
    },
    {
      key: "passwordConfirmation",
      label: "Confirmar senha",
      placeholder: "Confirme sua senha ...",
      ref: passwordConfirmationRef,
      onSubmitEditing: onNavigateToAddress,
      password: true,
      component: Input.Password,
    },
  ];
};

interface IFieldsProps {
  type: "personal" | "enterprise";
  fields: IFieldsRegister;
  setFields: (fields: IFieldsRegister) => void;
  onNavigateToAddress: () => void;
}

const Fields = ({
  type,
  fields,
  setFields,
  onNavigateToAddress,
}: IFieldsProps) => {
  const emailRef = useRef<TextInput>();
  const cnpjRef = useRef<TextInput>();
  const passwordRef = useRef<TextInput>();
  const passwordConfirmationRef = useRef<TextInput>();

  const refs = { emailRef, cnpjRef, passwordRef, passwordConfirmationRef };
  const fieldConfigs = useMemo(
    () => getFieldsRegister({ type, refs, onNavigateToAddress }),
    [type, onNavigateToAddress]
  );

  return (
    <ScrollView
      style={styles.container}
      contentContainerStyle={styles.containerContent}
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
