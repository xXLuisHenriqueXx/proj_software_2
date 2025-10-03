import { StyleSheet } from "react-native";

import { PRIMARY_COLOR, SECONDARY_COLOR } from "@src/constants/Colors";
import { REGULAR_FONT, SEMIBOLD_FONT } from "@src/constants/Fonts";

export const styles = StyleSheet.create({
  container: {
    flexDirection: "column",
    rowGap: 16,
    width: "100%",
  },
  containerContent: {
    flexDirection: "column",
    rowGap: 32,
    width: "100%",
  },
  containerItem: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    width: "100%",
  },
  containerText: {
    flexDirection: "row",
    alignItems: "center",
    columnGap: 8,
  },
  title: {
    fontSize: 16,
    fontFamily: SEMIBOLD_FONT,
    color: PRIMARY_COLOR,
  },
  itemText: {
    fontSize: 16,
    fontFamily: REGULAR_FONT,
    color: PRIMARY_COLOR,
  },
  emptyText: {
    fontSize: 14,
    fontFamily: REGULAR_FONT,
    color: SECONDARY_COLOR,
  },
});
