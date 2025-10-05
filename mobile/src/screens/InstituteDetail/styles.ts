import { StyleSheet } from "react-native";

import {
  BACKGROUND_PRIMARY_COLOR,
  HIGHLIGHT_COLOR,
  PRIMARY_COLOR,
  SECONDARY_COLOR,
} from "@src/constants/Colors";
import { MEDIUM_FONT, REGULAR_FONT, SEMIBOLD_FONT } from "@src/constants/Fonts";

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: BACKGROUND_PRIMARY_COLOR,
  },
  containerContent: {
    flexDirection: "column",
    rowGap: 24,
    paddingHorizontal: 24,
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
  containerCharacteristics: {
    flexDirection: "row",
    flexWrap: "wrap",
    justifyContent: "space-between",
    columnGap: 16,
    rowGap: 32,
  },
  containerBigText: {
    position: "relative",
    flexDirection: "column",
    width: "100%",
  },
  image: {
    width: 112,
    height: 112,
    borderRadius: 12,
  },
  map: {
    width: "100%",
    height: 240,
    borderRadius: 12,
    overflow: "hidden",
  },
  buttonCopy: {
    alignItems: "center",
    justifyContent: "center",
    width: "100%",
    height: 64,
    backgroundColor: HIGHLIGHT_COLOR,
    borderRadius: 12,
  },
  iconCopy: {
    position: "absolute",
    right: 16,
  },
  textCopy: {
    fontSize: 14,
    fontFamily: MEDIUM_FONT,
    color: BACKGROUND_PRIMARY_COLOR,
  },
  name: {
    fontSize: 22,
    fontFamily: SEMIBOLD_FONT,
    color: PRIMARY_COLOR,
  },
  ageRange: {
    fontSize: 14,
    fontFamily: REGULAR_FONT,
    color: SECONDARY_COLOR,
  },
  description: {
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
