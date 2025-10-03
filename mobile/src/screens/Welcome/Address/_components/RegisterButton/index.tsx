import { ActivityIndicator, Text, TouchableOpacity } from "react-native";
import { styles } from "./styles";

import { BACKGROUND_PRIMARY_COLOR } from "@src/constants/Colors";

interface IRegisterButtonProps {
  loading: boolean;
  onRegister: () => void;
}

const RegisterButton = ({ loading, onRegister }: IRegisterButtonProps) => {
  return (
    <TouchableOpacity
      style={styles.button}
      activeOpacity={0.85}
      onPress={onRegister}
      disabled={loading}
    >
      {loading ? (
        <ActivityIndicator size="small" color={BACKGROUND_PRIMARY_COLOR} />
      ) : (
        <Text style={styles.text}>Cadastrar-se</Text>
      )}
    </TouchableOpacity>
  );
};

export default RegisterButton;
