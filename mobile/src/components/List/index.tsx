import React from "react";
import {
  View,
  Text,
  useWindowDimensions,
  TouchableOpacity,
  Image,
} from "react-native";
import { useNavigation } from "@react-navigation/native";
import { PropsAppStack } from "@src/routes/stacks/AppStack";

import Header from "./Header";

import { IProduct } from "@src/common/Entities/Product";
import { formatCurrency } from "@src/utils/FormatCurrency";

interface IProductProps {
  title?: string;
  subtitile?: string;
  data: IProduct[];
  limit: number;
}

const List = ({ title, subtitile, data, limit }: IProductProps) => {
  const { width } = useWindowDimensions();
  const navigation = useNavigation<PropsAppStack>();

  const handleNavigateToDetail = (item: IProduct) => {
    navigation.navigate("ProductDetail", { product: item });
  };

  const widthProduct = (width - 48 - 24) / 2;

  const hasHeader = title && subtitile;

  return (
    <View className="flex-col items-center gap-y-4">
      {hasHeader && <Header title={title} subtitile={subtitile} />}

      <View className="flex-row flex-wrap justify-between gap-y-6">
        {data.map((item, index) => {
          if (index >= limit) return null;

          return (
            <TouchableOpacity
              key={index}
              className="flex-col gap-y-4"
              style={{ width: widthProduct }}
              activeOpacity={0.85}
              onPress={() => handleNavigateToDetail(item)}
            >
              <Image
                source={{ uri: item.images[0] }}
                className="w-full aspect-square rounded-xl"
              />

              <View className="flex-col gap-y-2">
                <Text className="text-base font-redHatDisplayBold text-primary">
                  {formatCurrency(item.price)}
                </Text>
                <View className="flex-col gap-x-1">
                  <Text
                    className="text-base font-redHatDisplayRegular text-primary"
                    numberOfLines={2}
                  >
                    {item.name}
                  </Text>
                  <Text className="text-sm font-redHatDisplayRegular text-primary/60">
                    {item.brand}
                  </Text>
                </View>
              </View>
            </TouchableOpacity>
          );
        })}
      </View>
    </View>
  );
};

export default List;
