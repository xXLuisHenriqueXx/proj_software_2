import { View } from "react-native";
import { styles } from "./styles";

import { Header } from "@src/components/Header";
import { Input } from "@src/components/Input";
import Carousel from "@src/components/Carousel";
import Institutes from "./_components/Institutes";
import List from "@src/components/List";
import CategoryList from "./_components/CategoryList";

import { useHome } from "./_hooks/useHome";
import { useAppNavigation } from "@src/hooks/useAppNavigation";
import { WIDTH } from "@src/constants/Values";

const Home = () => {
  const {
    refreshing,
    onRefresh,
    highlights,
    institutes,
    toys,
    handleLoadMore,
    loadingMore,
  } = useHome();
  const { appNavigation } = useAppNavigation();

  return (
    <List
      header={
        <View style={styles.containerHeader}>
          <Input.Search
            placeholder="Pesquisar anúncios ..."
            onPress={() => appNavigation.navigate("Recents")}
          />

          <CategoryList />

          <Institutes data={institutes} />

          <Carousel width={WIDTH - 48} height={240} data={highlights} />

          <Header.Root>
            <Header.Content
              title="Recomendados para você"
              subtitle="Produtos que podem ser do seu interesse ..."
            />
          </Header.Root>
        </View>
      }
      data={toys}
      refreshing={refreshing}
      onRefresh={onRefresh}
      onEndReached={handleLoadMore}
      loadingMore={loadingMore}
    />
  );
};

export default Home;
