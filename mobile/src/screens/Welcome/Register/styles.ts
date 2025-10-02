import { StyleSheet } from "react-native";

import {
  BACKGROUND_PRIMARY_COLOR,
  CONTRAST_COLOR,
  HIGHLIGHT_COLOR,
  PRIMARY_COLOR,
} from "@src/constants/Colors";
import { statusBarHeight } from "@src/constants/Values";
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
  containerTypes: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
    columnGap: 8,
    width: "100%",
    padding: 8,
    borderWidth: 1,
    borderColor: PRIMARY_COLOR,
    borderRadius: 12,
  },
  title: {
    fontSize: 22,
    fontFamily: SEMIBOLD_FONT,
    color: PRIMARY_COLOR,
  },
  buttonType: {
    flex: 1,
    alignItems: "center",
    paddingVertical: 8,
    borderRadius: 8,
  },
  buttonNext: {
    position: "absolute",
    bottom: 24,
    alignItems: "center",
    justifyContent: "center",
    width: "100%",
    height: 64,
    borderRadius: 12,
    backgroundColor: HIGHLIGHT_COLOR,
  },
  textType: {
    fontSize: 16,
    fontFamily: MEDIUM_FONT,
  },
  textNext: {
    fontSize: 16,
    fontFamily: MEDIUM_FONT,
    color: CONTRAST_COLOR,
  },
});
