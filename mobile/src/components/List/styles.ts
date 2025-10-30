import { StyleSheet } from "react-native";

import { BACKGROUND_PRIMARY_COLOR } from "@src/constants/Colors";
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
});
