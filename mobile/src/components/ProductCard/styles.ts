import { StyleSheet } from "react-native";

import {
  BACKGROUND_SECONDARY_COLOR,
  PRIMARY_COLOR,
  PRIMARY_COLOR_75,
} from "@src/constants/Colors";
import { BOLD_FONT, SEMIBOLD_FONT } from "@src/constants/Fonts";

export const styles = StyleSheet.create({
  container: {
    flexDirection: "column",
    rowGap: 12,
  },
  containerInfo: {
    flexDirection: "column",
    rowGap: 4,
  },
  image: {
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "center",
    width: "100%",
    aspectRatio: 1,
    borderRadius: 8,
    backgroundColor: BACKGROUND_SECONDARY_COLOR,
  },
  textName: {
    fontSize: 14,
    fontFamily: SEMIBOLD_FONT,
    color: PRIMARY_COLOR_75,
    textTransform: "capitalize",
  },
  textPrice: {
    fontSize: 16,
    fontFamily: BOLD_FONT,
    color: PRIMARY_COLOR,
  },
});
