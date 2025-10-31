import { StyleSheet } from "react-native";

import { CONTRAST_COLOR, PRIMARY_COLOR_75 } from "@src/constants/Colors";
import { SEMIBOLD_FONT } from "@src/constants/Fonts";

export const styles = StyleSheet.create({
  container: {
    position: "absolute",
    left: 0,
    right: 0,
    bottom: 0,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    paddingVertical: 8,
    paddingHorizontal: 24,
    backgroundColor: CONTRAST_COLOR,
    elevation: 16,
    shadowColor: PRIMARY_COLOR_75,
  },

  duoGroup: {
    flexDirection: "row",
    alignItems: "center",
    columnGap: 16,
  },

  createWrapper: {
    position: "absolute",
    left: 0,
    right: 0,
    top: -32,
    alignItems: "center",
    justifyContent: "center",
    zIndex: 10,
  },

  createButton: {
    borderRadius: 32,
  },

  buttonNav: {
    alignItems: "center",
    justifyContent: "center",
    width: 64,
    aspectRatio: 1,
  },

  navText: {
    fontSize: 14,
    fontFamily: SEMIBOLD_FONT,
    marginTop: 4,
  },
});
