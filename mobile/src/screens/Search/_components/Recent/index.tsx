import { View, Text } from "react-native";
import React from "react";

const Recent = () => {
  return (
    <View className="flex-col gap-y-4 w-full">
      <Text className="text-lg font-redHatDisplayMedium text-primary">
        Pesquisas recentes
      </Text>

      <Text className="text-base font-redHatDisplayRegular text-primary/60">
        Nenhuma pesquisa recente ...
      </Text>
    </View>
  );
};

export default Recent;
