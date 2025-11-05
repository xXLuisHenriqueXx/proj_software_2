import { useRef } from "react";
import { ScrollView, Text, TextInput, TouchableOpacity } from "react-native";
import { styles } from "./styles";

import { Input } from "@src/components/Input";

import { IFieldsLogin } from "@src/common/Interfaces/Auth.interface";

interface IFieldsProps {
  fields: IFieldsLogin;
  setFields: (fields: IFieldsLogin) => void;
  onLogin: () => void;
  onForgot: () => void;
}

const Fields = ({ fields, setFields, onLogin, onForgot }: IFieldsProps) => {
  const passwordRef = useRef<TextInput>();

  return (
    <ScrollView
      style={styles.container}
      contentContainerStyle={styles.containerContent}
      showsVerticalScrollIndicator={false}
    >
      <Input.Normal
        label="E-mail"
        placeholder="seuemail@exemplo.com"
        returnKeyType="next"
        onSubmitEditing={() => passwordRef.current?.focus()}
        value={fields.email}
        onChangeText={(text: string) => {
          setFields({ ...fields, email: text });
        }}
      />

      <Input.Password
        label="Senha"
        ref={passwordRef}
        placeholder="Sua senha"
        returnKeyType="done"
        onSubmitEditing={onLogin}
        value={fields.password}
        onChangeText={(text: string) => {
          setFields({ ...fields, password: text });
        }}
      />

      <TouchableOpacity activeOpacity={0.85} onPress={onForgot}>
        <Text style={styles.textForgot}>Esqueci a senha</Text>
      </TouchableOpacity>
    </ScrollView>
  );
};

export default Fields;
