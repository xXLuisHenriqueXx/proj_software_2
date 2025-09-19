import { useEffect, useState } from "react";
import {
  View,
  Text,
  TouchableOpacity,
  ScrollView,
  useWindowDimensions,
} from "react-native";
import { useNavigation } from "@react-navigation/native";
import Constants from "expo-constants";
import { MessageSquareText } from "lucide-react-native";

import Institutes from "./_components/Institutes";
import Benefit from "./_components/Benefit";
import List from "@src/components/List";
import Carousel from "@src/components/Carousel";

import { highlightScrollData } from "@src/static/HighlightScrollData";
import { PropsAppStack } from "@src/routes/stacks/AppStack";
import useAuth from "@src/hooks/useAuth";
import { IProduct } from "@src/common/Entities/Product";
import { toyService } from "@src/services/ToyService";
import { EToyType } from "@src/common/Interfaces/Toy.interface";

const Home = () => {
  const { width } = useWindowDimensions();
  const { logout, user } = useAuth();
  const statusBarHeight = Constants.statusBarHeight;
  const navigation = useNavigation<PropsAppStack>();

  const [boyToys, setBoyToys] = useState<IProduct[]>([]);
  const [girlToys, setGirlToys] = useState<IProduct[]>([]);
  const [babyToys, setBabyToys] = useState<IProduct[]>([]);
  const [isLoading, setIsLoading] = useState<boolean>(false);

  const handleFetchBoysToys = async () => {
    const toys = await toyService.get({
      page: 1,
      pageSize: 4,
      filter: { type: EToyType.MENINOS },
    });

    setBoyToys(toys.data.toys);
  };

  const handleFetchGirlsToys = async () => {
    const toys = await toyService.get({
      page: 1,
      pageSize: 4,
      filter: { type: EToyType.MENINAS },
    });

    setGirlToys(toys.data.toys);
  };

  const handleFetchBabyToys = async () => {
    const toys = await toyService.get({
      page: 3,
      pageSize: 1,
      filter: { type: EToyType.PARA_BEBÊS },
    });

    setBabyToys(toys.data.toys);
  };

  useEffect(() => {
    setIsLoading(true);

    try {
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

  const handleNavigateToChats = () => navigation.replace("ChatStack");

  const handleLogout = () => logout();

  if (isLoading)
    return (
      <View className="flex-1 items-center justify-center bg-backgroundSecondary">
        <Text>Carregando...</Text>
      </View>
    );

  return (
    <ScrollView
      className="relative bg-backgroundSecondary"
      style={{ paddingTop: statusBarHeight + 64 }}
      contentContainerStyle={{ paddingBottom: 64 }}
    >
      <View className="flex-row items-center justify-between w-full p-6">
        <Text className="text-2xl font-redHatDisplayMedium text-primary">
          Olá,{" "}
          <Text className="font-redHatDisplayBold text-highlight">
            {user?.name}
          </Text>
        </Text>

        <TouchableOpacity activeOpacity={0.85} onPress={handleLogout}>
          <MessageSquareText size={24} color={"#316A41"} />
        </TouchableOpacity>
      </View>

      <View className="flex-col items-center gap-y-12 w-full h-full p-6 pb-48 bg-backgroundPrimary rounded-t-3xl\">
        <Carousel
          width={carouselWidth}
          height={240}
          data={highlightScrollData}
        />

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
