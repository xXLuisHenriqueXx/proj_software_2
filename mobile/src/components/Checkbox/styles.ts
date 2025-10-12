import { StyleSheet } from "react-native";

import { HIGHLIGHT_COLOR } from "@src/constants/Colors";

export const styles = StyleSheet.create({
  container: {
    alignItems: "center",
    justifyContent: "center",
    width: 24,
    height: 24,
    borderWidth: 1,
    borderColor: HIGHLIGHT_COLOR,
  },
  checkbox: {
    alignItems: "center",
    justifyContent: "center",
    width: 16,
    height: 16,
    backgroundColor: HIGHLIGHT_COLOR,
  },
});
