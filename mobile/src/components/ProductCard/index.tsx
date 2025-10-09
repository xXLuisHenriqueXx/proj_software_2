import { memo } from "react";
import { Image, Text, TouchableOpacity, View } from "react-native";
import { styles } from "./styles";
import { CameraOff } from "lucide-react-native";

import { HIGHLIGHT_COLOR } from "@src/constants/Colors";
import { formatCurrency } from "@src/utils/FormatCurrency";
import { IProduct } from "@src/common/Entities/Product";

interface IProductCardProps {
  item: IProduct;
  widthProduct: number;
  handleNavigateToDetail: (id: string) => void;
}

const ProductCard = ({
  item,
  widthProduct,
  handleNavigateToDetail,
}: IProductCardProps) => (
  <TouchableOpacity
    style={[styles.container, { width: widthProduct }]}
    activeOpacity={0.85}
    onPress={() => handleNavigateToDetail(item.id)}
  >
    {item?.pictures?.[0]?.picture ? (
      <Image style={styles.image} source={{ uri: item.pictures[0].picture }} />
    ) : (
      <View style={styles.image}>
        <CameraOff size={24} color={HIGHLIGHT_COLOR} />
      </View>
    )}

    <View style={styles.containerInfo}>
      <Text style={styles.textName} numberOfLines={2}>
        {item.name}
      </Text>

      <Text style={styles.textPrice}>
        {item.price === 0 ? "Gratuito" : formatCurrency(item.price)}
      </Text>
    </View>
  </TouchableOpacity>
);

export default memo(ProductCard);
