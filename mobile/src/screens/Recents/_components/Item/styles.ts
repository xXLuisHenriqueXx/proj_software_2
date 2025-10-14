import { PRIMARY_COLOR } from "@src/constants/Colors";
import { REGULAR_FONT } from "@src/constants/Fonts";
import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    width: "100%",
  },
  containerText: {
    flexDirection: "row",
    alignItems: "center",
    columnGap: 8,
  },
  text: {
    fontSize: 16,
    fontFamily: REGULAR_FONT,
    color: PRIMARY_COLOR,
  },
});
