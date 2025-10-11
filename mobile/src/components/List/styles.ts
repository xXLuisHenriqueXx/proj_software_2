import { StyleSheet } from "react-native";

import {
  BACKGROUND_PRIMARY_COLOR,
  BACKGROUND_SECONDARY_COLOR,
  PRIMARY_COLOR,
} from "@src/constants/Colors";
import { SEMIBOLD_FONT } from "@src/constants/Fonts";
import { STATUS_BAR_HEIGHT } from "@src/constants/Values";

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: BACKGROUND_PRIMARY_COLOR,
  },
  containerContent: {
    alignItems: "stretch",
    rowGap: 32,
    width: "100%",
    padding: 24,
    paddingTop: STATUS_BAR_HEIGHT + 32,
    paddingBottom: 120,
  },
  containerColumn: {
    justifyContent: "space-between",
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
