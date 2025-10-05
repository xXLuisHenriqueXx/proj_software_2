import { useState } from "react";
import {
  Image,
  NativeScrollEvent,
  NativeSyntheticEvent,
  ScrollView,
  TouchableOpacity,
  View,
} from "react-native";
import { styles } from "./styles";
import { Skeleton } from "moti/skeleton";

import { IHighlight } from "@src/common/Entities/Highlight";
import { IToyPicture } from "@src/common/Interfaces/Toy.interface";
import {
  BACKGROUND_SECONDARY_COLOR,
  HIGHLIGHT_COLOR,
  SECONDARY_COLOR,
} from "@src/constants/Colors";

interface ICarouselProps {
  width: number;
  height: number;
  data: IToyPicture[] | IHighlight[];
}

const Carousel = ({ width, height, data }: ICarouselProps) => {
  const [activeIndex, setActiveIndex] = useState<number>(0);

  const handleScroll = (event: NativeSyntheticEvent<NativeScrollEvent>) => {
    const { contentOffset, layoutMeasurement } = event.nativeEvent;

    const index = Math.round(contentOffset.x / layoutMeasurement.width);
    setActiveIndex(index);
  };

  return (
    <Skeleton
      width={width}
      height={height}
      colors={[BACKGROUND_SECONDARY_COLOR, SECONDARY_COLOR]}
    >
      {data.length > 0 ? (
        <View style={{ width: "100%" }}>
          <ScrollView
            contentContainerStyle={{ columnGap: 24 }}
            horizontal
            showsHorizontalScrollIndicator={false}
            pagingEnabled
            snapToAlignment="center"
            onScroll={handleScroll}
            scrollEventThrottle={16}
          >
            {data.map((item) => (
              <TouchableOpacity key={item.id} activeOpacity={0.85}>
                <Image
                  style={[styles.image, { width, height }]}
                  source={{
                    uri: item.picture,
                  }}
                  resizeMode="cover"
                />
              </TouchableOpacity>
            ))}
          </ScrollView>

          <View style={styles.containerDots}>
            {data.map((_, index) => (
              <View
                key={index}
                style={[
                  styles.dot,
                  {
                    width: index === activeIndex ? 16 : 6,
                    backgroundColor:
                      index === activeIndex ? HIGHLIGHT_COLOR : SECONDARY_COLOR,
                  },
                ]}
              />
            ))}
          </View>
        </View>
      ) : null}
    </Skeleton>
  );
};

export default Carousel;
