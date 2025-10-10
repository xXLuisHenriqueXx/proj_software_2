import { StyleSheet } from "react-native";

import { HIGHLIGHT_COLOR, PRIMARY_COLOR } from "@src/constants/Colors";
import { MEDIUM_FONT } from "@src/constants/Fonts";

export const styles = StyleSheet.create({
  container: {
    flexDirection: "column",
    alignItems: "center",
    rowGap: 4,
    width: 64,
  },
  image: {
    alignItems: "center",
    justifyContent: "center",
    width: 64,
    height: 64,
    borderRadius: 48,
    backgroundColor: HIGHLIGHT_COLOR,
  },
  text: {
    fontSize: 12,
    fontFamily: MEDIUM_FONT,
    color: PRIMARY_COLOR,
    textAlign: "center",
  },
});
