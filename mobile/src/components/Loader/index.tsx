import { memo } from "react";
import { View, ActivityIndicator } from "react-native";
import { styles } from "./styles";

import { HIGHLIGHT_COLOR } from "@src/constants/Colors";

const Loader = () => {
  return (
    <View style={styles.container}>
      <ActivityIndicator size={56} color={HIGHLIGHT_COLOR} />
    </View>
  );
};

export default memo(Loader);
