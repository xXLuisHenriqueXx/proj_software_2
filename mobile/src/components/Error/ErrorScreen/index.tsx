import { Text, View } from "react-native";
import { styles } from "./styles";

const ErrorScreen = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.text}>Erro detectado nesta tela!</Text>
    </View>
  );
};

export default ErrorScreen;
