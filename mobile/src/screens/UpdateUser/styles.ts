import { BACKGROUND_PRIMARY_COLOR } from "@src/constants/Colors";
import { STATUS_BAR_HEIGHT } from "@src/constants/Values";
import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
  container: {
    position: "relative",
    paddingTop: STATUS_BAR_HEIGHT + 32,
    backgroundColor: BACKGROUND_PRIMARY_COLOR,
  },
  containerContent: {
    rowGap: 48,
    paddingBottom: 124,
    paddingHorizontal: 24,
  },
});
