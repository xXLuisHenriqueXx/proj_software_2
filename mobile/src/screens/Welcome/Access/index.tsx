import { Image, View } from "react-native";
import { styles } from "./styles";

import Slogan from "./_components/Slogan";
import NavigationButtons from "./_components/NavigationButtons";

const Access = () => {
  return (
    <View style={styles.container}>
      <Image
        style={styles.image}
        source={require("@assets/icon.png")}
        resizeMode="cover"
      />

      <Slogan />

      <NavigationButtons />
    </View>
  );
};

export default Access;
