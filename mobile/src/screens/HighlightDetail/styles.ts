import { StyleSheet } from "react-native";

import { PRIMARY_COLOR_25, PRIMARY_COLOR_75 } from "@src/constants/Colors";
import { REGULAR_FONT } from "@src/constants/Fonts";

export const styles = StyleSheet.create({
  containerHeader: {
    flexDirection: "column",
    rowGap: 32,
  },
  image: {
    width: "100%",
    height: 240,
    borderRadius: 12,
    borderWidth: 0.5,
    borderColor: PRIMARY_COLOR_25,
  },
  descriptionText: {
    fontSize: 16,
    fontFamily: REGULAR_FONT,
    color: PRIMARY_COLOR_75,
  },
});
