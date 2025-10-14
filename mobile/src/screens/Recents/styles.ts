import { StyleSheet } from "react-native";

import { BACKGROUND_PRIMARY_COLOR, PRIMARY_COLOR } from "@src/constants/Colors";
import { SEMIBOLD_FONT } from "@src/constants/Fonts";
import { STATUS_BAR_HEIGHT } from "@src/constants/Values";

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: BACKGROUND_PRIMARY_COLOR,
  },
  containerHeader: {
    flexDirection: "column",
    rowGap: 32,
  },
  containerContent: {
    alignItems: "stretch",
    rowGap: 16,
    width: "100%",
    padding: 24,
    paddingTop: STATUS_BAR_HEIGHT + 32,
    paddingBottom: 120,
  },
  title: {
    fontSize: 18,
    fontFamily: SEMIBOLD_FONT,
    color: PRIMARY_COLOR,
  },
});
