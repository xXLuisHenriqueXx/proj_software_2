import { StyleSheet } from "react-native";

import {
  BACKGROUND_PRIMARY_COLOR,
  HIGHLIGHT_COLOR,
  PRIMARY_COLOR,
  SECONDARY_COLOR,
} from "@src/constants/Colors";
import { MEDIUM_FONT, REGULAR_FONT, SEMIBOLD_FONT } from "@src/constants/Fonts";
import { STATUS_BAR_HEIGHT } from "@src/constants/Values";

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: BACKGROUND_PRIMARY_COLOR,
    paddingHorizontal: 24,
  },
  containerContent: {
    flexDirection: "column",
    rowGap: 24,
    width: "100%",
  },
  containerInfo: {
    flexDirection: "column",
    rowGap: 16,
  },
  containerScroll: {
    paddingTop: STATUS_BAR_HEIGHT + 32,
    paddingBottom: 32,
    rowGap: 48,
  },
  containerText: {
    flexDirection: "column",
    rowGap: 4,
  },
  containerCharacteristics: {
    position: "relative",
    flexDirection: "column",
    justifyContent: "space-between",
    columnGap: 16,
    rowGap: 32,
  },
  containerMap: {
    width: "100%",
    height: 240,
    borderRadius: 12,
    overflow: "hidden",
  },
  image: {
    width: 112,
    height: 112,
    borderRadius: 12,
  },
  icon: {
    position: "absolute",
    right: 16,
  },
  buttonCopy: {
    alignItems: "center",
    justifyContent: "center",
    width: "100%",
    height: 64,
    backgroundColor: HIGHLIGHT_COLOR,
    borderRadius: 12,
  },
  buttonSite: {
    alignItems: "center",
    justifyContent: "center",
    width: "100%",
    height: 64,
    borderWidth: 1,
    borderColor: HIGHLIGHT_COLOR,
    borderRadius: 12,
  },
  textCopy: {
    fontSize: 14,
    fontFamily: MEDIUM_FONT,
    color: BACKGROUND_PRIMARY_COLOR,
  },
  textSite: {
    fontSize: 14,
    fontFamily: MEDIUM_FONT,
    color: HIGHLIGHT_COLOR,
  },
  textName: {
    fontSize: 22,
    fontFamily: SEMIBOLD_FONT,
    color: PRIMARY_COLOR,
  },
  textAgeRange: {
    fontSize: 14,
    fontFamily: REGULAR_FONT,
    color: SECONDARY_COLOR,
  },
  textDescription: {
    fontSize: 16,
    fontFamily: REGULAR_FONT,
    color: PRIMARY_COLOR,
  },
  title: {
    fontSize: 16,
    fontFamily: SEMIBOLD_FONT,
    color: PRIMARY_COLOR,
  },
  subtitle: {
    fontSize: 14,
    fontFamily: REGULAR_FONT,
    color: SECONDARY_COLOR,
  },
});
