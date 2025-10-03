import { StyleSheet } from "react-native";

import { BACKGROUND_PRIMARY_COLOR } from "@src/constants/Colors";
import { statusBarHeight } from "@src/constants/Values";

export const styles = StyleSheet.create({
  container: {
    position: "relative",
    flex: 1,
    flexDirection: "column",
    alignItems: "center",
    rowGap: 96,
    paddingTop: statusBarHeight + 64,
    backgroundColor: BACKGROUND_PRIMARY_COLOR,
  },
  image: {
    width: 288,
    height: 288,
  },
});
