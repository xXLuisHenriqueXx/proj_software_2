import { StyleSheet } from "react-native";

import {
  BACKGROUND_SECONDARY_COLOR,
  PRIMARY_COLOR,
} from "@src/constants/Colors";
import { BOLD_FONT, REGULAR_FONT, SEMIBOLD_FONT } from "@src/constants/Fonts";

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: "column",
    rowGap: 16,
  },
  containerContent: {
    flexDirection: "row",
    flexWrap: "wrap",
    justifyContent: "space-between",
    gap: 24,
  },
  containerInfo: {
    flexDirection: "column",
    rowGap: 4,
  },
  containerNotFound: {
    flex: 1,
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "center",
    alignSelf: "center",
    rowGap: 8,
    width: "100%",
    padding: 32,
    backgroundColor: BACKGROUND_SECONDARY_COLOR,
    borderRadius: 12,
  },
  image: {
    width: "100%",
    aspectRatio: 1,
    borderRadius: 12,
  },
  imagePlaceholder: {
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "center",
    width: "100%",
    aspectRatio: 1,
    borderRadius: 12,
    backgroundColor: BACKGROUND_SECONDARY_COLOR,
  },
  price: {
    fontSize: 14,
    fontFamily: BOLD_FONT,
    color: PRIMARY_COLOR,
  },
  name: {
    fontSize: 14,
    fontFamily: REGULAR_FONT,
    color: PRIMARY_COLOR,
  },
  notFound: {
    fontSize: 16,
    fontFamily: SEMIBOLD_FONT,
    color: PRIMARY_COLOR,
  },
});
