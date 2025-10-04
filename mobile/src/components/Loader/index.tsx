import { View, ActivityIndicator } from "react-native";
import { styles } from "./styles";

import { HIGHLIGHT_COLOR } from "@src/constants/Colors";

const Loader = () => {
  return (
    <View style={styles.container}>
      <ActivityIndicator size="large" color={HIGHLIGHT_COLOR} />
    </View>
  );
};

export default Loader;
