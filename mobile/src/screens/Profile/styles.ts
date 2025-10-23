import { StyleSheet } from "react-native";

import {
  BACKGROUND_PRIMARY_COLOR,
  HIGHLIGHT_COLOR,
  PRIMARY_COLOR,
  PRIMARY_COLOR_75,
} from "@src/constants/Colors";
import { STATUS_BAR_HEIGHT } from "@src/constants/Values";
import { BOLD_FONT, REGULAR_FONT } from "@src/constants/Fonts";

export const styles = StyleSheet.create({
  container: {
    position: "relative",
    flex: 1,
    width: "100%",
    height: "100%",
    paddingHorizontal: 24,
    paddingTop: STATUS_BAR_HEIGHT + 32,
    backgroundColor: BACKGROUND_PRIMARY_COLOR,
  },
  containerSheet: {
    borderTopLeftRadius: 24,
    borderTopRightRadius: 24,
    elevation: 30,
    backgroundColor: BACKGROUND_PRIMARY_COLOR,
    shadowColor: PRIMARY_COLOR,
  },
  containerContent: {
    flexDirection: "column",
    alignItems: "center",
    rowGap: 32,
    width: "100%",
    paddingBottom: 256,
  },
  containerUser: {
    flexDirection: "column",
    rowGap: 8,
  },
  containerText: {
    flexDirection: "column",
    alignItems: "center",
  },
  picture: {
    alignItems: "center",
    justifyContent: "center",
    width: 128,
    height: 128,
    borderRadius: 64,
    borderWidth: 2,
    borderColor: HIGHLIGHT_COLOR,
  },
  nameText: {
    fontSize: 20,
    fontFamily: BOLD_FONT,
    color: PRIMARY_COLOR,
  },
  emailText: {
    fontSize: 14,
    fontFamily: REGULAR_FONT,
    color: PRIMARY_COLOR_75,
  },
});
