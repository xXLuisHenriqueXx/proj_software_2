import { StyleSheet } from "react-native";

import {
  CONTRAST_COLOR,
  HIGHLIGHT_COLOR,
  PRIMARY_COLOR,
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
    rowGap: 4,
    textAlign: "center",
  },
  containerButtons: {
    flexDirection: "column",
    rowGap: 16,
    width: "100%",
  },
  containerInput: {
    position: "relative",
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
    width: "100%",
    height: 64,
    paddingHorizontal: 16,
    borderWidth: 1,
    borderColor: HIGHLIGHT_COLOR,
    borderRadius: 12,
  },
  containerResend: {
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "center",
    width: "100%",
    height: 64,
  },
  input: {
    flex: 1,
    fontSize: 14,
    fontFamily: REGULAR_FONT,
    color: PRIMARY_COLOR,
  },
  buttonSend: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
    width: "100%",
    height: 64,
    borderRadius: 12,
    backgroundColor: HIGHLIGHT_COLOR,
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
    fontSize: 22,
    fontFamily: SEMIBOLD_FONT,
    color: PRIMARY_COLOR,
  },
  subtitle: {
    fontSize: 16,
    fontFamily: REGULAR_FONT,
    color: PRIMARY_COLOR,
  },
  textLabel: {
    position: "absolute",
    top: -12,
    left: 16,
    paddingHorizontal: 8,
    backgroundColor: CONTRAST_COLOR,
    fontSize: 12,
    fontFamily: MEDIUM_FONT,
    color: HIGHLIGHT_COLOR,
  },
  textSend: {
    fontSize: 16,
    fontFamily: MEDIUM_FONT,
    color: CONTRAST_COLOR,
  },
  textResend: {
    fontSize: 16,
    fontFamily: MEDIUM_FONT,
    color: HIGHLIGHT_COLOR,
    textAlign: "center",
  },
});
