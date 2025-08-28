import { useRef, useState } from "react";
import {
  ScrollView,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from "react-native";
import { Eye, EyeOff } from "lucide-react-native";

import { IFieldsLogin } from "../..";

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
  const passwordRef = useRef<any>();

  const [showPassword, setShowPassword] = useState<boolean>(true);

  return (
    <ScrollView
      className="w-full pt-12"
      contentContainerStyle={{ rowGap: 40, paddingBottom: 120 }}
      showsVerticalScrollIndicator={false}
    >
      <View className="flex-col">
        <View className="relative flex-row items-center justify-center h-16 px-4 border border-highlight rounded-xl">
          <Text className="absolute -top-3 left-4 px-2 bg-backgroundPrimary text-sm font-redHatDisplayMedium text-highlight">
            E-mail
          </Text>

          <TextInput
            className="flex-1 text-base font-redHatDisplayRegular text-primary"
            placeholder="seuemail@exemplo.com"
            returnKeyType="next"
            onSubmitEditing={() => passwordRef.current?.focus()}
            value={fields.email}
            onChangeText={(text: string) => {
              setFields({ ...fields, email: text });
            }}
          />
        </View>
      </View>

      <View className="flex-col">
        <View className="relative flex-row items-center justify-center h-16 px-4 border border-highlight rounded-xl">
          <Text className="absolute -top-3 left-4 px-2 bg-backgroundPrimary text-sm font-redHatDisplayMedium text-highlight">
            Senha
          </Text>

          <TextInput
            className="flex-1 text-base font-redHatDisplayRegular text-primary"
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
              color={"#373737"}
            />
          ) : (
            <EyeOff
              onPress={() => setShowPassword(!showPassword)}
              size={24}
              color={"#373737"}
            />
          )}
        </View>
        <TouchableOpacity activeOpacity={0.85} onPress={onForgotEmail}>
          <Text className="w-full mt-2 text-base font-redHatDisplayMedium text-highlight text-right underline">
            Esqueci a senha
          </Text>
        </TouchableOpacity>
      </View>
    </ScrollView>
  );
};

export default Fields;
