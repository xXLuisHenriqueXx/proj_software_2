import { View, Text, TouchableOpacity } from "react-native";
import { styles } from "./styles";

import { HIGHLIGHT_COLOR, PRIMARY_COLOR } from "@src/constants/Colors";
import { History, X } from "lucide-react-native";
import { recentSearchService } from "@src/services/RecentSearchService";

interface IItemProps {
  item: string;
  onPress: () => void;
}

const Item = ({ item, onPress }: IItemProps) => {
  return (
    <TouchableOpacity
      style={styles.container}
      activeOpacity={0.85}
      onPress={onPress}
    >
      <View style={styles.containerText}>
        <History size={20} color={HIGHLIGHT_COLOR} />
        <Text style={styles.text}>{item}</Text>
      </View>

      <X
        size={20}
        color={PRIMARY_COLOR}
        onPress={() => {
          recentSearchService.delete(item);
        }}
      />
    </TouchableOpacity>
  );
};

export default Item;
