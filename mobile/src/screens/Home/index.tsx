import { View, Text, TouchableOpacity, ScrollView } from "react-native";
import Constants from "expo-constants";
import { MessageSquareText } from "lucide-react-native";

import HighlightScroll from "./_components/HighlightScroll";
import Institutes from "./_components/Institutes";
import Benefit from "./_components/Benefit";
import List from "@src/components/List";

import { productsBarbieData } from "@src/static/ProductsBarbieData";

const Home = () => {
  const statusBarHeight = Constants.statusBarHeight;

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
        <HighlightScroll />

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
