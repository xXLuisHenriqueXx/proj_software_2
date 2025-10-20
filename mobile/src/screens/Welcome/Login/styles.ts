import { StyleSheet } from "react-native";

import { STATUS_BAR_HEIGHT } from "@src/constants/Values";
import { BACKGROUND_PRIMARY_COLOR } from "@src/constants/Colors";

export const styles = StyleSheet.create({
  container: {
    position: "relative",
    flex: 1,
    flexDirection: "column",
    alignItems: "center",
    rowGap: 32,
    paddingTop: STATUS_BAR_HEIGHT + 32,
    paddingHorizontal: 24,
    paddingBottom: 24,
    backgroundColor: BACKGROUND_PRIMARY_COLOR,
  },
});
