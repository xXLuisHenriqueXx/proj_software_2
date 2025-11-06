import { View, TouchableOpacity } from "react-native";
import { styles } from "./styles";
import { ChevronLeft, Heart, Share2 } from "lucide-react-native";

import Carousel from "@src/components/Carousel";

import { HIGHLIGHT_COLOR } from "@src/constants/Colors";
import { IToyPicture } from "@src/common/Interfaces/Toy.interface";
import { memo } from "react";
import { useAppNavigation } from "@src/hooks/useAppNavigation";
import Toast from "react-native-toast-message";
import { favoriteService } from "@src/services/FavoriteService";

interface IPicturesProps {
  data: IToyPicture[];
  id: string;
  width: number;
  isFavorited: boolean;
  setIsFavorited: (value: boolean) => void;
}

const Pictures = ({
  data,
  id,
  width,
  isFavorited,
  setIsFavorited,
}: IPicturesProps) => {
  const { appNavigation } = useAppNavigation();

  const handleAddFavorite = async () => {
    try {
      if (!isFavorited) {
        await favoriteService.add({ toyId: id });
        setIsFavorited(true);
      } else {
        await favoriteService.delete({ toyId: id });
        setIsFavorited(false);
      }
    } catch (error: any) {
      Toast.show({
        type: "error",
        text1: "Aviso",
        text2: error.message || "Erro ao adicionar aos favoritos",
      });
    }
  };

  return (
    <View style={{ position: "relative" }}>
      <TouchableOpacity
        style={styles.buttonTopLeft}
        onPress={() => appNavigation.goBack()}
        activeOpacity={0.85}
      >
        <ChevronLeft size={20} color={HIGHLIGHT_COLOR} />
      </TouchableOpacity>

      <TouchableOpacity
        style={styles.buttonTopRight}
        onPress={() => appNavigation.goBack()}
        activeOpacity={0.85}
      >
        <Share2 size={20} color={HIGHLIGHT_COLOR} />
      </TouchableOpacity>

      <TouchableOpacity
        style={styles.buttonBottomRight}
        onPress={handleAddFavorite}
        activeOpacity={0.85}
      >
        <Heart
          size={20}
          color={HIGHLIGHT_COLOR}
          fill={isFavorited ? HIGHLIGHT_COLOR : "transparent"}
        />
      </TouchableOpacity>

      <Carousel data={data} width={width} height={320} />
    </View>
  );
};

export default memo(Pictures);
