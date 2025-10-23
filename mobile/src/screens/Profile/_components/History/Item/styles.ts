import { StyleSheet } from "react-native";

import {
  BACKGROUND_SECONDARY_COLOR,
  PRIMARY_COLOR_75,
} from "@src/constants/Colors";
import { SEMIBOLD_FONT } from "@src/constants/Fonts";

export const styles = StyleSheet.create({
  container: {
    flexDirection: "column",
    rowGap: 8,
    width: 128,
    borderRadius: 8,
    overflow: "hidden",
  },
  image: {
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "center",
    width: "100%",
    aspectRatio: 1,
    backgroundColor: BACKGROUND_SECONDARY_COLOR,
  },
  text: {
    fontSize: 14,
    fontFamily: SEMIBOLD_FONT,
    color: PRIMARY_COLOR_75,
    textTransform: "capitalize",
  },
});
