import { StyleSheet } from "react-native";

import {
  BACKGROUND_PRIMARY_COLOR,
  HIGHLIGHT_COLOR,
  PRIMARY_COLOR,
} from "@src/constants/Colors";
import { MEDIUM_FONT, REGULAR_FONT } from "@src/constants/Fonts";

export const styles = StyleSheet.create({
  container: {
    width: "100%",
    paddingTop: 12,
  },
  containerInputGroup: {
    flexDirection: "row",
    alignItems: "center",
    columnGap: 8,
  },
  containerInput: {
    position: "relative",
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
    height: 64,
    paddingHorizontal: 16,
    borderWidth: 1,
    borderColor: HIGHLIGHT_COLOR,
    borderRadius: 12,
  },
  line: {
    width: "100%",
    borderWidth: 1,
    borderColor: HIGHLIGHT_COLOR,
    borderStyle: "dashed",
  },
  labelText: {
    position: "absolute",
    top: -12,
    left: 16,
    paddingHorizontal: 8,
    backgroundColor: BACKGROUND_PRIMARY_COLOR,
    fontSize: 12,
    fontFamily: MEDIUM_FONT,
    color: HIGHLIGHT_COLOR,
  },
  input: {
    flex: 1,
    fontSize: 14,
    fontFamily: REGULAR_FONT,
    color: PRIMARY_COLOR,
  },
});
