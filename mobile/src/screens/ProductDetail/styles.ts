import { StyleSheet } from "react-native";

import {
  BACKGROUND_PRIMARY_COLOR,
  HIGHLIGHT_COLOR,
  PRIMARY_COLOR,
  SECONDARY_COLOR,
} from "@src/constants/Colors";
import { BOLD_FONT, REGULAR_FONT, SEMIBOLD_FONT } from "@src/constants/Fonts";
import { statusBarHeight } from "@src/constants/Values";

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
    rowGap: 8,
  },
  containerScroll: {
    paddingTop: statusBarHeight,
    paddingBottom: 32,
    rowGap: 48,
  },
  containerCharacteristics: {
    flexDirection: "row",
    flexWrap: "wrap",
    justifyContent: "space-between",
    rowGap: 24,
    width: "100%",
  },
  containerOwner: {
    flexDirection: "row",
    alignItems: "center",
    columnGap: 8,
  },
  image: {
    width: 32,
    height: 32,
    borderWidth: 0.5,
    borderColor: HIGHLIGHT_COLOR,
    borderRadius: 32,
  },
  title: {
    fontSize: 18,
    fontFamily: SEMIBOLD_FONT,
    color: PRIMARY_COLOR,
  },
  subtitle: {
    fontSize: 16,
    fontFamily: REGULAR_FONT,
    color: SECONDARY_COLOR,
  },
  text: {
    fontSize: 14,
    fontFamily: REGULAR_FONT,
    color: PRIMARY_COLOR,
  },
  name: {
    fontSize: 22,
    fontFamily: SEMIBOLD_FONT,
    color: PRIMARY_COLOR,
  },
  condition: {
    fontSize: 14,
    fontFamily: REGULAR_FONT,
    color: SECONDARY_COLOR,
  },
  price: {
    fontSize: 28,
    fontFamily: BOLD_FONT,
    color: HIGHLIGHT_COLOR,
  },
});
