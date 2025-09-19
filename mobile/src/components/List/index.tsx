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
import { CameraOff } from "lucide-react-native";

interface IProductProps {
  title?: string;
  subtitile?: string;
  data: IProduct[];
}

const List = ({ title, subtitile, data }: IProductProps) => {
  const { width } = useWindowDimensions();
  const navigation = useNavigation<PropsAppStack>();

  const handleNavigateToDetail = (item: IProduct) => {
    navigation.navigate("ProductDetail", { product: item });
  };

  const widthProduct = (width - 48 - 24) / 2;

  const hasHeader = title && subtitile;

  return (
    <View className="flex-col gap-y-4">
      {hasHeader && <Header title={title} subtitile={subtitile} />}

      <View className="flex-row flex-wrap justify-between gap-y-6">
        {data.map((item, index) => {
          return (
            <TouchableOpacity
              key={index}
              className="flex-col gap-y-4"
              style={{ width: widthProduct }}
              activeOpacity={0.85}
              onPress={() => handleNavigateToDetail(item)}
            >
              {item?.pictures?.[0]?.picture ? (
                <Image
                  source={{ uri: item.pictures[0].picture }}
                  className="w-full aspect-square rounded-xl"
                />
              ) : (
                <View className="flex-col items-center justify-center w-full aspect-square rounded-xl bg-backgroundSecondary">
                  <CameraOff size={24} color={"#316A41"} />
                </View>
              )}

              <View className="flex-col gap-y-1">
                <Text className="text-base font-redHatDisplayBold text-primary">
                  {formatCurrency(item.price)}
                </Text>
                <Text
                  className="text-base font-redHatDisplayRegular text-primary"
                  numberOfLines={2}
                >
                  {item.name}
                </Text>
              </View>
            </TouchableOpacity>
          );
        })}
      </View>
    </View>
  );
};

export default List;
