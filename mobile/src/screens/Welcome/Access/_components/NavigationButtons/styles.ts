import { StyleSheet } from "react-native";

import {
  CONTRAST_COLOR,
  HIGHLIGHT_COLOR,
  PRIMARY_COLOR,
} from "@src/constants/Colors";
import { MEDIUM_FONT } from "@src/constants/Fonts";

export const styles = StyleSheet.create({
  container: {
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
