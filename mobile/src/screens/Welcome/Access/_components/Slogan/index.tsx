import { View, Text } from "react-native";
import { styles } from "./styles";

const Slogan = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>
        Pais espertos não compram tudo. {"\n"} Compartilham brinquedos!
      </Text>

      <Text style={styles.subtitle}>
        Mais diversão, menos bagunça (e gastos!).
      </Text>
    </View>
  );
};

export default Slogan;
