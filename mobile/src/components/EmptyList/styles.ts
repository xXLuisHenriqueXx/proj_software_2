import { StyleSheet } from "react-native";

import { PRIMARY_COLOR, PRIMARY_COLOR_25 } from "@src/constants/Colors";
import { SEMIBOLD_FONT } from "@src/constants/Fonts";

export const styles = StyleSheet.create({
  container: {
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "center",
    alignSelf: "center",
    rowGap: 8,
    minWidth: "100%",
    padding: 32,
    borderWidth: 1.5,
    borderStyle: "dashed",
    borderColor: PRIMARY_COLOR_25,
    borderRadius: 12,
  },
  text: {
    fontSize: 16,
    fontFamily: SEMIBOLD_FONT,
    color: PRIMARY_COLOR,
  },
});
