import {
  ActivityIndicator,
  ScrollView,
  Text,
  TouchableOpacity,
  View,
} from "react-native";
import { styles } from "./styles";
import { NativeStackScreenProps } from "@react-navigation/native-stack";
import { ChevronLeft, X } from "lucide-react-native";

import Loader from "@src/components/Loader";

import { CreateStackParamList } from "@src/routes/stacks/CreateStack";
import { categoriesData } from "@src/static/CategoriesData";
import {
  BACKGROUND_PRIMARY_COLOR,
  BACKGROUND_SECONDARY_COLOR,
  CONTRAST_COLOR,
  HIGHLIGHT_COLOR,
} from "@src/constants/Colors";
import { useCategories } from "@src/hooks/Create/useCategories";
import { Header } from "@src/components/Header";
import ButtonSave from "./_components/ButtonSave";

type Props = NativeStackScreenProps<CreateStackParamList, "Categories">;

const Categories = ({ route }: Props) => {
  const { fields } = route.params;
  const {
    categories,
    loading,
    widthCategory,
    createNavigation,
    rootNavigation,
    handleSelectCategory,
    handleCreate,
  } = useCategories(fields);

  if (loading) return <Loader />;

  return (
    <ScrollView
      style={styles.container}
      contentContainerStyle={styles.containerContent}
      showsVerticalScrollIndicator={false}
    >
      <Header.Root padding={16}>
        <Header.LeftIcon
          icon={ChevronLeft}
          onPress={() => createNavigation.goBack()}
        />

        <Header.Content title="Criar anúncio" />

        <Header.RightIcon
          icon={X}
          onPress={() => rootNavigation.replace("AppTabs")}
        />
      </Header.Root>

      <View style={styles.containerCategory}>
        <Text style={styles.title}>Escolha as categorias do seu anúncio</Text>

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

      <ButtonSave loading={loading} onPress={handleCreate} />
    </ScrollView>
  );
};

export default Categories;
