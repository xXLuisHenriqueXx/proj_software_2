import { View, ScrollView, Text } from "react-native";
import { styles } from "./styles";
import { NativeStackScreenProps } from "@react-navigation/native-stack";

import { Button } from "@src/components/Button";
import Pictures from "./_components/Pictures";
import Loader from "@src/components/Loader";
import Owner from "./_components/Owner";

import { AppStackParamList } from "@src/routes/stacks/AppStack";
import { formatCurrency } from "@src/utils/FormatCurrency";
import { getAgeGroup } from "@src/utils/GetAgeGroup";
import { useProductDetail } from "@src/hooks/useProductDetail";
import { useAppNavigation } from "@src/hooks/useAppNavigation";
import { chatService } from "@src/services/ChatService";
import useAuth from "@src/hooks/useAuth";

type Props = NativeStackScreenProps<AppStackParamList, "ProductDetail">;

const ProductDetail = ({ route }: Props) => {
  const { id } = route.params || {};
  const { user } = useAuth();
  const { appNavigation } = useAppNavigation();
  const { product, loading, characteristicWidth, width } = useProductDetail(id);

  const isOwner = product?.owner.id === user?.id;

  const handleCreateChat = async () => {
    if (!product) return;

    const response = await chatService.create({ userId: product?.owner.id });

    if (response?.status !== 201) return;

    alert("Chat criado com sucesso!");

    appNavigation.navigate("AppTabs", { screen: "Chats" });
  };

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

        {isOwner ? (
          <Button.Primary
            text="Editar produto"
            onPress={() =>
              appNavigation.navigate("UpdateProduct", { id: product.id })
            }
          />
        ) : (
          <>
            <Owner owner={product.owner} />

            <Button.Primary
              text="Conversar com o proprietário"
              onPress={handleCreateChat}
            />
          </>
        )}
      </View>
    </ScrollView>
  );
};

export default ProductDetail;
