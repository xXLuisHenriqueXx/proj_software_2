import { useState } from "react";
import {
  ScrollView,
  Text,
  TouchableOpacity,
  useWindowDimensions,
  View,
} from "react-native";
import { styles } from "./styles";
import { useNavigation } from "@react-navigation/native";
import { NativeStackScreenProps } from "@react-navigation/native-stack";
import { ChevronLeft, X } from "lucide-react-native";

import { EToyType, IToyCreate } from "@src/common/Interfaces/Toy.interface";
import { PropsAppStack } from "@src/routes/stacks/AppStack";
import {
  CreateStackParamList,
  PropsCreateStack,
} from "@src/routes/stacks/CreateStack";
import { categoriesData } from "@src/static/CategoriesData";
import { toyService } from "@src/services/ToyService";
import {
  BACKGROUND_PRIMARY_COLOR,
  BACKGROUND_SECONDARY_COLOR,
  HIGHLIGHT_COLOR,
  SECONDARY_COLOR,
} from "@src/constants/Colors";

type Props = NativeStackScreenProps<CreateStackParamList, "Categories">;

const Categories = ({ route }: Props) => {
  const { fields } = route.params;
  const { width } = useWindowDimensions();
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

      await toyService.create(params);

      rootNavigation.replace("AppTabs");
    } catch (error) {
      console.error(error);
    } finally {
      setLoading(false);
    }
  };

  const widthCategory = (width - 48 - 16) / 2;
  return (
    <ScrollView
      style={styles.container}
      contentContainerStyle={{
        paddingBottom: 124,
        rowGap: 48,
        paddingHorizontal: 24,
      }}
    >
      <View style={styles.containerHeader}>
        <View style={styles.containerTitle}>
          <TouchableOpacity
            activeOpacity={0.85}
            onPress={() => createNavigation.goBack()}
          >
            <ChevronLeft size={20} color={SECONDARY_COLOR} />
          </TouchableOpacity>

          <Text style={styles.title}>Criar anúncio</Text>
        </View>

        <TouchableOpacity
          activeOpacity={0.85}
          onPress={() => rootNavigation.replace("AppTabs")}
        >
          <X size={20} color={SECONDARY_COLOR} />
        </TouchableOpacity>
      </View>

      <View style={styles.containerContent}>
        <Text style={styles.contentTitle}>
          Escolha as categorias do seu anúncio
        </Text>

        <View style={styles.containerList}>
          {categoriesData.map((item) => (
            <TouchableOpacity
              key={item.id}
              style={[
                styles.containerItem,
                {
                  width: widthCategory,
                  backgroundColor: categories.includes(item.value)
                    ? BACKGROUND_SECONDARY_COLOR
                    : BACKGROUND_PRIMARY_COLOR,
                },
              ]}
              activeOpacity={0.85}
              onPress={() => handleSelectCategory(item.value)}
            >
              <Text style={styles.name}>{item.name}</Text>

              <item.icon size={20} color={HIGHLIGHT_COLOR} />
            </TouchableOpacity>
          ))}
        </View>
      </View>

      <TouchableOpacity
        style={styles.buttonSave}
        activeOpacity={0.85}
        onPress={handleCreate}
      >
        <Text style={styles.saveText}>Salvar</Text>
      </TouchableOpacity>
    </ScrollView>
  );
};

export default Categories;
