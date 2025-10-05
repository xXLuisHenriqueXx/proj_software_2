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

import {
  CreateStackParamList,
} from "@src/routes/stacks/CreateStack";
import { categoriesData } from "@src/static/CategoriesData";
import {
  BACKGROUND_PRIMARY_COLOR,
  BACKGROUND_SECONDARY_COLOR,
  CONTRAST_COLOR,
  HIGHLIGHT_COLOR,
  SECONDARY_COLOR,
} from "@src/constants/Colors";
import { useCategories } from "@src/hooks/Create/useCategories";

type Props = NativeStackScreenProps<CreateStackParamList, "Categories">;

const Categories = ({ route }: Props) => {
  const { fields } = route.params;
  const { categories, loading, widthCategory, createNavigation, rootNavigation, handleSelectCategory, handleCreate } = useCategories(fields);
  
  if (loading) return <Loader />

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
        {loading ? (
          <ActivityIndicator size="small" color={CONTRAST_COLOR} />
        ) : (
          <Text style={styles.saveText}>Salvar</Text>
        )}
      </TouchableOpacity>
    </ScrollView>
  );
};

export default Categories;
