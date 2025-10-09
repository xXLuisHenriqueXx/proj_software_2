import { View } from "react-native";
import { styles } from "./styles";

import Header from "./_components/Header";
import Carousel from "@src/components/Carousel";
import Institutes from "./_components/Institutes";
import Benefit from "./_components/Benefit";
import List from "@src/components/List";
import CategoryList from "./_components/CategoryList";

import { useHome } from "@src/hooks/useHome";

const Home = () => {
  const {
    user,
    carouselWidth,
    refreshing,
    onRefresh,
    highlights,
    institutes,
    toys,
  } = useHome();

  return (
    <List
      header={
        <View style={styles.containerHeader}>
          <Header picture={user?.picture} />

          <Carousel width={carouselWidth} height={240} data={highlights} />

          <Institutes data={institutes} />

          <Benefit />

          <CategoryList />
        </View>
      }
      data={toys}
      refreshing={refreshing}
      onRefresh={onRefresh}
    />
  );
};

export default Home;
