import { StyleSheet } from "react-native";

import { BACKGROUND_PRIMARY_COLOR } from "@src/constants/Colors";
import { STATUS_BAR_HEIGHT } from "@src/constants/Values";

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
  containerScroll: {
    paddingBottom: 264,
    rowGap: 48,
  },
});
