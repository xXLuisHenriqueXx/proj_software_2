import {
  View,
  Text,
  TouchableOpacity,
  ScrollView,
  useWindowDimensions,
} from "react-native";
import Constants from "expo-constants";
import { MessageSquareText } from "lucide-react-native";

import Institutes from "./_components/Institutes";
import Benefit from "./_components/Benefit";
import List from "@src/components/List";
import Carousel from "@src/components/Carousel";

import { productsBarbieData } from "@src/static/ProductsBarbieData";
import { highlightScrollData } from "@src/static/HighlightScrollData";

const Home = () => {
  const { width } = useWindowDimensions();
  const statusBarHeight = Constants.statusBarHeight;

  const carouselWidth = width - 48;

  return (
    <ScrollView
      className="relative bg-backgroundSecondary"
      style={{ paddingTop: statusBarHeight }}
    >
      <View className="flex-row items-center justify-between w-full p-6">
        <Text className="text-2xl font-redHatDisplaySemiBold text-primary">
          Olá, Luis
        </Text>

        <TouchableOpacity activeOpacity={0.85}>
          <MessageSquareText size={24} color={"#316A41"} />
        </TouchableOpacity>
      </View>

      <View className="flex-col items-center gap-y-12 w-full h-full p-6 pb-48 bg-backgroundPrimary rounded-t-3xl">
        <Carousel
          width={carouselWidth}
          height={240}
          data={highlightScrollData}
        />

        <Institutes />

        <Benefit />

        <List
          title="Qual barbie é você?"
          subtitile="Descubra, colecione e imagine"
          data={productsBarbieData}
          limit={4}
        />

        <List
          title="Qual barbie é você?"
          subtitile="Descubra, colecione e imagine"
          data={productsBarbieData}
          limit={4}
        />
      </View>
    </ScrollView>
  );
};

export default Home;
