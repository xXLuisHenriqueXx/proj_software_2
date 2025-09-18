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

const Home = () => {
  const { width } = useWindowDimensions();
  const { logout, user } = useAuth();
  const statusBarHeight = Constants.statusBarHeight;
  const navigation = useNavigation<PropsAppStack>();

  const [boyToys, setBoyToys] = useState<IProduct[]>([]);
  const [girlToys, setGirlToys] = useState<IProduct[]>([]);

  const handleFetchBoysToys = async () => {
    const toys = await toyService.get({
      page: 1,
      pageSize: 4,
    });

    console.log("Boys: ", toys.data);

    setBoyToys(toys.data.toys);
  };

  const handleFetchGirlsToys = async () => {
    const toys = await toyService.get({
      page: 2,
      pageSize: 4,
    });

    console.log("Girls: ", toys.data);

    setGirlToys(toys.data.toys);
  };

  useEffect(() => {
    handleFetchBoysToys();
    handleFetchGirlsToys();
  }, []);

  const carouselWidth = width - 48;

  const handleNavigateToChats = () => navigation.replace("ChatStack");

  const handleLogout = () => logout();

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

        {/*
        <List
          title="Brinquedos para meninos? Temos!"
          subtitile="Dê uma olhada nos nossos produtos"
          data={boyToys}
          limit={4}
        />

        <List
          title="Brinquedos para meninas? Temos!"
          subtitile="Dê uma olhada nos nossos produtos"
          data={girlToys}
          limit={4}
        />
*/}
      </View>
    </ScrollView>
  );
};

export default Home;
