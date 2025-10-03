import { StyleSheet } from "react-native";

import { HIGHLIGHT_COLOR } from "@src/constants/Colors";

export const styles = StyleSheet.create({
  containerDots: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
    columnGap: 4,
    marginTop: 8,
  },
  image: {
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "center",
    borderWidth: 0.25,
    borderColor: HIGHLIGHT_COLOR,
    borderRadius: 12,
  },
  dot: {
    height: 6,
    borderRadius: 3,
  },
});
