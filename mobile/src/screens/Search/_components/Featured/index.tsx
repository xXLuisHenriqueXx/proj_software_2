import { featuredData } from "@src/static/FeaturedData";
import { View, Text } from "react-native";

const Featured = () => {
  return (
    <View className="flex-col gap-y-4 w-full">
      <Text className="text-lg font-redHatDisplaySemiBold text-primary">
        Em destaque
      </Text>

      <View className="flex-row flex-wrap gap-3 w-full">
        {featuredData.map((item) => (
          <Text
            key={item.id}
            className="px-3 py-1 rounded-md border border-primary/10 text-base font-redHatDisplayRegular text-primary"
          >
            {item.name}
          </Text>
        ))}
      </View>
    </View>
  );
};

export default Featured;
