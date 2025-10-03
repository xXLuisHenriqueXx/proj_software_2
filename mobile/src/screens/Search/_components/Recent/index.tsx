import { View, Text, TouchableOpacity } from "react-native";
import { styles } from "./styles";
import { History, X } from "lucide-react-native";

import { recentSearchService } from "@src/services/RecentSearchService";
import { HIGHLIGHT_COLOR, PRIMARY_COLOR } from "@src/constants/Colors";

interface IRecentProps {
  data: string[];
  setSearch: (value: string) => void;
}

const Recent = ({ data, setSearch }: IRecentProps) => {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Pesquisas recentes</Text>

      {data.length > 0 ? (
        <View style={styles.containerContent}>
          {data.map((item, index) => (
            <TouchableOpacity
              key={index}
              style={styles.containerItem}
              activeOpacity={0.85}
              onPress={() => setSearch(item)}
            >
              <View style={styles.containerText}>
                <History size={20} color={HIGHLIGHT_COLOR} />
                <Text style={styles.itemText}>{item}</Text>
              </View>

              <X
                size={20}
                color={PRIMARY_COLOR}
                onPress={() => {
                  recentSearchService.delete(item);
                }}
              />
            </TouchableOpacity>
          ))}
        </View>
      ) : (
        <Text style={styles.emptyText}>Nenhuma pesquisa recente ...</Text>
      )}
    </View>
  );
};

export default Recent;
