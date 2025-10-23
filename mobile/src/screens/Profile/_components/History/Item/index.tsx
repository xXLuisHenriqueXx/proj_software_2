import { View, Text, Pressable, Image } from "react-native";
import { styles } from "./styles";
import Animated, {
  useAnimatedStyle,
  useSharedValue,
  withTiming,
} from "react-native-reanimated";
import { CameraOff } from "lucide-react-native";

import { HIGHLIGHT_COLOR } from "@src/constants/Colors";
import { useAppNavigation } from "@src/hooks/useAppNavigation";
import { IProduct } from "@src/common/Entities/Product";
import { IHistory } from "@src/common/Entities/History";

interface IItemProps {
  data: IHistory;
  setOpenSheet: () => void;
  setSelectedID: (value: string) => void;
}

const Item = ({ data, setOpenSheet, setSelectedID }: IItemProps) => {
  const { appNavigation } = useAppNavigation();

  const uri = data.toy.pictures[0] && data.toy.pictures[0].picture;

  const scale = useSharedValue(1);

  const animatedStyle = useAnimatedStyle(() => {
    return {
      transform: [{ scale: scale.value }],
    };
  });

  const onPressIn = () => {
    scale.value = withTiming(0.975, { duration: 100 });
  };

  const onPressOut = () => {
    scale.value = withTiming(1, { duration: 100 });
  };

  const onPress = () => {
    appNavigation.navigate("ProductDetail", { id: data.id });
  };

  const onLongPress = () => {
    setOpenSheet();
    setSelectedID(data.id);
  };

  return (
    <Pressable
      onPressIn={onPressIn}
      onPressOut={onPressOut}
      onPress={onPress}
      onLongPress={onLongPress}
    >
      <Animated.View style={[styles.container, animatedStyle]}>
        {data.toy.pictures.length === 0 ? (
          <View style={styles.image}>
            <CameraOff size={24} color={HIGHLIGHT_COLOR} />
          </View>
        ) : (
          <Image style={styles.image} source={{ uri }} />
        )}

        <Text style={styles.text} numberOfLines={2}>
          {data.toy.name}
        </Text>
      </Animated.View>
    </Pressable>
  );
};

export default Item;
