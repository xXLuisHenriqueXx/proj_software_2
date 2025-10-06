import { StyleSheet } from "react-native";

import { BACKGROUND_PRIMARY_COLOR } from "@src/constants/Colors";
import { statusBarHeight } from "@src/constants/Values";

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: BACKGROUND_PRIMARY_COLOR,
  },
  containerHeader: {
    flexDirection: "column",
    alignItems: "center",
    rowGap: 32,
  },
  containerContent: {
    alignItems: "stretch",
    rowGap: 32,
    width: "100%",
    padding: 24,
    paddingTop: statusBarHeight + 64,
    paddingBottom: 120,
  },
});
