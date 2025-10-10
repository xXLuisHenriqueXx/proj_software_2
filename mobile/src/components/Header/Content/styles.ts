import { StyleSheet } from "react-native";

import { PRIMARY_COLOR, PRIMARY_COLOR_75 } from "@src/constants/Colors";
import { REGULAR_FONT, SEMIBOLD_FONT } from "@src/constants/Fonts";

export const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  titleSmall: {
    fontSize: 16,
    fontFamily: SEMIBOLD_FONT,
    color: PRIMARY_COLOR,
  },
  titleBig: {
    fontSize: 22,
    fontFamily: SEMIBOLD_FONT,
    color: PRIMARY_COLOR,
  },
  subtitle: {
    fontSize: 14,
    fontFamily: REGULAR_FONT,
    color: PRIMARY_COLOR_75,
  },
});
