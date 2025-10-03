import { View, Text, TouchableOpacity } from "react-native";
import { styles } from "./styles";
import { Check } from "lucide-react-native";

import { CONTRAST_COLOR } from "@src/constants/Colors";

interface IConditionListProps {
  isNew: boolean;
  onPressTrue: () => void;
  onPressFalse: () => void;
}

const ConditionList = ({
  isNew,
  onPressTrue,
  onPressFalse,
}: IConditionListProps) => {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>
        Selecione a condição de uso do seu anúncio
      </Text>

      <View style={styles.containerContent}>
        {[
          { name: "Novo", value: true, onPress: onPressTrue },
          { name: "Usado", value: false, onPress: onPressFalse },
        ].map((item, index) => (
          <TouchableOpacity
            key={index}
            style={styles.button}
            activeOpacity={0.85}
            onPress={item.onPress}
          >
            {isNew === item.value ? (
              <View style={styles.containerCheckbox}>
                <View style={styles.checkbox}>
                  <Check size={12} color={CONTRAST_COLOR} />
                </View>
              </View>
            ) : (
              <View style={styles.containerCheckbox} />
            )}

            <Text style={styles.text}>{item.name}</Text>
          </TouchableOpacity>
        ))}
      </View>
    </View>
  );
};

export default ConditionList;
