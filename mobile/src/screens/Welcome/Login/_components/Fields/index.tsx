import { useRef, useState } from "react";
import {
  ButtonForgot,
  ButtonForgotText,
  ContainerField,
  ContainerFields,
  ContainerInput,
  InputField,
  Label,
} from "./styles";
import { Eye, EyeOff } from "lucide-react-native";

import { IFieldsLogin } from "../..";
import { useThemeStore } from "@src/stores/ThemeStore";

interface IFieldsProps {
  fields: IFieldsLogin;
  setFields: (fields: IFieldsLogin) => void;
  onLogin: () => void;
  onForgotEmail: () => void;
}

const Fields = ({
  fields,
  setFields,
  onLogin,
  onForgotEmail,
}: IFieldsProps) => {
  const { theme } = useThemeStore();
  const passwordRef = useRef<any>();

  const [showPassword, setShowPassword] = useState<boolean>(true);

  return (
    <ContainerFields
      contentContainerStyle={{ rowGap: 40, paddingBottom: 120 }}
      showsVerticalScrollIndicator={false}
    >
      <ContainerField>
        <ContainerInput>
          <Label>E-mail</Label>
          <InputField
            placeholder="seuemail@exemplo.com"
            returnKeyType="next"
            onSubmitEditing={() => passwordRef.current?.focus()}
            blurOnSubmit={false}
            value={fields.email}
            onChangeText={(text: string) => {
              setFields({ ...fields, email: text });
            }}
          />
        </ContainerInput>
      </ContainerField>

      <ContainerField>
        <ContainerInput>
          <Label>Senha</Label>
          <InputField
            ref={passwordRef}
            placeholder="Sua senha"
            returnKeyType="done"
            onSubmitEditing={onLogin}
            blurOnSubmit={true}
            secureTextEntry={showPassword}
            value={fields.password}
            onChangeText={(text: string) => {
              setFields({ ...fields, password: text });
            }}
          />
          {showPassword ? (
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
          )}
        </ContainerInput>
        <ButtonForgot onPress={onForgotEmail}>
          <ButtonForgotText>Esqueci a senha</ButtonForgotText>
        </ButtonForgot>
      </ContainerField>
    </ContainerFields>
  );
};

export default Fields;
