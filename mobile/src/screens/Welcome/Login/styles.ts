import { StyleSheet } from "react-native";

import { statusBarHeight } from "@src/constants/Values";
import {
  BACKGROUND_PRIMARY_COLOR,
  CONTRAST_COLOR,
  HIGHLIGHT_COLOR,
  PRIMARY_COLOR,
} from "@src/constants/Colors";
import { MEDIUM_FONT, SEMIBOLD_FONT } from "@src/constants/Fonts";

export const styles = StyleSheet.create({
  container: {
    position: "relative",
    flex: 1,
    flexDirection: "column",
    alignItems: "center",
    rowGap: 32,
    paddingTop: statusBarHeight + 32,
    paddingHorizontal: 24,
    backgroundColor: BACKGROUND_PRIMARY_COLOR,
  },
  containerHeader: {
    flexDirection: "row",
    alignItems: "center",
    columnGap: 16,
    width: "100%",
    paddingVertical: 16,
  },
  title: {
    fontSize: 22,
    fontFamily: SEMIBOLD_FONT,
    color: PRIMARY_COLOR,
  },
  buttonLogin: {
    position: "absolute",
    bottom: 24,
    alignItems: "center",
    justifyContent: "center",
    width: "100%",
    height: 64,
    borderRadius: 12,
    backgroundColor: HIGHLIGHT_COLOR,
  },
  textLogin: {
    fontSize: 16,
    fontFamily: MEDIUM_FONT,
    color: CONTRAST_COLOR,
  },
});
