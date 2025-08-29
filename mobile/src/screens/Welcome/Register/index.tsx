import { useCallback, useState } from "react";
import { ActivityIndicator, Text, TouchableOpacity, View } from "react-native";
import { useNavigation } from "@react-navigation/native";
import Constants from "expo-constants";
import { ChevronLeft } from "lucide-react-native";

import Fields from "./_components/Fields";

import { PropsRoot } from "@src/routes";
import { PropsAuthStack } from "@src/routes/stacks/AuthStack";
import { validateRegisterFields } from "@src/utils/ValidateRegisterFields";

export interface IFieldsRegister {
  name: string;
  cnpj?: string;
  email: string;
  password: string;
  confirmPassword: string;
}

const Register = () => {
  const rootNavigation = useNavigation<PropsRoot>();
  const authNavigation = useNavigation<PropsAuthStack>();

  const [type, setType] = useState<"personal" | "enterprise">("personal");
  const [fields, setFields] = useState<IFieldsRegister>({
    name: "",
    cnpj: "",
    email: "",
    password: "",
    confirmPassword: "",
  });
  const [loading, setLoading] = useState<boolean>(false);

  const handleRegister = useCallback(() => {
    const validFields = validateRegisterFields(fields, type);
    if (!validFields) return;

    setLoading(true);
    setTimeout(() => {
      setLoading(false);
    }, 3000);

    console.log("[REGISTER] handleRegister: ", validFields);

    rootNavigation.replace("AppTabs");
  }, [fields, type]);

  const handleNavigateToAddress = useCallback(() => {
    const validFields = validateRegisterFields(fields, type);
    if (!validFields) return;

    setLoading(true);
    setTimeout(() => {
      setLoading(false);
    }, 3000);

    console.log("[REGISTER] handleNavigateToAddress: ", validFields);

    authNavigation.navigate("Address", { fieldsData: validFields });
  }, [authNavigation, fields, type]);

  const isTypePersonal = type === "personal";
  const statusBarHeight = Constants.statusBarHeight;

  return (
    <View
      className="relative flex-1 flex-col items-center px-6 bg-backgroundPrimary"
      style={{ paddingTop: statusBarHeight }}
    >
      <View className="flex-row items-center gap-x-4 w-full py-4 mb-4">
        <TouchableOpacity
          activeOpacity={0.85}
          onPress={() => authNavigation.goBack()}
        >
          <ChevronLeft size={24} color={"#131313"} />
        </TouchableOpacity>

        <Text className="text-2xl font-redHatDisplaySemiBold text-primary">
          Criar conta
        </Text>
      </View>

      <View className="flex-row items-center justify-center gap-x-2 w-full p-2 border border-primary rounded-xl">
        <TouchableOpacity
          className="flex-1 items-center justify-center py-2 rounded-lg"
          style={{
            backgroundColor: isTypePersonal ? "#316A41" : "transparent",
          }}
          activeOpacity={0.85}
          onPress={() => setType("personal")}
        >
          <Text
            className="text-lg font-redHatDisplayMedium"
            style={{ color: isTypePersonal ? "#FAF9F6" : "#131313" }}
          >
            Conta pessoal
          </Text>
        </TouchableOpacity>

        <TouchableOpacity
          className="flex-1 items-center justify-center py-2 rounded-lg"
          style={{
            backgroundColor: !isTypePersonal ? "#316A41" : "transparent",
          }}
          activeOpacity={0.85}
          onPress={() => setType("enterprise")}
        >
          <Text
            className="text-lg font-redHatDisplayMedium"
            style={{ color: !isTypePersonal ? "#FAF9F6" : "#131313" }}
          >
            Conta jurídica
          </Text>
        </TouchableOpacity>
      </View>

      <Fields
        fields={fields}
        setFields={setFields}
        type={type}
        onNavigate={handleNavigateToAddress}
        onRegister={handleRegister}
      />

      <TouchableOpacity
        className="absolute bottom-6 flex-row items-center justify-center w-full h-16 bg-highlight rounded-xl"
        activeOpacity={0.85}
        onPress={isTypePersonal ? handleRegister : handleNavigateToAddress}
        disabled={loading}
      >
        {loading ? (
          <ActivityIndicator size="small" color={"#FEFEFE"} />
        ) : (
          <Text className="text-lg font-redHatDisplayMedium text-contrast">
            {isTypePersonal ? "Cadastrar-se" : "Avançar"}
          </Text>
        )}
      </TouchableOpacity>
    </View>
  );
};

export default Register;
