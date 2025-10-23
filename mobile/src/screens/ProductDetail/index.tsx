import { View, ScrollView, Text, Image } from "react-native";
import { styles } from "./styles";
import { NativeStackScreenProps } from "@react-navigation/native-stack";

import Pictures from "./_components/Pictures";
import Loader from "@src/components/Loader";

import { AppStackParamList } from "@src/routes/stacks/AppStack";
import { formatCurrency } from "@src/utils/FormatCurrency";
import { getAgeGroup } from "@src/utils/GetAgeGroup";
import { useProductDetail } from "@src/hooks/useProductDetail";
import { baseURL } from "@src/services/Api";

type Props = NativeStackScreenProps<AppStackParamList, "ProductDetail">;

const ProductDetail = ({ route }: Props) => {
  const { id } = route.params || {};
  const { product, loading, characteristicWidth, width } = useProductDetail(id);

  if (!product || loading) {
    return <Loader />;
  }

  return (
    <ScrollView
      style={styles.container}
      showsVerticalScrollIndicator={false}
      contentContainerStyle={styles.containerScroll}
    >
      <Pictures data={product.pictures} id={product.id} width={width} />

      <View style={styles.containerContent}>
        <View>
          <Text style={styles.textName} numberOfLines={2}>
            {product.name}
          </Text>
          <Text style={styles.textCondition}>
            {product.isNew ? "Novo" : "Usado"}
          </Text>
        </View>

        <Text style={styles.textPrice}>
          {product.price === 0 ? "Gratuito" : formatCurrency(product.price)}
        </Text>

        <View style={styles.containerInfo}>
          <Text style={styles.title}>Características</Text>

          <View style={styles.containerCharacteristics}>
            <View style={{ width: characteristicWidth }}>
              <Text style={styles.subtitle}>Tempo de uso</Text>
              <Text style={styles.text}>{product.usageTime} meses</Text>
            </View>

            <View style={{ width: characteristicWidth }}>
              <Text style={styles.subtitle}>Condição</Text>
              <Text style={styles.text}>
                {product.isNew ? "Novo" : "Usado"}
              </Text>
            </View>

            <View
              style={[styles.containerOwner, { width: characteristicWidth }]}
            >
              <Image
                style={styles.image}
                source={{
                  uri:
                    product.owner.picture.startsWith("data:image") ||
                    product.owner.picture.startsWith("http")
                      ? product.owner.picture
                      : `${baseURL}${product.owner.picture}`,
                }}
                resizeMode="contain"
              />

              <View>
                <Text style={styles.subtitle}>Proprietário</Text>
                <Text style={styles.text}>{product.owner.name}</Text>
              </View>
            </View>

            <View style={{ width: characteristicWidth }}>
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
