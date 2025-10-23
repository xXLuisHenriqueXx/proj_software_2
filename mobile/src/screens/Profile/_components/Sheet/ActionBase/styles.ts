import { StyleSheet } from "react-native";

import { BACKGROUND_PRIMARY_COLOR, PRIMARY_COLOR } from "@src/constants/Colors";
import { SEMIBOLD_FONT } from "@src/constants/Fonts";

export const styles = StyleSheet.create({
  containerBottom: {
    flex: 1,
    flexDirection: "column",
    alignItems: "center",
    rowGap: 32,
    height: "100%",
    paddingVertical: 16,
    paddingHorizontal: 24,
  },
  containerButtons: {
    flexDirection: "column",
    rowGap: 16,
    width: "100%",
  },
  title: {
    fontSize: 16,
    fontFamily: SEMIBOLD_FONT,
    color: PRIMARY_COLOR,
    textAlign: "center",
  },
});
