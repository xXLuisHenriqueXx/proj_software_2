import { StyleSheet } from "react-native";

import {
  BACKGROUND_PRIMARY_COLOR,
  BACKGROUND_SECONDARY_COLOR,
  HIGHLIGHT_COLOR,
  PRIMARY_COLOR,
  SECONDARY_COLOR,
} from "@src/constants/Colors";
import { MEDIUM_FONT, REGULAR_FONT, SEMIBOLD_FONT } from "@src/constants/Fonts";
import { STATUS_BAR_HEIGHT } from "@src/constants/Values";

export const styles = StyleSheet.create({
  container: {
    position: "relative",
    paddingTop: STATUS_BAR_HEIGHT + 32,
    backgroundColor: BACKGROUND_SECONDARY_COLOR,
  },
  containerHeader: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    width: "100%",
    paddingVertical: 16,
  },
  containerContent: {
    flexDirection: "column",
    alignItems: "flex-start",
    rowGap: 16,
  },
  containerSelectGroup: {
    flexDirection: "column",
    alignItems: "center",
    rowGap: 16,
    width: "100%",
  },
  containerFree: {
    flexDirection: "column",
    rowGap: 8,
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
  containerTextArea: {
    position: "relative",
    flexDirection: "row",
    alignItems: "flex-start",
    justifyContent: "flex-start",
    height: 192,
    padding: 16,
    borderWidth: 1,
    borderColor: HIGHLIGHT_COLOR,
    borderRadius: 12,
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
  containerList: {
    flexDirection: "column",
    rowGap: 16,
    width: "100%",
  },
  buttonNext: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
    width: "100%",
    height: 64,
    backgroundColor: HIGHLIGHT_COLOR,
    borderRadius: 12,
  },
  checkboxActive: {
    alignItems: "center",
    justifyContent: "center",
    width: 24,
    height: 24,
    borderWidth: 1,
    borderColor: HIGHLIGHT_COLOR,
  },
  checkboxInactive: {
    alignItems: "center",
    justifyContent: "center",
    width: 24,
    height: 24,
    borderWidth: 1,
    borderColor: HIGHLIGHT_COLOR,
  },
  checkboxContent: {
    width: 16,
    height: 16,
    backgroundColor: HIGHLIGHT_COLOR,
  },
  input: {
    flex: 1,
    fontSize: 14,
    fontFamily: REGULAR_FONT,
    color: PRIMARY_COLOR,
  },
  line: {
    width: "33%",
    height: 1,
    backgroundColor: SECONDARY_COLOR,
  },
  title: {
    fontSize: 22,
    fontFamily: SEMIBOLD_FONT,
    color: PRIMARY_COLOR,
  },
  contentTitle: {
    fontSize: 16,
    fontFamily: SEMIBOLD_FONT,
    color: PRIMARY_COLOR,
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
  labelText: {
    position: "absolute",
    top: -8,
    left: 16,
    paddingHorizontal: 8,
    backgroundColor: BACKGROUND_SECONDARY_COLOR,
    fontSize: 12,
    fontFamily: MEDIUM_FONT,
    color: HIGHLIGHT_COLOR,
  },
  infoText: {
    fontSize: 14,
    fontFamily: REGULAR_FONT,
    color: SECONDARY_COLOR,
    marginLeft: 16,
  },
  orText: {
    fontSize: 14,
    fontFamily: REGULAR_FONT,
    color: PRIMARY_COLOR,
  },
  nextText: {
    fontSize: 16,
    fontFamily: SEMIBOLD_FONT,
    color: BACKGROUND_PRIMARY_COLOR,
  },
});
