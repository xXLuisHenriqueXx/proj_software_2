import { StyleSheet } from "react-native";

import {
  BACKGROUND_PRIMARY_COLOR,
  HIGHLIGHT_COLOR,
  PRIMARY_COLOR,
  PRIMARY_COLOR_25,
  SECONDARY_COLOR,
} from "@src/constants/Colors";
import { REGULAR_FONT } from "@src/constants/Fonts";
import { STATUS_BAR_HEIGHT, WIDTH } from "@src/constants/Values";

export const styles = StyleSheet.create({
  container: {
    position: "relative",
    paddingTop: STATUS_BAR_HEIGHT + 32,
    backgroundColor: BACKGROUND_PRIMARY_COLOR,
  },
  containerContent: {
    rowGap: 48,
    paddingBottom: 124,
    paddingHorizontal: 24,
  },
  containerSelectGroup: {
    flexDirection: "column",
    alignItems: "center",
    rowGap: 16,
    width: "100%",
  },
  containerOr: {
    flexDirection: "row",
    alignItems: "center",
    columnGap: 16,
  },
  containerInputGroup: {
    flexDirection: "column",
    rowGap: 8,
  },
  containerCheckboxes: {
    flexDirection: "column",
    alignItems: "center",
    rowGap: 16,
    width: "100%",
  },
  containerCheckbox: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    width: "100%",
  },
  containerCheckboxText: {
    flexDirection: "column",
    rowGap: 4,
  },
  line: {
    width: WIDTH / 2 - 48,
    height: 1,
    backgroundColor: PRIMARY_COLOR_25,
  },
  checkboxTitle: {
    fontSize: 14,
    fontFamily: REGULAR_FONT,
    color: PRIMARY_COLOR,
  },
  checkboxSubtitle: {
    fontSize: 12,
    fontFamily: REGULAR_FONT,
    color: SECONDARY_COLOR,
  },
  infoText: {
    fontSize: 14,
    fontFamily: REGULAR_FONT,
    color: SECONDARY_COLOR,
    marginLeft: 16,
  },
  orText: {
    fontSize: 12,
    fontFamily: REGULAR_FONT,
    color: PRIMARY_COLOR,
  },
});
