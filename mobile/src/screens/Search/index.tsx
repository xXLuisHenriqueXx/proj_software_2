import { ScrollView } from "react-native";
import { styles } from "./styles";

import { Input } from "@src/components/Input";
import Featured from "./_components/Featured";
import Categories from "./_components/Categories";

import { useAppNavigation } from "@src/hooks/useAppNavigation";

const Search = () => {
  const { appNavigation } = useAppNavigation();

  return (
    <ScrollView
      style={styles.container}
      contentContainerStyle={styles.containerScroll}
    >
      <Input.Search
        placeholder="Pesquisar anúncios ..."
        onPress={() => appNavigation.navigate("Recents")}
      />

      <Featured />
      <Categories />
    </ScrollView>
  );
};

export default Search;
