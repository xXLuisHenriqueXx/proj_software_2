import { View, Text, TouchableOpacity } from "react-native";
import { styles } from "./styles";
import { LogOut } from "lucide-react-native";

import { HIGHLIGHT_COLOR } from "@src/constants/Colors";

interface IHeaderProps {
  name?: string;
  onLogout: () => void;
}

const Header = ({ name, onLogout }: IHeaderProps) => {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>
        Olá, <Text style={styles.titleHighlight}>{name}</Text>
      </Text>

      <TouchableOpacity activeOpacity={0.85} onPress={onLogout}>
        <LogOut size={24} color={HIGHLIGHT_COLOR} />
      </TouchableOpacity>
    </View>
  );
};

export default Header;
