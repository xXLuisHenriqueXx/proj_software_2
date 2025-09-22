import { useNavigation } from "@react-navigation/native";
import { NativeStackScreenProps } from "@react-navigation/native-stack";
import { EToyType, IToyCreate } from "@src/common/Interfaces/Toy.interface";
import { PropsAppStack } from "@src/routes/stacks/AppStack";
import {
  CreateStackParamList,
  PropsCreateStack,
} from "@src/routes/stacks/CreateStack";
import { categoriesData } from "@src/static/CategoriesData";
import { useState } from "react";
import {
  ScrollView,
  Text,
  TouchableOpacity,
  useWindowDimensions,
  View,
} from "react-native";
import Constants from "expo-constants";
import { ChevronLeft, X } from "lucide-react-native";
import { toyService } from "@src/services/ToyService";

type Props = NativeStackScreenProps<CreateStackParamList, "Categories">;

const Categories = ({ route }: Props) => {
  const { fields } = route.params;
  const { width } = useWindowDimensions();
  const statusBarHeight = Constants.statusBarHeight;
  const rootNavigation = useNavigation<PropsAppStack>();
  const createNavigation = useNavigation<PropsCreateStack>();

  const [categories, setCategories] = useState<EToyType[]>([]);
  const [loading, setLoading] = useState<boolean>(false);

  const handleSelectCategory = (category: EToyType) => {
    if (categories.includes(category)) {
      setCategories(categories.filter((item) => item !== category));
    } else {
      setCategories([...categories, category]);
    }
  };

  const handleCreate = async () => {
    setLoading(true);

    try {
      const params: IToyCreate = {
        name: fields.name,
        description: fields.description,
        price: fields.canLend || fields.canTrade ? 0 : Number(fields.price),
        isNew: fields.isNew,
        canTrade: fields.canTrade,
        canLend: fields.canLend,
        usageTime: 1,
        type: categories,
        ageGroup: fields.ageGroup,
        pictures: fields.pictures,
        discount: 0,
      };

      console.log(params);

      await toyService.create(params);

      rootNavigation.replace("AppTabs");
    } catch (error) {
      console.error(error);
    } finally {
      setLoading(false);
    }
  };

  const widthCategory = (width - 48 - 8) / 2;
  return (
    <ScrollView
      className="relative bg-backgroundPrimary"
      style={{ paddingTop: statusBarHeight + 64 }}
      contentContainerStyle={{
        paddingBottom: 124,
        rowGap: 48,
        paddingHorizontal: 24,
      }}
    >
      <View className="flex-row items-center justify-between w-full py-4">
        <View className="flex-row items-center gap-x-4">
          <TouchableOpacity
            activeOpacity={0.85}
            onPress={() => createNavigation.goBack()}
          >
            <ChevronLeft size={20} color={"#13131399"} />
          </TouchableOpacity>

          <Text className="text-2xl font-redHatDisplaySemiBold text-primary">
            Criar anúncio
          </Text>
        </View>

        <TouchableOpacity
          activeOpacity={0.85}
          onPress={() => rootNavigation.replace("AppTabs")}
        >
          <X size={20} color={"#13131399"} />
        </TouchableOpacity>
      </View>

      <View className="flex-col items-start gap-y-4">
        <Text className="text-lg font-redHatDisplaySemiBold text-primary">
          Escolha as categorias do seu anúncio
        </Text>

        <View className="flex-row flex-wrap justify-between gap-y-4 w-full">
          {categoriesData.map((item) => (
            <TouchableOpacity
              key={item.id}
              className="flex-row items-center justify-between px-4 py-6 bg-backgroundSecondary rounded-xl"
              style={{
                width: widthCategory,
                backgroundColor: categories.includes(item.value)
                  ? "#316A4125"
                  : "#EBEEEC",
              }}
              activeOpacity={0.85}
              onPress={() => handleSelectCategory(item.value)}
            >
              <Text className="text-base font-redHatDisplayRegular text-primary text-center">
                {item.name}
              </Text>

              <item.icon size={20} color={"#316A41"} />
            </TouchableOpacity>
          ))}
        </View>
      </View>

      <TouchableOpacity
        className="flex-row items-center justify-center w-full h-16 bg-highlight rounded-xl"
        activeOpacity={0.85}
        onPress={handleCreate}
      >
        <Text className="text-lg font-redHatDisplaySemiBold text-contrast">
          Salvar
        </Text>
      </TouchableOpacity>
    </ScrollView>
  );
};

export default Categories;
