import {
  View,
  Text,
  useWindowDimensions,
  TouchableOpacity,
} from "react-native";

import { categoriesData } from "@src/static/CategoriesData";
import { EToyType } from "@src/common/Interfaces/Toy.interface";

interface ICategoriesProps {
  onSearch: (value: EToyType) => void;
}

const Categories = ({ onSearch }: ICategoriesProps) => {
  const { width } = useWindowDimensions();

  const widthCategory = (width - 48 - 8) / 2;

  return (
    <View className="flex-col gap-y-4 w-full">
      <Text className="text-lg font-redHatDisplaySemiBold text-primary">
        Explorar categorias
      </Text>

      <View className="flex-row flex-wrap justify-between gap-4 w-full">
        {categoriesData.map((item) => (
          <TouchableOpacity
            key={item.id}
            className="flex-row items-center justify-between px-4 py-6 bg-backgroundSecondary rounded-xl"
            style={{ width: widthCategory }}
            activeOpacity={0.85}
            onPress={() => onSearch(item.value)}
          >
            <Text className="text-base font-redHatDisplayRegular text-primary text-center">
              {item.name}
            </Text>

            <item.icon size={20} color={"#316A41"} />
          </TouchableOpacity>
        ))}
      </View>
    </View>
  );
};

export default Categories;
