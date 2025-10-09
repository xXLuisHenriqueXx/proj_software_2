import { memo, useEffect, useRef, useState } from "react";
import { Image, TouchableOpacity, View } from "react-native";
import { styles } from "./styles";
import { Skeleton } from "moti/skeleton";
import PagerView from "react-native-pager-view";

import { IHighlight } from "@src/common/Entities/Highlight";
import { IToyPicture } from "@src/common/Interfaces/Toy.interface";
import {
  BACKGROUND_SECONDARY_COLOR,
  HIGHLIGHT_COLOR,
  PRIMARY_COLOR_25,
  SECONDARY_COLOR,
} from "@src/constants/Colors";
import { baseURL } from "@src/services/Api";

interface ICarouselProps {
  width: number;
  height: number;
  data: IToyPicture[] | IHighlight[];
}

const Carousel = ({ width, height, data }: ICarouselProps) => {
  const [activeIndex, setActiveIndex] = useState<number>(0);

  const pagerRef = useRef<PagerView>(null);

  const handlePageSelected = (event: any) => {
    const index = event.nativeEvent.position;
    setActiveIndex(index);
  };

  useEffect(() => {
    const interval = setInterval(() => {
      setActiveIndex((prev) => (prev + 1) % data.length);
      pagerRef.current?.setPage((activeIndex + 1) % data.length);
    }, 8000);
    return () => clearInterval(interval);
  }, [activeIndex, data.length]);

  if (!data?.length) {
    return (
      <Skeleton
        width={width}
        height={height}
        colors={[BACKGROUND_SECONDARY_COLOR, SECONDARY_COLOR]}
      />
    );
  }

  return (
    <View style={{ width: "100%" }}>
      <PagerView
        ref={pagerRef}
        style={{ width, height }}
        initialPage={0}
        onPageSelected={handlePageSelected}
      >
        {data.map((item) => {
          const uri =
            item.picture.startsWith("data:image") ||
            item.picture.startsWith("http")
              ? item.picture
              : `${baseURL}${item.picture}`;

          return (
            <TouchableOpacity key={item.id} activeOpacity={0.85}>
              <Image
                style={[styles.image, { width, height }]}
                source={{ uri }}
                resizeMode="cover"
              />
            </TouchableOpacity>
          );
        })}
      </PagerView>

      <View style={styles.containerDots}>
        {data.map((_, index) => (
          <View
            key={index}
            style={[
              styles.dot,
              {
                width: index === activeIndex ? 16 : 6,
                backgroundColor:
                  index === activeIndex ? HIGHLIGHT_COLOR : PRIMARY_COLOR_25,
              },
            ]}
          />
        ))}
      </View>
    </View>
  );
};

export default memo(Carousel);
