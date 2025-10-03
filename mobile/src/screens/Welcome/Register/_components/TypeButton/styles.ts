import { StyleSheet } from "react-native";

import { MEDIUM_FONT } from "@src/constants/Fonts";

export const styles = StyleSheet.create({
  button: {
    flex: 1,
    alignItems: "center",
    paddingVertical: 8,
    borderRadius: 8,
  },
  text: {
    fontSize: 16,
    fontFamily: MEDIUM_FONT,
  },
});
