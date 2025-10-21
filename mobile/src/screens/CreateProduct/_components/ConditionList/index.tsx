import { View, Text, TouchableOpacity } from "react-native";
import { styles } from "./styles";

import Checkbox from "@src/components/Checkbox";

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
      <Text style={styles.title}>Selecione a condição de uso</Text>

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
            <Checkbox checked={isNew === item.value} />

            <Text style={styles.text}>{item.name}</Text>
          </TouchableOpacity>
        ))}
      </View>
    </View>
  );
};

export default ConditionList;
