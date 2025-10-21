import { StyleSheet } from "react-native";

import {
  BACKGROUND_PRIMARY_COLOR,
  PRIMARY_COLOR,
  SECONDARY_COLOR,
} from "@src/constants/Colors";
import { SEMIBOLD_FONT } from "@src/constants/Fonts";

export const styles = StyleSheet.create({
  container: {
    flexDirection: "column",
    alignItems: "flex-start",
    rowGap: 16,
  },
  containerSmallImages: {
    flexDirection: "row",
    flexWrap: "wrap",
    gap: 16,
    width: "50%",
  },
  containerImage: {
    position: "relative",
    borderRadius: 12,
    overflow: "hidden",
  },
  buttonPick: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    columnGap: 16,
    width: "100%",
  },
  buttonRemove: {
    position: "absolute",
    top: 8,
    right: 8,
    padding: 2,
    backgroundColor: BACKGROUND_PRIMARY_COLOR,
    borderRadius: 24,
    zIndex: 10,
  },
  imagePlaceholder: {
    alignItems: "center",
    justifyContent: "center",
    borderWidth: 0.5,
    borderColor: SECONDARY_COLOR,
    borderStyle: "dashed",
    borderRadius: 12,
  },
  title: {
    fontSize: 16,
    fontFamily: SEMIBOLD_FONT,
    color: PRIMARY_COLOR,
  },
});
