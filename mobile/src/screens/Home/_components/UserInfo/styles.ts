import { StyleSheet } from "react-native";

import { BACKGROUND_SECONDARY_COLOR } from "@src/constants/Colors";

export const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "flex-end",
    columnGap: 24,
    width: "100%",
  },
  image: {
    alignItems: "center",
    justifyContent: "center",
    width: 32,
    height: 32,
    backgroundColor: BACKGROUND_SECONDARY_COLOR,
    borderRadius: 24,
  },
});
