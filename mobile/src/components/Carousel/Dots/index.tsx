import { useMemo } from "react";
import { View } from "react-native";
import { styles } from "./styles";

import { HIGHLIGHT_COLOR, PRIMARY_COLOR_25 } from "@src/constants/Colors";

interface IDotsProps {
  length: number;
  activeIndex: number;
}

const Dots = ({ length, activeIndex }: IDotsProps) => {
  const dotsArray = Array.from({ length });

  return (
    <View style={styles.container}>
      {dotsArray.map((_, index) => {
        const isActive = index === activeIndex;
        const dotStyle = useMemo(
          () => [
            styles.dot,
            {
              width: isActive ? 16 : 6,
              backgroundColor: isActive ? HIGHLIGHT_COLOR : PRIMARY_COLOR_25,
            },
          ],
          [isActive]
        );

        return <View key={index} style={dotStyle} />;
      })}
    </View>
  );
};

export default Dots;
