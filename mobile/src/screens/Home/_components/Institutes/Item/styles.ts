import { StyleSheet } from "react-native";

import { PRIMARY_COLOR, PRIMARY_COLOR_25 } from "@src/constants/Colors";
import { MEDIUM_FONT } from "@src/constants/Fonts";

export const styles = StyleSheet.create({
  container: {
    flexDirection: "column",
    alignItems: "center",
    rowGap: 4,
    width: 96,
  },
  image: {
    width: 96,
    height: 96,
    borderRadius: 8,
    borderWidth: 0.5,
    borderColor: PRIMARY_COLOR_25,
  },
  text: {
    fontSize: 12,
    fontFamily: MEDIUM_FONT,
    color: PRIMARY_COLOR,
    textAlign: "center",
  },
});
