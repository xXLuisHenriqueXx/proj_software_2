import { memo } from "react";
import { View, Text, TouchableOpacity } from "react-native";
import { styles } from "./styles";
import { useNavigation } from "@react-navigation/native";
import { X } from "lucide-react-native";

import { PropsAppStack } from "@src/routes/stacks/AppStack";
import { SECONDARY_COLOR } from "@src/constants/Colors";

const Header = () => {
  const navigation = useNavigation<PropsAppStack>();

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Instituição assistencial</Text>

      <TouchableOpacity
        activeOpacity={0.85}
        onPress={() => navigation.goBack()}
      >
        <X size={20} color={SECONDARY_COLOR} />
      </TouchableOpacity>
    </View>
  );
};

export default memo(Header);
