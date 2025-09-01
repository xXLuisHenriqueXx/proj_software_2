import { highlightScrollData } from "@src/static/HighlightScrollData";
import { useState } from "react";
import {
  View,
  NativeSyntheticEvent,
  NativeScrollEvent,
  ScrollView,
  useWindowDimensions,
  TouchableOpacity,
  Image,
} from "react-native";

const HighlightScroll = () => {
  const { width } = useWindowDimensions();
  const [activeIndex, setActiveIndex] = useState<number>(0);

  const handleScroll = (event: NativeSyntheticEvent<NativeScrollEvent>) => {
    const { contentOffset, layoutMeasurement } = event.nativeEvent;

    const index = Math.round(contentOffset.x / layoutMeasurement.width);
    setActiveIndex(index);
  };

  const widthHighlight = width - 48;
  const numberOfHighlights = highlightScrollData.length;

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
        {highlightScrollData.map((item, index) => (
          <TouchableOpacity
            key={index}
            activeOpacity={0.85}
            onPress={item.action}
          >
            <Image
              className="flex-col items-center justify-center h-60 border border-primary/5 rounded-xl"
              source={{ uri: item.src }}
              resizeMode="cover"
              style={{ width: widthHighlight }}
            />
          </TouchableOpacity>
        ))}
      </ScrollView>

      <View className="flex-row items-center justify-center gap-x-1 mt-2">
        {Array(numberOfHighlights)
          .fill(null)
          .map((_, index) => (
            <View
              key={index}
              className={`w-1.5 h-1.5 rounded-full ${
                activeIndex === index ? "bg-highlight" : "bg-highlight/30"
              }`}
            />
          ))}
      </View>
    </View>
  );
};

export default HighlightScroll;
