import { StyleSheet } from "react-native";

import {
  BACKGROUND_SECONDARY_COLOR,
  PRIMARY_COLOR,
} from "@src/constants/Colors";
import { SEMIBOLD_FONT } from "@src/constants/Fonts";

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: "column",
    rowGap: 16,
  },
  containerContent: {
    columnGap: 16,
  },
  containerNotFound: {
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "center",
    alignSelf: "center",
    rowGap: 8,
    width: "100%",
    padding: 32,
    backgroundColor: BACKGROUND_SECONDARY_COLOR,
    borderRadius: 12,
  },
  textNotFound: {
    fontSize: 16,
    fontFamily: SEMIBOLD_FONT,
    color: PRIMARY_COLOR,
  },
});
