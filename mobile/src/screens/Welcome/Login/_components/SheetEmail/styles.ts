import { StyleSheet } from "react-native";

import {
  CONTRAST_COLOR,
  PRIMARY_COLOR,
  PRIMARY_COLOR_75,
} from "@src/constants/Colors";
import { REGULAR_FONT, SEMIBOLD_FONT } from "@src/constants/Fonts";

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
  },
  title: {
    fontSize: 20,
    fontFamily: SEMIBOLD_FONT,
    color: PRIMARY_COLOR,
    textAlign: "center",
  },
  subtitle: {
    fontSize: 14,
    fontFamily: REGULAR_FONT,
    color: PRIMARY_COLOR_75,
    textAlign: "center",
  },
});
