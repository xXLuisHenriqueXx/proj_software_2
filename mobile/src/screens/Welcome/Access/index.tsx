import { Image, Text, TouchableOpacity, View } from "react-native";
import { styles } from "./styles";

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

      <View style={styles.containerText}>
        <Text style={styles.title}>
          Pais espertos não compram tudo. {"\n"} Compartilham brinquedos!
        </Text>

        <Text style={styles.subtitle}>
          Mais diversão, menos bagunça (e gastos!).
        </Text>
      </View>

      <View style={styles.containerButtons}>
        <TouchableOpacity
          style={styles.buttonLogin}
          activeOpacity={0.85}
          onPress={handleNavigateToLogin}
        >
          <Text style={styles.textLogin}>Acessar minha conta</Text>
        </TouchableOpacity>

        <TouchableOpacity
          style={styles.buttonRegister}
          activeOpacity={0.85}
          onPress={handleNavigateToRegister}
        >
          <Text style={styles.textRegister}>Criar conta</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default Access;
