import { StyleSheet } from "react-native";

import {
  CONTRAST_COLOR,
  HIGHLIGHT_COLOR,
  PRIMARY_COLOR,
  PRIMARY_COLOR_75,
} from "@src/constants/Colors";
import { MEDIUM_FONT, REGULAR_FONT, SEMIBOLD_FONT } from "@src/constants/Fonts";

export const styles = StyleSheet.create({
  container: {
    borderTopLeftRadius: 24,
    borderTopRightRadius: 24,
    elevation: 30,
    backgroundColor: CONTRAST_COLOR,
    shadowColor: PRIMARY_COLOR,
  },
  containerBottom: {
    position: "relative",
    flex: 1,
    flexDirection: "column",
    alignItems: "center",
    rowGap: 32,
    height: "100%",
    paddingVertical: 16,
    paddingHorizontal: 24,
  },
  containerIcon: {
    flexDirection: "row",
    alignItems: "center",
  },
  containerHeader: {
    flexDirection: "column",
    alignItems: "center",
  },
  containerButtons: {
    flexDirection: "column",
    rowGap: 16,
    width: "100%",
  },
  containerResend: {
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "center",
    width: "100%",
    height: 64,
  },
  buttonResend: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
    width: "100%",
    height: 64,
    borderRadius: 12,
    borderWidth: 1,
    borderColor: HIGHLIGHT_COLOR,
  },
  title: {
    fontSize: 20,
    fontFamily: SEMIBOLD_FONT,
    color: PRIMARY_COLOR,
    textAlign: "center",
  },
  subtitle: {
    fontSize: 14,
    fontFamily: REGULAR_FONT,
    color: PRIMARY_COLOR_75,
    textAlign: "center",
  },
  textResend: {
    fontSize: 16,
    fontFamily: MEDIUM_FONT,
    color: HIGHLIGHT_COLOR,
    textAlign: "center",
  },
});
