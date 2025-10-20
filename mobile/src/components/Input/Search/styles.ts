import { StyleSheet } from "react-native";

import { HIGHLIGHT_COLOR, PRIMARY_COLOR } from "@src/constants/Colors";
import { REGULAR_FONT } from "@src/constants/Fonts";

export const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    alignItems: "center",
    columnGap: 8,
    width: "100%",
  },
  containerInput: {
    flex: 1,
    flexDirection: "row",
    alignItems: "center",
    columnGap: 8,
    height: 56,
    paddingHorizontal: 16,
    borderWidth: 1,
    borderColor: HIGHLIGHT_COLOR,
    borderRadius: 16,
  },
  input: {
    flex: 1,
    fontSize: 14,
    fontFamily: REGULAR_FONT,
    color: PRIMARY_COLOR,
  },
});
