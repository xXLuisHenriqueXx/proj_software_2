import { useCallback } from "react";
import { Image, Text, TouchableOpacity, View } from "react-native";
import { useNavigation } from "@react-navigation/native";
import Constants from "expo-constants";

import { PropsStack } from "@src/routes";

const Access = () => {
  const navigation = useNavigation<PropsStack>();

  const handleNavigateToLogin = useCallback(() => {
    navigation.navigate("Login");
  }, [navigation]);

  const handleNavigateToRegister = useCallback(() => {
    navigation.navigate("Register");
  }, [navigation]);

  const statusBarHeight = Constants.statusBarHeight;

  return (
    <View
      className="relative flex-1 flex-col items-center gap-y-32 bg-backgroundPrimary"
      style={{ paddingTop: statusBarHeight + 60 }}
    >
      <Image
        className="w-52 h-60"
        source={require("@assets/splash.png")}
        resizeMode="cover"
      />

      <View className="flex-col items-center gap-y-2 px-6">
        <Text className="text-xl font-redHatDisplaySemiBold text-primary text-center">
          Pais espertos não compram tudo. {"\n"} Compartilham brinquedos!
        </Text>

        <Text className="text-base font-redHatDisplayRegular text-primary text-center">
          Mais diversão, menos bagunça (e gastos!).
        </Text>
      </View>

      <View
        className="absolute bottom-0 left-0 right-0 flex-col items-center gap-y-6 py-8 px-6 bg-contrast rounded-t-3xl"
        style={{ elevation: 30, shadowColor: "#131313" }}
      >
        <TouchableOpacity
          className="flex-row items-center justify-center w-full h-16 bg-highlight rounded-xl"
          activeOpacity={0.85}
          onPress={handleNavigateToLogin}
        >
          <Text className="text-lg font-redHatDisplayMedium text-contrast">
            Acessar minha conta
          </Text>
        </TouchableOpacity>

        <TouchableOpacity
          className="flex-row items-center justify-center w-full h-16"
          activeOpacity={0.85}
          onPress={handleNavigateToRegister}
        >
          <Text className="text-lg font-redHatDisplayMedium text-highlight">
            Criar conta
          </Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default Access;
