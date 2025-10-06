import { View, TouchableOpacity } from "react-native";
import { styles } from "./styles";
import { useNavigation } from "@react-navigation/native";
import { ChevronLeft, Heart, Share2 } from "lucide-react-native";

import Carousel from "@src/components/Carousel";

import { PropsAppStack } from "@src/routes/stacks/AppStack";
import { HIGHLIGHT_COLOR } from "@src/constants/Colors";
import { IToyPicture } from "@src/common/Interfaces/Toy.interface";
import { memo } from "react";

interface IPicturesProps {
  data: IToyPicture[];
  width: number;
}

const Pictures = ({ data, width }: IPicturesProps) => {
  const navigation = useNavigation<PropsAppStack>();

  return (
    <View style={{ position: "relative" }}>
      <TouchableOpacity
        style={styles.buttonTopLeft}
        onPress={() => navigation.goBack()}
        activeOpacity={0.85}
      >
        <ChevronLeft size={20} color={HIGHLIGHT_COLOR} />
      </TouchableOpacity>

      <TouchableOpacity
        style={styles.buttonTopRight}
        onPress={() => navigation.goBack()}
        activeOpacity={0.85}
      >
        <Share2 size={20} color={HIGHLIGHT_COLOR} />
      </TouchableOpacity>

      <TouchableOpacity
        style={styles.buttonBottomRight}
        onPress={() => navigation.goBack()}
        activeOpacity={0.85}
      >
        <Heart size={20} color={HIGHLIGHT_COLOR} />
      </TouchableOpacity>

      <Carousel data={data} width={width} height={320} />
    </View>
  );
};

export default memo(Pictures);
