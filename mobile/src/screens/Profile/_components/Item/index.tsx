import { View, Text, Pressable, Image, TouchableOpacity } from "react-native";
import { styles } from "./styles";
import { CameraOff, Ellipsis } from "lucide-react-native";

import {
  BACKGROUND_PRIMARY_COLOR,
  BACKGROUND_SECONDARY_COLOR,
  HIGHLIGHT_COLOR,
} from "@src/constants/Colors";
import { useAppNavigation } from "@src/hooks/useAppNavigation";
import { IProduct } from "@src/common/Entities/Product";
import { IHistory } from "@src/common/Entities/History";
import { useMemo } from "react";

interface IItemProps {
  data: IProduct | IHistory;
  onOptionsPress: () => void;
}

const Item = ({ data, onOptionsPress }: IItemProps) => {
  const { appNavigation } = useAppNavigation();

  const isHistory = "toy" in data;
  const product = isHistory ? data.toy : data;

  const uri = product.pictures[0]?.picture;

  const onPress = () =>
    appNavigation.navigate("ProductDetail", { id: data.id });

  const renderImage = useMemo(() => {
    if (product.pictures.length === 0) {
      return (
        <View style={styles.image}>
          <CameraOff size={24} color={HIGHLIGHT_COLOR} />
        </View>
      );
    } else {
      return <Image style={styles.image} source={{ uri }} />;
    }
  }, [product.pictures]);

  return (
    <Pressable
      style={styles.container}
      android_ripple={{
        color: BACKGROUND_SECONDARY_COLOR,
        borderless: false,
        foreground: true,
      }}
      onPress={onPress}
      onLongPress={onOptionsPress}
    >
      <Pressable
        style={styles.button}
        onPress={(e) => {
          e.stopPropagation();
          onOptionsPress?.();
        }}
      >
        <Ellipsis size={20} color={HIGHLIGHT_COLOR} />
      </Pressable>

      {renderImage}

      <Text style={styles.text} numberOfLines={2}>
        {product.name}
      </Text>
    </Pressable>
  );
};

export default Item;
