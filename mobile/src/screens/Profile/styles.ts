import { StyleSheet } from "react-native";

import {
  BACKGROUND_PRIMARY_COLOR,
  CONTRAST_COLOR,
  PRIMARY_COLOR,
  PRIMARY_COLOR_50,
} from "@src/constants/Colors";
import { STATUS_BAR_HEIGHT } from "@src/constants/Values";

export const styles = StyleSheet.create({
  container: {
    position: "relative",
    flex: 1,
    paddingTop: STATUS_BAR_HEIGHT + 64,
    backgroundColor: BACKGROUND_PRIMARY_COLOR,
  },
  containerScroll: {
    flexDirection: "column",
    alignItems: "center",
    rowGap: 32,
    width: "100%",
  },
  containerContent: {
    rowGap: 32,
    width: "100%",
    paddingHorizontal: 24,
    paddingTop: 48,
    paddingBottom: 128,
    backgroundColor: CONTRAST_COLOR,
    borderTopLeftRadius: 24,
    borderTopRightRadius: 24,
    elevation: 30,
    shadowColor: PRIMARY_COLOR_50,
  },
  containerSheet: {
    borderTopLeftRadius: 24,
    borderTopRightRadius: 24,
    elevation: 30,
    backgroundColor: BACKGROUND_PRIMARY_COLOR,
    shadowColor: PRIMARY_COLOR,
  },
  backButton: {
    position: "absolute",
    top: -32,
    left: 24,
    width: 48,
    height: 48,
  },
});
