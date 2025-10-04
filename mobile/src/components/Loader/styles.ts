import { StyleSheet } from "react-native";

import { BACKGROUND_PRIMARY_COLOR } from "@src/constants/Colors";

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    width: "100%",
    height: "100%",
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: BACKGROUND_PRIMARY_COLOR,
  },
});
