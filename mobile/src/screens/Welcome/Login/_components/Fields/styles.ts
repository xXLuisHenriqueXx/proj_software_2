import { StyleSheet } from "react-native";

import { HIGHLIGHT_COLOR } from "@src/constants/Colors";
import { MEDIUM_FONT } from "@src/constants/Fonts";

export const styles = StyleSheet.create({
  container: {
    width: "100%",
    paddingTop: 12,
  },
  containerContent: {
    rowGap: 32,
    paddingBottom: 120,
  },
  textForgot: {
    width: "100%",
    marginTop: -16,
    fontSize: 14,
    fontFamily: MEDIUM_FONT,
    color: HIGHLIGHT_COLOR,
    textAlign: "right",
    textDecorationLine: "underline",
  },
});
