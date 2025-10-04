import { StyleSheet } from "react-native";

import { PRIMARY_COLOR } from "@src/constants/Colors";
import { MEDIUM_FONT } from "@src/constants/Fonts";

export const styles = StyleSheet.create({
  button: {
    flexDirection: "row",
    alignItems: "center",
    columnGap: 8,
    marginBottom: 12,
  },
  text: {
    fontSize: 16,
    fontFamily: MEDIUM_FONT,
    color: PRIMARY_COLOR,
  },
});
