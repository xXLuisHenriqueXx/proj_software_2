import { StyleSheet } from "react-native";

import { BACKGROUND_PRIMARY_COLOR, PRIMARY_COLOR } from "@src/constants/Colors";
import { SEMIBOLD_FONT } from "@src/constants/Fonts";

export const styles = StyleSheet.create({
  container: {
    position: "absolute",
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: BACKGROUND_PRIMARY_COLOR,
  },
  text: {
    fontSize: 22,
    fontFamily: SEMIBOLD_FONT,
    color: PRIMARY_COLOR,
  },
});
