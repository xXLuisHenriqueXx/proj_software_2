import { Image, View } from "react-native";
import { styles } from "./styles";

import Slogan from "./_components/Slogan";
import NavigationButtons from "./_components/NavigationButtons";

import { useAccess } from "@src/hooks/Welcome/useAccess";

const Access = () => {
  const { handleNavigateToLogin, handleNavigateToRegister } = useAccess();

  return (
    <View style={styles.container}>
      <Image
        style={styles.image}
        source={require("@assets/icon.png")}
        resizeMode="cover"
      />

      <Slogan />

      <NavigationButtons
        onNavigateToLogin={handleNavigateToLogin}
        onNavigateToRegister={handleNavigateToRegister}
      />
    </View>
  );
};

export default Access;
