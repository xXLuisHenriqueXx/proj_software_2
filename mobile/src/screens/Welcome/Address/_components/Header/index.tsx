import { View, Text, TouchableOpacity } from "react-native";
import { styles } from "./styles";
import { useNavigation } from "@react-navigation/native";
import { ChevronLeft } from "lucide-react-native";

import { SECONDARY_COLOR } from "@src/constants/Colors";
import { PropsRoot } from "@src/routes";

const Header = () => {
  const navigation = useNavigation<PropsRoot>();

  return (
    <View style={styles.container}>
      <TouchableOpacity
        activeOpacity={0.85}
        onPress={() => navigation.goBack()}
      >
        <ChevronLeft size={24} color={SECONDARY_COLOR} />
      </TouchableOpacity>

      <Text style={styles.title}>Endereço</Text>
    </View>
  );
};

export default Header;
