import {
  View,
  Text,
  TouchableOpacity,
  Image,
  useWindowDimensions,
} from "react-native";
import React from "react";
import { ChevronRight } from "lucide-react-native";
import { IProduct } from "@src/common/Entities/Product";

interface IProductProps {
  title: string;
  subtitile: string;
  data: IProduct[];
}

const Products = ({ title, subtitile, data }: IProductProps) => {
  const { width } = useWindowDimensions();

  const formatCurrency = (value: number) => {
    return value.toLocaleString("pt-BR", {
      style: "currency",
      currency: "BRL",
    });
  };

  const widthProduct = (width - 48 - 24) / 2;

  return (
    <View className="flex-col items-center gap-y-4">
      <TouchableOpacity
        className="flex-row items-start justify-between gap-x-2 w-full"
        activeOpacity={0.85}
      >
        <View className="flex-col">
          <Text className="text-lg font-redHatDisplaySemiBold text-primary">
            {title}
          </Text>
          <Text className="text-base font-redHatDisplayRegular text-primary">
            {subtitile}
          </Text>
        </View>

        <ChevronRight size={24} color={"#131313"} />
      </TouchableOpacity>

      <View className="flex-row flex-wrap justify-between gap-y-6">
        {data.map((item, index) => (
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
        ))}
      </View>
    </View>
  );
};

export default Products;
