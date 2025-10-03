import React from "react";
import {
  View,
  Text,
  useWindowDimensions,
  TouchableOpacity,
  Image,
} from "react-native";
import { styles } from "./styles";
import { useNavigation } from "@react-navigation/native";
import { CameraOff, CircleOff } from "lucide-react-native";

import Header from "./Header";

import { PropsAppStack } from "@src/routes/stacks/AppStack";
import { IProduct } from "@src/common/Entities/Product";
import { formatCurrency } from "@src/utils/FormatCurrency";
import { HIGHLIGHT_COLOR } from "@src/constants/Colors";

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
    <View style={styles.container}>
      {hasHeader && <Header title={title} subtitile={subtitile} />}

      {data && data.length > 0 ? (
        <View style={styles.containerContent}>
          {data.map((item, index) => (
            <TouchableOpacity
              key={index}
              style={[styles.container, { width: widthProduct }]}
              activeOpacity={0.85}
              onPress={() => handleNavigateToDetail(item)}
            >
              {item?.pictures?.[0]?.picture ? (
                <Image
                  style={styles.image}
                  source={{ uri: item.pictures[0].picture }}
                />
              ) : (
                <View style={styles.imagePlaceholder}>
                  <CameraOff size={24} color={HIGHLIGHT_COLOR} />
                </View>
              )}

              <View style={styles.containerInfo}>
                <Text style={styles.price}>{formatCurrency(item.price)}</Text>
                <Text style={styles.name} numberOfLines={2}>
                  {item.name}
                </Text>
              </View>
            </TouchableOpacity>
          ))}
        </View>
      ) : (
        <View style={styles.containerNotFound}>
          <CircleOff size={24} color={HIGHLIGHT_COLOR} />
          <Text style={styles.notFound}>Nenhum produto encontrado</Text>
        </View>
      )}
    </View>
  );
};

export default List;
