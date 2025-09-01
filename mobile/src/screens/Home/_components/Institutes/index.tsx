import { institutesData } from "@src/static/InstitutesData";
import { ChevronRight } from "lucide-react-native";
import { View, Text, TouchableOpacity, ScrollView, Image } from "react-native";

const Institutes = () => {
  return (
    <View className="flex-col items-center gap-y-4">
      <TouchableOpacity
        className="flex-row items-start justify-between gap-x-2 w-full"
        activeOpacity={0.85}
      >
        <View className="flex-col">
          <Text className="text-lg font-redHatDisplaySemiBold text-primary">
            Instituições assistenciais
          </Text>
          <Text className="text-base font-redHatDisplayRegular text-primary">
            Explore e contribua com um mundo melhor
          </Text>
        </View>

        <ChevronRight size={24} color={"#131313"} />
      </TouchableOpacity>

      <View className="w-full">
        <ScrollView
          contentContainerStyle={{ columnGap: 16 }}
          horizontal
          showsHorizontalScrollIndicator={false}
        >
          {institutesData.map((item, index) => (
            <TouchableOpacity
              key={index}
              className="flex-col items-center gap-y-1 w-24"
              activeOpacity={0.85}
              onPress={item.action}
            >
              <Image
                className="w-24 h-24 border border-primary/5 rounded-xl"
                source={{ uri: item.src }}
                resizeMode="contain"
              />

              <Text className="text-sm font-redHatDisplayMedium text-primary text-center">
                {item.name}
              </Text>
            </TouchableOpacity>
          ))}
        </ScrollView>
      </View>
    </View>
  );
};

export default Institutes;
