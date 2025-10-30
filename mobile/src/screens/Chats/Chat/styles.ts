import { StyleSheet } from "react-native";

import {
  BACKGROUND_PRIMARY_COLOR,
  HIGHLIGHT_COLOR,
} from "@src/constants/Colors";
import { REGULAR_FONT } from "@src/constants/Fonts";
import { STATUS_BAR_HEIGHT, WIDTH } from "@src/constants/Values";

export const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  containerContent: {
    flex: 1,
    backgroundColor: BACKGROUND_PRIMARY_COLOR,
    paddingTop: STATUS_BAR_HEIGHT + 32,
    paddingBottom: 80,
    paddingHorizontal: 24,
  },
  containerContentFlatlist: {
    rowGap: 16,
  },
  containerMessage: {
    flexDirection: "row",
    alignItems: "flex-end",
  },
  containerBubble: {
    flexDirection: "column",
    alignItems: "flex-start",
    rowGap: 4,
    maxWidth: WIDTH * 0.75 - 48,
    paddingVertical: 12,
    paddingHorizontal: 16,
    borderRadius: 12,
  },
  containerInput: {
    position: "absolute",
    left: 0,
    right: 0,
    bottom: 0,
    flexDirection: "row",
    alignItems: "center",
    columnGap: 8,
    paddingHorizontal: 24,
    paddingVertical: 8,
  },
  textMessage: {
    fontSize: 16,
    fontFamily: REGULAR_FONT,
  },
  textSentAt: {
    fontSize: 10,
    alignSelf: "flex-end",
  },
  input: {
    width: WIDTH - 48 - 64 - 32,
  },
  buttonSend: {
    width: 64,
    height: 64,
    justifyContent: "center",
    alignItems: "center",
    borderRadius: 14,
    backgroundColor: HIGHLIGHT_COLOR,
  },
});
