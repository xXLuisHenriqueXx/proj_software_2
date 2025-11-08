import { StyleSheet } from "react-native";

import {
  BACKGROUND_PRIMARY_COLOR,
  BACKGROUND_SECONDARY_COLOR,
  PRIMARY_COLOR_75,
} from "@src/constants/Colors";
import { SEMIBOLD_FONT } from "@src/constants/Fonts";

export const styles = StyleSheet.create({
  container: {
    position: "relative",
    flexDirection: "column",
    rowGap: 8,
    width: 128,
    paddingBottom: 16,
    borderRadius: 8,
    overflow: "hidden",
  },
  button: {
    position: "absolute",
    top: 8,
    right: 8,
    padding: 8,
    backgroundColor: BACKGROUND_PRIMARY_COLOR,
    borderRadius: 8,
    zIndex: 1,
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
