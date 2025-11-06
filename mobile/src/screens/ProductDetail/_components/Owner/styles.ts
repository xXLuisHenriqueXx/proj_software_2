import { StyleSheet } from "react-native";

import {
  BACKGROUND_SECONDARY_COLOR,
  HIGHLIGHT_COLOR,
  PRIMARY_COLOR,
  SECONDARY_COLOR,
} from "@src/constants/Colors";
import { REGULAR_FONT } from "@src/constants/Fonts";

export const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    alignItems: "center",
    columnGap: 16,
  },
  image: {
    width: 48,
    height: 48,
    borderWidth: 0.5,
    borderColor: HIGHLIGHT_COLOR,
    borderRadius: 32,
    backgroundColor: BACKGROUND_SECONDARY_COLOR,
  },
  title: {
    fontSize: 16,
    fontFamily: REGULAR_FONT,
    color: SECONDARY_COLOR,
  },
  nameText: {
    fontSize: 14,
    fontFamily: REGULAR_FONT,
    color: PRIMARY_COLOR,
  },
});
