import { StyleSheet } from "react-native";

import {
  BACKGROUND_PRIMARY_COLOR,
  HIGHLIGHT_COLOR,
  PRIMARY_COLOR,
} from "@src/constants/Colors";
import { BOLD_FONT, MEDIUM_FONT } from "@src/constants/Fonts";

export const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    width: "100%",
    padding: 24,
  },
  containerUser: {
    flexDirection: "row",
    alignItems: "center",
    columnGap: 8,
  },
  image: {
    alignItems: "center",
    justifyContent: "center",
    width: 32,
    height: 32,
    backgroundColor: BACKGROUND_PRIMARY_COLOR,
    borderWidth: 0.5,
    borderColor: PRIMARY_COLOR,
    borderRadius: 24,
  },
  title: {
    fontSize: 22,
    fontFamily: MEDIUM_FONT,
    color: PRIMARY_COLOR,
  },
  titleHighlight: {
    fontFamily: BOLD_FONT,
    color: HIGHLIGHT_COLOR,
  },
});
