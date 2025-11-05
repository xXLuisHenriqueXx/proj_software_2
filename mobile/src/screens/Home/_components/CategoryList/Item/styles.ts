import { StyleSheet } from "react-native";

import { PRIMARY_COLOR } from "@src/constants/Colors";
import { MEDIUM_FONT } from "@src/constants/Fonts";

export const styles = StyleSheet.create({
  container: {
    flexDirection: "column",
    alignItems: "center",
    rowGap: 4,
    width: 64,
  },
  text: {
    fontSize: 12,
    fontFamily: MEDIUM_FONT,
    color: PRIMARY_COLOR,
    textAlign: "center",
  },
});
