import { StyleSheet } from "react-native";

import { HIGHLIGHT_COLOR } from "@src/constants/Colors";

export const styles = StyleSheet.create({
  button: {
    width: 56,
    height: 56,
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: HIGHLIGHT_COLOR,
    borderRadius: 16,
  },
});
