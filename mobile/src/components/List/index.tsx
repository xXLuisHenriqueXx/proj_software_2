import {
  View,
  Text,
  useWindowDimensions,
  TouchableOpacity,
  Image,
} from "react-native";
import React from "react";
import { IProduct } from "@src/common/Entities/Product";
import Header from "./Header";

interface IProductProps {
  title?: string;
  subtitile?: string;
  data: IProduct[];
  limit: number;
}

const List = ({ title, subtitile, data, limit }: IProductProps) => {
  const { width } = useWindowDimensions();

  const formatCurrency = (value: number) => {
    return value.toLocaleString("pt-BR", {
      style: "currency",
      currency: "BRL",
    });
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
            >
              <Image
                source={{ uri: item.src }}
                className="w-full aspect-square rounded-xl"
              />

              <View className="flex-col gap-y-2">
                <Text className="text-base font-redHatDisplayBold text-primary">
                  {formatCurrency(item.price)}
                </Text>
                <View className="flex-col gap-x-1">
                  <Text className="text-base font-redHatDisplayRegular text-primary">
                    {item.name}
                  </Text>
                  <Text className="text-sm font-redHatDisplayRegular text-primary/60">
                    {item.manufacturer}
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
