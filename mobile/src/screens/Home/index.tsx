import { View, ScrollView } from "react-native";
import { styles } from "./styles";

import Header from "./_components/Header";
import Carousel from "@src/components/Carousel";
import Institutes from "./_components/Institutes";
import Benefit from "./_components/Benefit";
import List from "@src/components/List";

import { useHome } from "@src/hooks/useHome";

const Home = () => {
  const {
    user,
    handleLogout,
    carouselWidth,
    highlights,
    institutes,
    forYouToys,
    boyToys,
    girlToys,
    babyToys,
  } = useHome();

  return (
    <ScrollView
      style={styles.container}
      contentContainerStyle={{ paddingBottom: 92, flexGrow: 1 }}
    >
      <Header name={user?.name} onLogout={handleLogout} />

      <View style={styles.containerContent}>
        <Carousel width={carouselWidth} height={240} data={highlights} />

        <Institutes data={institutes} />

        <Benefit />

        <List
          title="Brinquedos recomendados"
          subtitile="Dê uma olhada nas nossas recomendações"
          data={forYouToys}
        />

        <List
          title="Brinquedos para meninos? Temos!"
          subtitile="Dê uma olhada nos nossos produtos"
          data={boyToys}
        />

        <List
          title="Brinquedos para meninas? Temos!"
          subtitile="Dê uma olhada nos nossos produtos"
          data={girlToys}
        />

        <List
          title="Brinquedos para bebês? Temos!"
          subtitile="Dê uma olhada nos nossos produtos"
          data={babyToys}
        />
      </View>
    </ScrollView>
  );
};

export default Home;
