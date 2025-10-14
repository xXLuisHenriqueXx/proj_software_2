import { useCallback, useEffect, useRef, useState } from "react";
import { View, Text, FlatList, ListRenderItem, TextInput } from "react-native";
import { styles } from "./styles";

import { Input } from "@src/components/Input";
import Item from "./_components/Item";
import Empty from "./_components/Empty";

import { useRecentsStore } from "@src/stores/RecentsStore";
import { useAppNavigation } from "@src/hooks/useAppNavigation";

const Recents = () => {
  const { recents, fetchRecents, saveRecent } = useRecentsStore();
  const { appNavigation } = useAppNavigation();

  const [search, setSearch] = useState<string>("");

  const inputRef = useRef<TextInput>(null);

  const handleSubmitEditing = (search: string) => {
    if (!search) return;

    saveRecent(search);

    appNavigation.navigate("ProductList", { filter: { search } });
  };

  useEffect(() => {
    fetchRecents();

    inputRef.current?.focus();
  }, []);

  const renderItem: ListRenderItem<string> = useCallback(
    ({ item }) => (
      <Item
        key={item}
        item={item}
        onPress={() =>
          appNavigation.navigate("ProductList", { filter: { search: item } })
        }
      />
    ),
    []
  );

  return (
    <FlatList
      style={styles.container}
      contentContainerStyle={styles.containerContent}
      ListHeaderComponent={
        <View style={styles.containerHeader}>
          <Input.Search
            ref={inputRef}
            placeholder="Pesquisar ..."
            value={search}
            onChangeText={(text: string) => setSearch(text)}
            onSubmitEditing={() => handleSubmitEditing(search)}
            onBack={() => appNavigation.goBack()}
          />

          <Text style={styles.title}>Pesquisas recentes</Text>
        </View>
      }
      data={recents}
      renderItem={renderItem}
      keyExtractor={(item) => item}
      ListEmptyComponent={<Empty />}
      showsVerticalScrollIndicator={false}
    />
  );
};

export default Recents;
