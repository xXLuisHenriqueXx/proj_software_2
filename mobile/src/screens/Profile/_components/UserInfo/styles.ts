import { StyleSheet } from "react-native";

import {
  HIGHLIGHT_COLOR,
  PRIMARY_COLOR,
  PRIMARY_COLOR_75,
} from "@src/constants/Colors";
import { BOLD_FONT, REGULAR_FONT } from "@src/constants/Fonts";

export const styles = StyleSheet.create({
  container: {
    flexDirection: "column",
    alignItems: "center",
    rowGap: 8,
  },
  containerText: {
    flexDirection: "column",
    alignItems: "center",
  },
  picture: {
    alignItems: "center",
    justifyContent: "center",
    width: 128,
    height: 128,
    borderRadius: 64,
    borderWidth: 2,
    borderColor: HIGHLIGHT_COLOR,
  },
  nameText: {
    fontSize: 20,
    fontFamily: BOLD_FONT,
    color: PRIMARY_COLOR,
  },
  emailText: {
    fontSize: 14,
    fontFamily: REGULAR_FONT,
    color: PRIMARY_COLOR_75,
  },
});
