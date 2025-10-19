import { StyleSheet } from "react-native";

import {
  BACKGROUND_PRIMARY_COLOR,
  HIGHLIGHT_COLOR,
} from "@src/constants/Colors";
import { STATUS_BAR_HEIGHT } from "@src/constants/Values";

export const styles = StyleSheet.create({
  container: {
    position: "relative",
    flex: 1,
    flexDirection: "column",
    alignItems: "center",
    rowGap: 32,
    paddingTop: STATUS_BAR_HEIGHT + 32,
    paddingHorizontal: 24,
    backgroundColor: BACKGROUND_PRIMARY_COLOR,
  },
  containerTypes: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
    columnGap: 8,
    width: "100%",
    padding: 8,
    borderWidth: 1,
    borderColor: HIGHLIGHT_COLOR,
    borderRadius: 12,
  },
});
