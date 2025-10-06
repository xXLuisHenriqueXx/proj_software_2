import { FlatList, RefreshControl, View } from "react-native";
import { styles } from "./styles";

import Header from "./_components/Header";
import Carousel from "@src/components/Carousel";
import Institutes from "./_components/Institutes";
import Benefit from "./_components/Benefit";
import List from "@src/components/List";

import { useHome } from "@src/hooks/useHome";
import { IProduct } from "@src/common/Entities/Product";

const Home = () => {
  const {
    user,
    handleLogout,
    carouselWidth,
    refreshing,
    onRefresh,
    highlights,
    institutes,
    forYouToys,
    boyToys,
    girlToys,
    babyToys,
    carToys,
  } = useHome();

  interface ISection {
    title: string;
    subtitle: string;
    data: IProduct[];
  }

  const sections: ISection[] = [
    {
      title: "Brinquedos recomendados",
      subtitle: "Dê uma olhada nas nossas recomendações",
      data: forYouToys,
    },
    {
      title: "Brinquedos para meninos? Temos!",
      subtitle: "Dê uma olhada nos nossos produtos",
      data: boyToys,
    },
    {
      title: "Brinquedos para meninas? Temos!",
      subtitle: "Dê uma olhada nos nossos produtos",
      data: girlToys,
    },
    {
      title: "Brinquedos para bebês? Temos!",
      subtitle: "Dê uma olhada nos nossos produtos",
      data: babyToys,
    },
    {
      title: "Brinquedos de carro? Temos!",
      subtitle: "Dê uma olhada nos nossos produtos",
      data: carToys,
    },
  ];

  const renderSection = ({ item }: { item: ISection }) => (
    <List title={item.title} subtitile={item.subtitle} data={item.data} />
  );

  return (
    <FlatList
      style={styles.container}
      ListHeaderComponent={
        <View style={styles.containerHeader}>
          <Header
            name={user?.name}
            picture={user?.picture}
            onLogout={handleLogout}
          />
          <Carousel width={carouselWidth} height={240} data={highlights} />
          <Institutes data={institutes} />
          <Benefit />
        </View>
      }
      data={sections}
      renderItem={renderSection}
      keyExtractor={(item) => item.title}
      contentContainerStyle={styles.containerContent}
      showsVerticalScrollIndicator={false}
      refreshControl={
        <RefreshControl refreshing={refreshing} onRefresh={onRefresh} />
      }
    />
  );
};

export default Home;
