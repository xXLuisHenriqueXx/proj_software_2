import { StyleSheet } from "react-native";

import {
  BACKGROUND_SECONDARY_COLOR,
  PRIMARY_COLOR,
} from "@src/constants/Colors";
import { REGULAR_FONT, SEMIBOLD_FONT } from "@src/constants/Fonts";
import { WIDTH } from "@src/constants/Values";

export const styles = StyleSheet.create({
  container: {
    flexDirection: "column",
    rowGap: 16,
    width: "100%",
  },
  containerContent: {
    flexDirection: "row",
    flexWrap: "wrap",
    justifyContent: "space-between",
    gap: 16,
    width: "100%",
  },
  containerItem: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    width: (WIDTH - 48 - 16) / 2,
    paddingHorizontal: 16,
    paddingVertical: 24,
    backgroundColor: BACKGROUND_SECONDARY_COLOR,
    borderRadius: 12,
  },
  title: {
    fontSize: 16,
    fontFamily: SEMIBOLD_FONT,
    color: PRIMARY_COLOR,
  },
  text: {
    fontSize: 14,
    fontFamily: REGULAR_FONT,
    color: PRIMARY_COLOR,
    textAlign: "center",
  },
});
