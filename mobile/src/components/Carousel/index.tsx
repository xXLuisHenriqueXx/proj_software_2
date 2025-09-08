import { useState } from "react";
import {
  Image,
  NativeScrollEvent,
  NativeSyntheticEvent,
  ScrollView,
  TouchableOpacity,
  View,
} from "react-native";

import { IProduct } from "@src/common/Entities/Product";

interface ICarouselProps {
  width: number;
  height: number;
  data: any[];
}

const normalizeData = (data: any[]): string[] => {
  if (!data || data.length === 0) return [];

  if (typeof data[0] === "string") return data as string[];

  if ("src" in data[0]) return data.map((item: { src: string }) => item.src);

  if ("images" in data[0])
    return (data as IProduct[]).map((item) => item.images[0]);

  return [];
};

const Carousel = ({ width, height, data }: ICarouselProps) => {
  const [activeIndex, setActiveIndex] = useState<number>(0);

  const images = normalizeData(data);

  const handleScroll = (event: NativeSyntheticEvent<NativeScrollEvent>) => {
    const { contentOffset, layoutMeasurement } = event.nativeEvent;

    const index = Math.round(contentOffset.x / layoutMeasurement.width);
    setActiveIndex(index);
  };

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
        {images.map((uri, index) => (
          <TouchableOpacity key={index} activeOpacity={0.85}>
            <Image
              className="flex-col items-center justify-center border border-primary/5 rounded-xl"
              style={{ width, height }}
              source={{ uri }}
              resizeMode="cover"
            />
          </TouchableOpacity>
        ))}
      </ScrollView>

      <View className="flex-row items-center justify-center gap-x-1 mt-2">
        {images.map((_, index) => (
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
