import { useRef, useState } from "react";
import {
  ScrollView,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from "react-native";
import { styles } from "./styles";
import { Eye, EyeOff } from "lucide-react-native";

import { SECONDARY_COLOR } from "@src/constants/Colors";
import { IFieldsLogin } from "@src/common/Interfaces/Auth.interface";

interface IFieldsProps {
  fields: IFieldsLogin;
  setFields: (fields: IFieldsLogin) => void;
  onLogin: () => void;
  onForgot: () => void;
}

const Fields = ({ fields, setFields, onLogin, onForgot }: IFieldsProps) => {
  const passwordRef = useRef<any>();

  const [showPassword, setShowPassword] = useState<boolean>(true);

  return (
    <ScrollView
      style={styles.container}
      contentContainerStyle={{ rowGap: 32, paddingBottom: 120 }}
      showsVerticalScrollIndicator={false}
    >
      <View style={styles.containerInput}>
        <Text style={styles.textLabel}>E-mail</Text>

        <TextInput
          style={styles.input}
          placeholder="seuemail@exemplo.com"
          returnKeyType="next"
          onSubmitEditing={() => passwordRef.current?.focus()}
          value={fields.email}
          onChangeText={(text: string) => {
            setFields({ ...fields, email: text });
          }}
        />
      </View>

      <View style={{ flexDirection: "column" }}>
        <View style={styles.containerInput}>
          <Text style={styles.textLabel}>Senha</Text>

          <TextInput
            style={styles.input}
            ref={passwordRef}
            placeholder="Sua senha"
            returnKeyType="done"
            onSubmitEditing={onLogin}
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
              color={SECONDARY_COLOR}
            />
          ) : (
            <EyeOff
              onPress={() => setShowPassword(!showPassword)}
              size={24}
              color={SECONDARY_COLOR}
            />
          )}
        </View>
        <TouchableOpacity activeOpacity={0.85} onPress={onForgot}>
          <Text style={styles.textForgot}>Esqueci a senha</Text>
        </TouchableOpacity>
      </View>
    </ScrollView>
  );
};

export default Fields;
