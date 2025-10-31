import { memo, useCallback, useEffect, useMemo, useRef, useState } from "react";
import { Image, TouchableOpacity, View, ViewStyle } from "react-native";
import { styles } from "./styles";
import PagerView, {
  PagerViewOnPageSelectedEvent,
} from "react-native-pager-view";

import LoaderSkeleton from "../LoaderSkeleton";
import Dots from "./Dots";

import { IHighlight } from "@src/common/Entities/Highlight";
import { IToyPicture } from "@src/common/Interfaces/Toy.interface";
import { baseURL } from "@src/services/Api";

interface ICarouselProps {
  width: number;
  height: number;
  data: IToyPicture[] | IHighlight[];
  autoScrollInterval?: number;
  style?: ViewStyle;
}

const Carousel = ({
  width,
  height,
  data,
  autoScrollInterval = 8000,
  style,
}: ICarouselProps) => {
  const [activeIndex, setActiveIndex] = useState<number>(0);

  const pagerRef = useRef<PagerView>(null);

  if (!data?.length) {
    return <LoaderSkeleton width={width} height={height} />;
  }

  const dataLength = data.length;

  const imageUris = useMemo(
    () =>
      data.map((item) =>
        item.picture.startsWith("data:image") || item.picture.startsWith("http")
          ? item.picture
          : `${baseURL}${item.picture}`
      ),
    [data]
  );

  const handlePageSelected = useCallback(
    (event: PagerViewOnPageSelectedEvent) => {
      setActiveIndex(event.nativeEvent.position);
    },
    []
  );
  useEffect(() => {
    if (dataLength <= 1) return;

    const id = setInterval(() => {
      setActiveIndex((prev) => {
        const next = (prev + 1) % dataLength;
        pagerRef.current?.setPage(next);
        return next;
      });
    }, autoScrollInterval);

    return () => clearInterval(id);
  }, [dataLength, autoScrollInterval]);

  return (
    <View style={[styles.container, style]}>
      <PagerView
        ref={pagerRef}
        style={{ width, height }}
        initialPage={0}
        onPageSelected={handlePageSelected}
        overScrollMode={"never"}
      >
        {imageUris.map((uri, index) => (
          <TouchableOpacity key={data[index].id} activeOpacity={0.85}>
            <Image
              style={[styles.image, { width, height }]}
              source={{ uri }}
              resizeMode="cover"
            />
          </TouchableOpacity>
        ))}
      </PagerView>

      <Dots length={dataLength} activeIndex={activeIndex} />
    </View>
  );
};

export default memo(Carousel);
