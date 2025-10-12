import { StyleSheet } from "react-native";

import {
  BACKGROUND_PRIMARY_COLOR,
  HIGHLIGHT_COLOR,
  PRIMARY_COLOR,
} from "@src/constants/Colors";
import { REGULAR_FONT, SEMIBOLD_FONT } from "@src/constants/Fonts";
import { STATUS_BAR_HEIGHT } from "@src/constants/Values";

export const styles = StyleSheet.create({
  container: {
    position: "relative",
    paddingTop: STATUS_BAR_HEIGHT + 32,
    backgroundColor: BACKGROUND_PRIMARY_COLOR,
  },
  containerContent: {
    paddingBottom: 124,
    rowGap: 48,
    paddingHorizontal: 24,
  },
  containerCategory: {
    flexDirection: "column",
    alignItems: "flex-start",
    rowGap: 16,
  },
  containerList: {
    flexDirection: "row",
    flexWrap: "wrap",
    justifyContent: "space-between",
    gap: 16,
    width: "100%",
  },
  containerItem: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    paddingHorizontal: 16,
    paddingVertical: 24,
    borderWidth: 0.5,
    borderColor: HIGHLIGHT_COLOR,
    borderRadius: 12,
  },
  title: {
    fontSize: 16,
    fontFamily: SEMIBOLD_FONT,
    color: PRIMARY_COLOR,
  },
  name: {
    fontSize: 14,
    fontFamily: REGULAR_FONT,
    color: PRIMARY_COLOR,
    textAlign: "center",
  },
});
