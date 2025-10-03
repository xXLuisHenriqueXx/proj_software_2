import { StyleSheet } from "react-native";

import { PRIMARY_COLOR, SECONDARY_COLOR } from "@src/constants/Colors";
import { REGULAR_FONT, SEMIBOLD_FONT } from "@src/constants/Fonts";

export const styles = StyleSheet.create({
  container: {
    flexDirection: "column",
    alignItems: "center",
    rowGap: 8,
    paddingHorizontal: 24,
    textAlign: "center",
  },
  title: {
    textAlign: "center",
    fontSize: 18,
    fontFamily: SEMIBOLD_FONT,
    color: PRIMARY_COLOR,
  },
  subtitle: {
    textAlign: "center",
    fontSize: 14,
    fontFamily: REGULAR_FONT,
    color: SECONDARY_COLOR,
  },
});
