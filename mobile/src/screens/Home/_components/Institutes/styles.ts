import { StyleSheet } from "react-native";

import { HIGHLIGHT_COLOR, PRIMARY_COLOR } from "@src/constants/Colors";
import { MEDIUM_FONT, REGULAR_FONT, SEMIBOLD_FONT } from "@src/constants/Fonts";

export const styles = StyleSheet.create({
  container: {
    flexDirection: "column",
    alignItems: "center",
    rowGap: 16,
  },
  containerHeader: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    width: "100%",
  },
  containerItem: {
    flexDirection: "column",
    alignItems: "center",
    rowGap: 4,
    width: 96,
  },
  title: {
    fontSize: 16,
    fontFamily: SEMIBOLD_FONT,
    color: PRIMARY_COLOR,
  },
  subtitle: {
    fontSize: 14,
    fontFamily: REGULAR_FONT,
    color: PRIMARY_COLOR,
  },
  image: {
    width: 96,
    height: 96,
    borderWidth: 0.25,
    borderColor: HIGHLIGHT_COLOR,
    borderRadius: 12,
  },
  name: {
    fontSize: 12,
    fontFamily: MEDIUM_FONT,
    color: PRIMARY_COLOR,
    textAlign: "center",
  },
});
