import { StyleSheet } from "react-native";

import { HIGHLIGHT_COLOR, PRIMARY_COLOR } from "@src/constants/Colors";
import { SEMIBOLD_FONT } from "@src/constants/Fonts";

export const styles = StyleSheet.create({
  container: {
    flexDirection: "column",
    alignItems: "flex-start",
    rowGap: 16,
  },
  containerContent: {
    flexDirection: "column",
    rowGap: 24,
    width: "100%",
  },
  button: {
    flexDirection: "row",
    alignItems: "center",
    columnGap: 8,
    width: "100%",
  },
  containerCheckbox: {
    alignItems: "center",
    justifyContent: "center",
    width: 24,
    height: 24,
    borderWidth: 1,
    borderColor: HIGHLIGHT_COLOR,
  },
  checkbox: {
    alignItems: "center",
    justifyContent: "center",
    width: 16,
    height: 16,
    backgroundColor: HIGHLIGHT_COLOR,
  },
  title: {
    fontSize: 16,
    fontFamily: SEMIBOLD_FONT,
    color: PRIMARY_COLOR,
  },
  text: {
    fontSize: 14,
    fontFamily: SEMIBOLD_FONT,
    color: PRIMARY_COLOR,
  },
});
