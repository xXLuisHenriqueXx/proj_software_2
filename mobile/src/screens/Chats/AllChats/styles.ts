import { StyleSheet } from "react-native";

import {
  BACKGROUND_PRIMARY_COLOR,
  BACKGROUND_SECONDARY_COLOR,
  HIGHLIGHT_COLOR,
  PRIMARY_COLOR,
} from "@src/constants/Colors";
import { STATUS_BAR_HEIGHT } from "@src/constants/Values";
import { REGULAR_FONT, SEMIBOLD_FONT } from "@src/constants/Fonts";

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    rowGap: 48,
    paddingTop: STATUS_BAR_HEIGHT + 32,
    paddingBottom: 120,
    paddingHorizontal: 24,
    backgroundColor: BACKGROUND_PRIMARY_COLOR,
  },
  containerContent: {
    rowGap: 24,
  },
  containerNotFound: {
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "center",
    rowGap: 16,
    width: "100%",
    padding: 24,
    borderRadius: 12,
  },
  containerItem: {
    flexDirection: "row",
    alignItems: "center",
    columnGap: 8,
  },
  image: {
    width: 44,
    height: 44,
    backgroundColor: BACKGROUND_SECONDARY_COLOR,
    borderRadius: 22,
    borderWidth: 1,
    borderColor: HIGHLIGHT_COLOR,
  },
  textNotFound: {
    fontSize: 16,
    fontFamily: SEMIBOLD_FONT,
    color: PRIMARY_COLOR,
  },
  textName: {
    fontSize: 14,
    fontFamily: REGULAR_FONT,
    color: PRIMARY_COLOR,
  },
  textMessage: {
    fontSize: 12,
    fontFamily: REGULAR_FONT,
    color: PRIMARY_COLOR,
  },
});
