import { memo } from "react";
import { Image, Text, TouchableOpacity, View } from "react-native";
import { styles } from "./styles";
import { CameraOff } from "lucide-react-native";

import { HIGHLIGHT_COLOR } from "@src/constants/Colors";
import { formatCurrency } from "@src/utils/FormatCurrency";
import { IProduct } from "@src/common/Entities/Product";

interface IItemProps {
  data: IProduct;
  widthProduct: number;
  handleNavigateToDetail: (id: string) => void;
}

const Item = ({ data, widthProduct, handleNavigateToDetail }: IItemProps) => (
  <TouchableOpacity
    style={[styles.container, { width: widthProduct }]}
    activeOpacity={0.85}
    onPress={() => handleNavigateToDetail(data.id)}
  >
    {data?.pictures?.[0]?.picture ? (
      <Image style={styles.image} source={{ uri: data.pictures[0].picture }} />
    ) : (
      <View style={styles.image}>
        <CameraOff size={24} color={HIGHLIGHT_COLOR} />
      </View>
    )}

    <View style={styles.containerInfo}>
      <Text style={styles.textName} numberOfLines={2}>
        {data.name}
      </Text>

      <Text style={styles.textPrice}>
        {data.price === 0 ? "Gratuito" : formatCurrency(data.price)}
      </Text>
    </View>
  </TouchableOpacity>
);

export default memo(Item);
