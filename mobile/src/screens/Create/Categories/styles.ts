import { StyleSheet } from "react-native";

import {
  BACKGROUND_PRIMARY_COLOR,
  CONTRAST_COLOR,
  HIGHLIGHT_COLOR,
  PRIMARY_COLOR,
} from "@src/constants/Colors";
import { REGULAR_FONT, SEMIBOLD_FONT } from "@src/constants/Fonts";
import { statusBarHeight } from "@src/constants/Values";

export const styles = StyleSheet.create({
  container: {
    position: "relative",
    paddingTop: statusBarHeight + 32,
    backgroundColor: BACKGROUND_PRIMARY_COLOR,
  },
  containerHeader: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    width: "100%",
    paddingVertical: 16,
  },
  containerTitle: {
    flexDirection: "row",
    alignItems: "center",
    columnGap: 16,
  },
  containerContent: {
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
  contentTitle: {
    fontSize: 16,
    fontFamily: SEMIBOLD_FONT,
    color: PRIMARY_COLOR,
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
  buttonSave: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
    width: "100%",
    height: 64,
    backgroundColor: HIGHLIGHT_COLOR,
    borderRadius: 12,
  },
  title: {
    fontSize: 22,
    fontFamily: SEMIBOLD_FONT,
    color: PRIMARY_COLOR,
  },
  saveText: {
    fontSize: 16,
    fontFamily: SEMIBOLD_FONT,
    color: CONTRAST_COLOR,
  },
  name: {
    fontSize: 14,
    fontFamily: REGULAR_FONT,
    color: PRIMARY_COLOR,
    textAlign: "center",
  },
});
