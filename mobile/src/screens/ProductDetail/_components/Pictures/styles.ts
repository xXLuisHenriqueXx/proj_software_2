import { StyleSheet } from "react-native";

import { BACKGROUND_PRIMARY_COLOR } from "@src/constants/Colors";

export const styles = StyleSheet.create({
  buttonTopLeft: {
    position: "absolute",
    top: 16,
    left: 16,
    padding: 16,
    backgroundColor: BACKGROUND_PRIMARY_COLOR,
    borderRadius: 12,
    zIndex: 10,
  },
  buttonTopRight: {
    position: "absolute",
    top: 16,
    right: 16,
    padding: 16,
    backgroundColor: BACKGROUND_PRIMARY_COLOR,
    borderRadius: 12,
    zIndex: 10,
  },
  buttonBottomRight: {
    position: "absolute",
    bottom: -8,
    right: 16,
    padding: 16,
    backgroundColor: BACKGROUND_PRIMARY_COLOR,
    borderRadius: 12,
    zIndex: 10,
  },
});
