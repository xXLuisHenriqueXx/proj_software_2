import { useEffect, useState } from "react";
import {
  View,
  Text,
  TouchableOpacity,
  ScrollView,
  useWindowDimensions,
} from "react-native";
import { styles } from "./styles";
import { LogOut } from "lucide-react-native";

import Institutes from "./_components/Institutes";
import Benefit from "./_components/Benefit";
import List from "@src/components/List";
import Carousel from "@src/components/Carousel";

import useAuth from "@src/hooks/useAuth";
import { IProduct } from "@src/common/Entities/Product";
import { toyService } from "@src/services/ToyService";
import { EToyType } from "@src/common/Interfaces/Toy.interface";
import { IHighlight } from "@src/common/Entities/Highlight";
import { highlightService } from "@src/services/HighlightService";
import { HIGHLIGHT_COLOR } from "@src/constants/Colors";

const Home = () => {
  const { width } = useWindowDimensions();
  const { logout, user } = useAuth();

  const [highlights, setHighlights] = useState<IHighlight[]>([]);
  const [boyToys, setBoyToys] = useState<IProduct[]>([]);
  const [girlToys, setGirlToys] = useState<IProduct[]>([]);
  const [babyToys, setBabyToys] = useState<IProduct[]>([]);
  const [isLoading, setIsLoading] = useState<boolean>(false);

  const handleFetchHighlights = async () => {
    const highlights = await highlightService.get();

    setHighlights(highlights.data);
  };

  const handleFetchBoysToys = async () => {
    const toys = await toyService.get({
      page: 1,
      pageSize: 4,
      filter: { type: EToyType.BOYS },
    });

    setBoyToys(toys.data.toys);
  };

  const handleFetchGirlsToys = async () => {
    const toys = await toyService.get({
      page: 1,
      pageSize: 4,
      filter: { type: EToyType.GIRLS },
    });

    setGirlToys(toys.data.toys);
  };

  const handleFetchBabyToys = async () => {
    const toys = await toyService.get({
      page: 3,
      pageSize: 1,
      filter: { type: EToyType.BABIES },
    });

    setBabyToys(toys.data.toys);
  };

  useEffect(() => {
    setIsLoading(true);

    try {
      handleFetchHighlights();
      handleFetchBoysToys();
      handleFetchGirlsToys();
      handleFetchBabyToys();
    } catch (error) {
      console.error(error);
    } finally {
      setIsLoading(false);
    }
  }, []);

  const carouselWidth = width - 48;

  const handleLogout = () => logout();

  return (
    <ScrollView
      style={styles.container}
      contentContainerStyle={{ paddingBottom: 92, flexGrow: 1 }}
    >
      <View style={styles.containerHeader}>
        <Text style={styles.title}>
          Olá, <Text style={styles.titleHighlight}>{user?.name}</Text>
        </Text>

        <TouchableOpacity activeOpacity={0.85} onPress={handleLogout}>
          <LogOut size={24} color={HIGHLIGHT_COLOR} />
        </TouchableOpacity>
      </View>

      <View style={styles.containerContent}>
        <Carousel width={carouselWidth} height={240} data={highlights} />

        <Institutes />

        <Benefit />

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
