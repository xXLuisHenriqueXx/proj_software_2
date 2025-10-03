import { StyleSheet } from "react-native";

import { REGULAR_FONT, SEMIBOLD_FONT } from "@src/constants/Fonts";
import { HIGHLIGHT_COLOR, PRIMARY_COLOR } from "@src/constants/Colors";

export const styles = StyleSheet.create({
  container: {
    flexDirection: "column",
    rowGap: 16,
    width: "100%",
  },
  containerContent: {
    flexDirection: "row",
    flexWrap: "wrap",
    gap: 12,
    width: "100%",
  },
  title: {
    fontSize: 16,
    fontFamily: SEMIBOLD_FONT,
    color: PRIMARY_COLOR,
  },
  text: {
    paddingHorizontal: 12,
    paddingVertical: 4,
    borderRadius: 6,
    borderWidth: 0.25,
    borderColor: HIGHLIGHT_COLOR,
    fontSize: 14,
    fontFamily: REGULAR_FONT,
    color: PRIMARY_COLOR,
  },
});
