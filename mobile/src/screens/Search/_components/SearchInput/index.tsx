import { View, TextInput } from "react-native";
import { styles } from "./styles";
import { Search } from "lucide-react-native";

import { HIGHLIGHT_COLOR } from "@src/constants/Colors";

interface SearchInputProps {
  onPress: () => void;
  onEndEditing: () => void;
  search: string;
  setSearch: (value: string) => void;
}

const SearchInput = ({
  onPress,
  onEndEditing,
  search,
  setSearch,
}: SearchInputProps) => {
  return (
    <View style={styles.container}>
      <Search size={24} color={HIGHLIGHT_COLOR} />

      <TextInput
        style={styles.input}
        placeholder="Pesquisar"
        returnKeyType="done"
        value={search}
        onChangeText={(text: string) => {
          setSearch(text);
        }}
        onPress={onPress}
        onEndEditing={onEndEditing}
      />
    </View>
  );
};

export default SearchInput;
