import { StyleSheet } from "react-native";

import {
  BACKGROUND_PRIMARY_COLOR,
  CONTRAST_COLOR,
  HIGHLIGHT_COLOR,
  PRIMARY_COLOR,
} from "@src/constants/Colors";
import { statusBarHeight } from "@src/constants/Values";
import { MEDIUM_FONT, REGULAR_FONT, SEMIBOLD_FONT } from "@src/constants/Fonts";

export const styles = StyleSheet.create({
  container: {
    position: "relative",
    flex: 1,
    flexDirection: "column",
    alignItems: "center",
    rowGap: 96,
    paddingTop: statusBarHeight + 64,
    backgroundColor: BACKGROUND_PRIMARY_COLOR,
  },
  containerText: {
    flexDirection: "column",
    alignItems: "center",
    rowGap: 8,
    paddingHorizontal: 24,
    textAlign: "center",
  },
  containerButtons: {
    position: "absolute",
    bottom: 0,
    left: 0,
    right: 0,
    flexDirection: "column",
    alignItems: "center",
    rowGap: 24,
    paddingVertical: 32,
    paddingHorizontal: 24,
    backgroundColor: CONTRAST_COLOR,
    borderTopLeftRadius: 24,
    borderTopRightRadius: 24,
    elevation: 30,
    shadowColor: PRIMARY_COLOR,
  },
  image: {
    width: 288,
    height: 288,
  },
  title: {
    textAlign: "center",
    fontSize: 18,
    fontFamily: SEMIBOLD_FONT,
    color: "#131313",
  },
  subtitle: {
    textAlign: "center",
    fontSize: 14,
    fontFamily: REGULAR_FONT,
    color: "#131313",
  },
  buttonLogin: {
    alignItems: "center",
    justifyContent: "center",
    width: "100%",
    height: 64,
    borderRadius: 12,
    backgroundColor: HIGHLIGHT_COLOR,
  },
  buttonRegister: {
    alignItems: "center",
    justifyContent: "center",
    width: "100%",
    height: 64,
  },
  textLogin: {
    fontSize: 16,
    fontFamily: MEDIUM_FONT,
    color: CONTRAST_COLOR,
  },
  textRegister: {
    fontSize: 16,
    fontFamily: MEDIUM_FONT,
    color: HIGHLIGHT_COLOR,
  },
});
