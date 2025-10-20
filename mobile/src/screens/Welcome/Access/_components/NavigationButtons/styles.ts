import { StyleSheet } from "react-native";

import { CONTRAST_COLOR, PRIMARY_COLOR } from "@src/constants/Colors";

export const styles = StyleSheet.create({
  container: {
    position: "absolute",
    bottom: 0,
    left: 0,
    right: 0,
    flexDirection: "column",
    alignItems: "center",
    rowGap: 24,
    paddingVertical: 32,
    paddingHorizontal: 24,
    backgroundColor: CONTRAST_COLOR,
    borderTopLeftRadius: 24,
    borderTopRightRadius: 24,
    elevation: 30,
    shadowColor: PRIMARY_COLOR,
  },
});
