import { useState } from "react";
import {
  Image,
  NativeScrollEvent,
  NativeSyntheticEvent,
  ScrollView,
  TouchableOpacity,
  View,
} from "react-native";

interface ICarouselProps {
  width: number;
  height: number;
  data: any[];
}

const Carousel = ({ width, height, data }: ICarouselProps) => {
  const [activeIndex, setActiveIndex] = useState<number>(0);
  const handleScroll = (event: NativeSyntheticEvent<NativeScrollEvent>) => {
    const { contentOffset, layoutMeasurement } = event.nativeEvent;

    const index = Math.round(contentOffset.x / layoutMeasurement.width);
    setActiveIndex(index);
  };

  const numberOfItems = data.length;

  return (
    <View className="w-full">
      <ScrollView
        contentContainerStyle={{ columnGap: 24 }}
        horizontal
        showsHorizontalScrollIndicator={false}
        pagingEnabled
        snapToAlignment="center"
        onScroll={handleScroll}
        scrollEventThrottle={16}
      >
        {data.map((item, index) => (
          <TouchableOpacity key={index} activeOpacity={0.85}>
            <Image
              className="flex-col items-center justify-center border border-primary/5 rounded-xl"
              style={{ width, height }}
              source={{ uri: item.src }}
              resizeMode="cover"
            />
          </TouchableOpacity>
        ))}
      </ScrollView>

      <View className="flex-row items-center justify-center gap-x-1 mt-2">
        {Array(numberOfItems)
          .fill(null)
          .map((_, index) => (
            <View
              key={index}
              className={`h-1.5 rounded-full ${
                activeIndex === index
                  ? "w-3 bg-highlight"
                  : "w-1.5 bg-highlight/30"
              }`}
            />
          ))}
      </View>
    </View>
  );
};

export default Carousel;
