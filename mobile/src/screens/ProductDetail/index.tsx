import {
  View,
  ScrollView,
  useWindowDimensions,
  TouchableOpacity,
  Text,
} from "react-native";
import { useNavigation } from "@react-navigation/native";
import { NativeStackScreenProps } from "@react-navigation/native-stack";
import Constants from "expo-constants";
import { ArrowLeft, Heart, Share2 } from "lucide-react-native";

import Carousel from "@src/components/Carousel";

import { AppStackParamList, PropsAppStack } from "@src/routes/stacks/AppStack";
import { formatCurrency } from "@src/utils/FormatCurrency";

type Props = NativeStackScreenProps<AppStackParamList, "ProductDetail">;

const ProductDetail = ({ route }: Props) => {
  const { product } = route.params || {};
  const { width } = useWindowDimensions();

  const navigation = useNavigation<PropsAppStack>();
  const statusBarHeight = Constants.statusBarHeight;

  const characteristicWidth = (width - 48 - 16) / 2;

  return (
    <ScrollView
      className="flex-1 bg-backgroundPrimary"
      showsVerticalScrollIndicator={false}
      contentContainerStyle={{
        paddingTop: statusBarHeight,
        paddingBottom: 32,
        rowGap: 48,
      }}
    >
      <View className="relative">
        <TouchableOpacity
          className="absolute top-6 left-6 p-4 bg-backgroundPrimary rounded-xl z-10"
          onPress={() => navigation.goBack()}
          activeOpacity={0.85}
        >
          <ArrowLeft size={20} color={"#316A41"} />
        </TouchableOpacity>

        <TouchableOpacity
          className="absolute top-6 right-6 p-4 bg-backgroundPrimary rounded-xl z-10"
          onPress={() => navigation.goBack()}
          activeOpacity={0.85}
        >
          <Share2 size={20} color={"#316A41"} />
        </TouchableOpacity>

        <TouchableOpacity
          className="absolute -bottom-2 right-6 p-4 bg-backgroundPrimary rounded-xl z-10"
          onPress={() => navigation.goBack()}
          activeOpacity={0.85}
        >
          <Heart size={20} color={"#316A41"} />
        </TouchableOpacity>

        <Carousel data={product.images} width={width} height={320} />
      </View>

      <View className="flex-col gap-y-6 px-6 w-full">
        <View className="flex-col gap-y-1">
          <Text
            className="text-2xl font-redHatDisplaySemiBold text-primary"
            numberOfLines={2}
          >
            {product.name}
          </Text>
          <Text className="text-base font-redHatDisplayRegular text-primary/60">
            {product.condition}
          </Text>
        </View>

        <Text className="text-3xl font-redHatDisplaySemiBold text-highlight">
          {formatCurrency(product.price)}
        </Text>

        <View className="flex-col gap-y-2">
          <Text className="text-xl font-redHatDisplaySemiBold text-primary">
            Características
          </Text>

          <View className="flex-row flex-wrap justify-between gap-4 w-full">
            <View className="flex-col" style={{ width: characteristicWidth }}>
              <Text className="text-lg font-redHatDisplayRegular text-primary/60">
                Tamanho
              </Text>
              <Text className="text-lg font-redHatDisplayRegular text-primary">
                {product.size}
              </Text>
            </View>

            <View className="flex-col" style={{ width: characteristicWidth }}>
              <Text className="text-lg font-redHatDisplayRegular text-primary/60">
                Condição
              </Text>
              <Text className="text-lg font-redHatDisplayRegular text-primary">
                {product.condition}
              </Text>
            </View>

            <View className="flex-col" style={{ width: characteristicWidth }}>
              <Text className="text-lg font-redHatDisplayRegular text-primary/60">
                Marca
              </Text>
              <Text className="text-lg font-redHatDisplayRegular text-primary">
                {product.brand}
              </Text>
            </View>

            <View className="flex-col" style={{ width: characteristicWidth }}>
              <Text className="text-lg font-redHatDisplayRegular text-primary/60">
                Faixa etária
              </Text>
              <Text className="text-lg font-redHatDisplayRegular text-primary">
                {product.ageRange}
              </Text>
            </View>
          </View>
        </View>

        <View className="flex-col gap-y-2">
          <Text className="text-xl font-redHatDisplaySemiBold text-primary">
            Descrição
          </Text>

          <Text className="text-lg font-redHatDisplayRegular text-primary">
            {product.description}
          </Text>
        </View>
      </View>
    </ScrollView>
  );
};

export default ProductDetail;
