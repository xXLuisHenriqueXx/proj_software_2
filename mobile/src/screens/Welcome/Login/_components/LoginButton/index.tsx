import { ActivityIndicator, Text, TouchableOpacity } from "react-native";
import { styles } from "./styles";

import { BACKGROUND_PRIMARY_COLOR } from "@src/constants/Colors";

interface ILoginButtonProps {
  loading: boolean;
  onLogin: () => void;
}

const LoginButton = ({ loading, onLogin }: ILoginButtonProps) => {
  return (
    <TouchableOpacity
      style={styles.button}
      activeOpacity={0.85}
      onPress={onLogin}
      disabled={loading}
    >
      {loading ? (
        <ActivityIndicator size="small" color={BACKGROUND_PRIMARY_COLOR} />
      ) : (
        <Text style={styles.text}>Acessar</Text>
      )}
    </TouchableOpacity>
  );
};

export default LoginButton;
