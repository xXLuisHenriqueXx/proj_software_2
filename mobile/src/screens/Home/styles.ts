import { StyleSheet } from "react-native";

import {
  BACKGROUND_PRIMARY_COLOR,
  BACKGROUND_SECONDARY_COLOR,
  HIGHLIGHT_COLOR,
  PRIMARY_COLOR,
} from "@src/constants/Colors";
import { BOLD_FONT, MEDIUM_FONT } from "@src/constants/Fonts";
import { statusBarHeight } from "@src/constants/Values";

export const styles = StyleSheet.create({
  container: {
    position: "relative",
    paddingTop: statusBarHeight + 64,
    backgroundColor: BACKGROUND_SECONDARY_COLOR,
  },
  containerHeader: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    width: "100%",
    padding: 24,
  },
  containerContent: {
    flexDirection: "column",
    alignItems: "center",
    rowGap: 32,
    width: "100%",
    height: "100%",
    padding: 24,
    paddingBottom: 192,
    backgroundColor: BACKGROUND_PRIMARY_COLOR,
    borderTopLeftRadius: 24,
    borderTopRightRadius: 24,
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
