import { StyleSheet } from "react-native";

import {
  BACKGROUND_PRIMARY_COLOR,
  HIGHLIGHT_COLOR,
} from "@src/constants/Colors";
import { MEDIUM_FONT } from "@src/constants/Fonts";

export const styles = StyleSheet.create({
  button: {
    position: "absolute",
    bottom: 24,
    alignItems: "center",
    justifyContent: "center",
    width: "100%",
    height: 64,
    borderRadius: 12,
    backgroundColor: HIGHLIGHT_COLOR,
  },
  text: {
    fontSize: 16,
    fontFamily: MEDIUM_FONT,
    color: BACKGROUND_PRIMARY_COLOR,
  },
});
