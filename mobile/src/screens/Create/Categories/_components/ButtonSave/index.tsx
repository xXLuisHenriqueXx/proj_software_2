import { Text, TouchableOpacity, ActivityIndicator } from "react-native";
import { styles } from "./styles";

import { BACKGROUND_PRIMARY_COLOR } from "@src/constants/Colors";

interface IButtonSaveProps {
  loading: boolean;
  onPress: () => void;
}

const ButtonSave = ({ loading, onPress }: IButtonSaveProps) => {
  return (
    <TouchableOpacity
      style={styles.button}
      activeOpacity={0.85}
      onPress={onPress}
    >
      {loading ? (
        <ActivityIndicator size="small" color={BACKGROUND_PRIMARY_COLOR} />
      ) : (
        <Text style={styles.text}>Salvar</Text>
      )}
    </TouchableOpacity>
  );
};

export default ButtonSave;
