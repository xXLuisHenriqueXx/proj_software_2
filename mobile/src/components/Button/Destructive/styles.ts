import { StyleSheet } from "react-native";

import { CANCEL_COLOR, CANCEL_COLOR_10 } from "@src/constants/Colors";
import { MEDIUM_FONT } from "@src/constants/Fonts";

export const styles = StyleSheet.create({
  button: {
    alignItems: "center",
    justifyContent: "center",
    width: "100%",
    height: 64,
    borderRadius: 12,
    backgroundColor: CANCEL_COLOR_10,
    overflow: "hidden",
  },
  text: {
    fontSize: 16,
    fontFamily: MEDIUM_FONT,
    color: CANCEL_COLOR,
  },
});
