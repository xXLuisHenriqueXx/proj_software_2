import { StyleSheet } from "react-native";

import { HIGHLIGHT_COLOR, PRIMARY_COLOR } from "@src/constants/Colors";
import { BOLD_FONT, MEDIUM_FONT } from "@src/constants/Fonts";

export const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    width: "100%",
    padding: 24,
  },
  title: {
    fontSize: 22,
    fontFamily: MEDIUM_FONT,
    color: PRIMARY_COLOR,
  },
  titleHighlight: {
    fontFamily: BOLD_FONT,
    color: HIGHLIGHT_COLOR,
  },
});
