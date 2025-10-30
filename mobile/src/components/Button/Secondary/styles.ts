import { StyleSheet } from "react-native";

import {
  BACKGROUND_SECONDARY_COLOR,
  HIGHLIGHT_COLOR,
} from "@src/constants/Colors";
import { MEDIUM_FONT } from "@src/constants/Fonts";

export const styles = StyleSheet.create({
  button: {
    alignItems: "center",
    justifyContent: "center",
    width: "100%",
    height: 64,
    backgroundColor: BACKGROUND_SECONDARY_COLOR,
    borderRadius: 12,
    overflow: "hidden",
  },
  text: {
    fontSize: 16,
    fontFamily: MEDIUM_FONT,
    color: HIGHLIGHT_COLOR,
  },
});
