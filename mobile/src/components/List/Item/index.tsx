import { memo, useMemo } from "react";
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

const Item = ({ data, widthProduct, handleNavigateToDetail }: IItemProps) => {
  const renderImage = useMemo(() => {
    if (data?.pictures?.[0]?.picture) {
      return (
        <Image
          style={styles.image}
          source={{ uri: data.pictures[0].picture }}
        />
      );
    } else {
      return (
        <View style={styles.image}>
          <CameraOff size={24} color={HIGHLIGHT_COLOR} />
        </View>
      );
    }
  }, [data.pictures]);

  const renderPrice = useMemo(() => {
    if (data.price === 0) {
      return "Gratuito";
    } else {
      return formatCurrency(data.price);
    }
  }, [data.price]);

  return (
    <TouchableOpacity
      style={[styles.container, { width: widthProduct }]}
      activeOpacity={0.85}
      onPress={() => handleNavigateToDetail(data.id)}
    >
      {renderImage}

      <View style={styles.containerInfo}>
        <Text style={styles.textName} numberOfLines={2}>
          {data.name}
        </Text>

        <Text style={styles.textPrice}>{renderPrice}</Text>
      </View>
    </TouchableOpacity>
  );
};

export default memo(Item);
