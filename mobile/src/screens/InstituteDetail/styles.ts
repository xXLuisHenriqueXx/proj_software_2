import { StyleSheet } from "react-native";

import {
  BACKGROUND_PRIMARY_COLOR,
  HIGHLIGHT_COLOR,
  PRIMARY_COLOR,
  PRIMARY_COLOR_25,
  SECONDARY_COLOR,
} from "@src/constants/Colors";
import { REGULAR_FONT, SEMIBOLD_FONT } from "@src/constants/Fonts";
import { STATUS_BAR_HEIGHT } from "@src/constants/Values";

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: BACKGROUND_PRIMARY_COLOR,
  },
  containerScroll: {
    rowGap: 16,
    paddingTop: STATUS_BAR_HEIGHT + 32,
    paddingBottom: 32,
    paddingHorizontal: 24,
  },
  containerContent: {
    flexDirection: "column",
    rowGap: 32,
    width: "100%",
  },
  containerInfo: {
    flexDirection: "column",
    rowGap: 16,
  },
  containerText: {
    flexDirection: "column",
    rowGap: 4,
  },
  containerMap: {
    width: "100%",
    height: 240,
    borderRadius: 12,
    borderWidth: 0.5,
    borderColor: PRIMARY_COLOR_25,
    overflow: "hidden",
  },
  image: {
    width: 124,
    height: 124,
    borderRadius: 12,
    borderWidth: 0.5,
    borderColor: PRIMARY_COLOR_25,
  },
  buttonSite: {
    backgroundColor: BACKGROUND_PRIMARY_COLOR,
    borderWidth: 1,
    borderColor: HIGHLIGHT_COLOR,
    borderRadius: 12,
  },
  textName: {
    fontSize: 22,
    fontFamily: SEMIBOLD_FONT,
    color: PRIMARY_COLOR,
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
