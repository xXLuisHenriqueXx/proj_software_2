import { StyleSheet } from "react-native";

import { PRIMARY_COLOR_25 } from "@src/constants/Colors";

export const styles = StyleSheet.create({
  container: {
    width: "100%",
  },
  image: {
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "center",
    borderWidth: 0.5,
    borderColor: PRIMARY_COLOR_25,
    borderRadius: 8,
  },
});
