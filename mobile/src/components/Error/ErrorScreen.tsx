import { Text, View } from "react-native";

const ErrorScreen = () => {
  return (
    <View className="flex-1 items-center justify-center bg-backgroundPrimary">
      <Text className="text-2xl font-redHatDisplaySemiBold text-primary">
        Erro detectado nesta tela!
      </Text>
    </View>
  );
};

export default ErrorScreen;
