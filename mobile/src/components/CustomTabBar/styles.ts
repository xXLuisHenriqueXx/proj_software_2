import { StyleSheet } from "react-native";

import {
  BACKGROUND_SECONDARY_COLOR,
  CONTRAST_COLOR,
  HIGHLIGHT_COLOR,
  PRIMARY_COLOR,
} from "@src/constants/Colors";
import { SEMIBOLD_FONT } from "@src/constants/Fonts";

export const styles = StyleSheet.create({
  container: {
    position: "absolute",
    bottom: 6,
    alignSelf: "center",
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    columnGap: 16,
    padding: 24,
    backgroundColor: CONTRAST_COLOR,
    borderRadius: 24,
    elevation: 2,
    shadowColor: PRIMARY_COLOR,
  },
  containerCreate: {
    position: "absolute",
    top: -64,
    left: 0,
    right: 0,
    alignItems: "center",
    justifyContent: "center",
  },
  buttonCreate: {
    padding: 16,
    backgroundColor: HIGHLIGHT_COLOR,
    borderRadius: 32,
  },
  buttonNav: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
    columnGap: 8,
    padding: 12,
    backgroundColor: BACKGROUND_SECONDARY_COLOR,
    borderRadius: 12,
  },
  navText: {
    fontSize: 16,
    fontFamily: SEMIBOLD_FONT,
    color: HIGHLIGHT_COLOR,
  },
});
