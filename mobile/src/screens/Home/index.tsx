import { View } from "react-native";
import { styles } from "./styles";

import { Header } from "@src/components/Header";
import { Input } from "@src/components/Input";
import Carousel from "@src/components/Carousel";
import Institutes from "./_components/Institutes";
import List from "@src/components/List";
import CategoryList from "./_components/CategoryList";

import { useHome } from "@src/hooks/useHome";
import { useAppNavigation } from "@src/hooks/useAppNavigation";

const Home = () => {
  const { carouselWidth, refreshing, onRefresh, highlights, institutes, toys } =
    useHome();
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

          <Carousel width={carouselWidth} height={240} data={highlights} />

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
    />
  );
};

export default Home;
