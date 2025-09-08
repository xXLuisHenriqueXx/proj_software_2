import { Search } from "lucide-react-native";
import { View, TextInput } from "react-native";

interface SearchInputProps {
  onPress: () => void;
  onBlur: () => void;
  search: string;
  setSearch: (value: string) => void;
}

const SearchInput = ({
  onPress,
  onBlur,
  search,
  setSearch,
}: SearchInputProps) => {
  return (
    <View className="flex-row items-center gap-x-2 w-full h-16 px-4 bg-backgroundPrimary border border-highlight rounded-2xl">
      <Search size={24} color={"#13131399"} />

      <TextInput
        className="flex-1 text-base font-redHatDisplayRegular text-primary"
        placeholder="Pesquisar"
        returnKeyType="done"
        value={search}
        onChangeText={(text: string) => {
          setSearch(text);
        }}
        onPress={onPress}
        onBlur={onBlur}
      />
    </View>
  );
};

export default SearchInput;
