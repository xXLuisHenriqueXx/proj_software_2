import { View, ScrollView, Text, ActivityIndicator } from "react-native";
import { styles } from "./styles";
import { NativeStackScreenProps } from "@react-navigation/native-stack";

import Pictures from "./_components/Pictures";

import { AppStackParamList } from "@src/routes/stacks/AppStack";
import { formatCurrency } from "@src/utils/FormatCurrency";
import { statusBarHeight } from "@src/constants/Values";
import { HIGHLIGHT_COLOR } from "@src/constants/Colors";
import { getAgeGroup } from "@src/utils/GetAgeGroup";
import { useProductDetail } from "@src/hooks/useProductDetail";

type Props = NativeStackScreenProps<AppStackParamList, "ProductDetail">;

const ProductDetail = ({ route }: Props) => {
  const { id } = route.params || {};
  const { product, loading, characteristicWidth, width } = useProductDetail(id);

  if (!product || loading) {
    return <ActivityIndicator size={64} color={HIGHLIGHT_COLOR} />;
  }

  return (
    <ScrollView
      style={styles.container}
      showsVerticalScrollIndicator={false}
      contentContainerStyle={{
        paddingTop: statusBarHeight,
        paddingBottom: 32,
        rowGap: 48,
      }}
    >
      <Pictures data={product.pictures} width={width} />

      <View style={styles.containerContent}>
        <View>
          <Text style={styles.name} numberOfLines={2}>
            {product.name}
          </Text>
          <Text style={styles.condition}>
            {product.isNew ? "Novo" : "Usado"}
          </Text>
        </View>

        <Text style={styles.price}>{formatCurrency(product.price)}</Text>

        <View style={styles.containerInfo}>
          <Text style={styles.title}>Características</Text>

          <View style={styles.containerCharacteristics}>
            <View
              style={{ flexDirection: "column", width: characteristicWidth }}
            >
              <Text style={styles.subtitle}>Tempo de uso</Text>
              <Text style={styles.text}>{product.usageTime} meses</Text>
            </View>

            <View
              style={{ flexDirection: "column", width: characteristicWidth }}
            >
              <Text style={styles.subtitle}>Condição</Text>
              <Text style={styles.text}>
                {product.isNew ? "Novo" : "Usado"}
              </Text>
            </View>

            <View
              style={{ flexDirection: "column", width: characteristicWidth }}
            >
              <Text style={styles.subtitle}>Proprietário</Text>
              <Text style={styles.text}>{product.owner.name}</Text>
            </View>

            <View
              style={{ flexDirection: "column", width: characteristicWidth }}
            >
              <Text style={styles.subtitle}>Faixa etária</Text>
              <Text style={styles.text}>{getAgeGroup(product.ageGroup)}</Text>
            </View>
          </View>
        </View>

        <View style={styles.containerInfo}>
          <Text style={styles.title}>Descrição</Text>

          <Text style={styles.text}>{product.description}</Text>
        </View>
      </View>
    </ScrollView>
  );
};

export default ProductDetail;
