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
import { Skeleton } from "moti/skeleton";
import { CameraOff, CircleOff } from "lucide-react-native";

import Header from "./Header";
import BackButton from "./BackButton";

import { PropsAppStack } from "@src/routes/stacks/AppStack";
import { IProduct } from "@src/common/Entities/Product";
import { formatCurrency } from "@src/utils/FormatCurrency";
import {
  BACKGROUND_SECONDARY_COLOR,
  HIGHLIGHT_COLOR,
  SECONDARY_COLOR,
} from "@src/constants/Colors";

interface IListProps {
  title?: string;
  subtitile?: string;
  onClose?: () => void;
  data: IProduct[];
}

const List = ({ title, subtitile, data, onClose }: IListProps) => {
  const { width } = useWindowDimensions();
  const navigation = useNavigation<PropsAppStack>();

  const handleNavigateToDetail = (item: IProduct) => {
    navigation.navigate("ProductDetail", { id: item.id });
  };

  const widthProduct = (width - 48 - 24) / 2;

  const hasHeader = title && subtitile;

  return (
    <Skeleton
      width={width - 48}
      height={300}
      colors={[BACKGROUND_SECONDARY_COLOR, SECONDARY_COLOR]}
    >
      {data.length > 0 ? (
        <View style={styles.container}>
          {hasHeader && <Header title={title} subtitile={subtitile} />}
          {onClose && <BackButton onClose={onClose} />}

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
                    <Text style={styles.price}>
                      {item.price === 0
                        ? "Gratuito"
                        : formatCurrency(item.price)}
                    </Text>
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
      ) : null}
    </Skeleton>
  );
};

export default List;
