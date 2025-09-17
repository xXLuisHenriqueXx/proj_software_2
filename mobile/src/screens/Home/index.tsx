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

import { productsData } from "@src/static/ProductsData";
import { highlightScrollData } from "@src/static/HighlightScrollData";
import { PropsAppStack } from "@src/routes/stacks/AppStack";
import useAuth from "@src/hooks/useAuth";

const Home = () => {
  const { width } = useWindowDimensions();
  const { logout } = useAuth();
  const statusBarHeight = Constants.statusBarHeight;
  const navigation = useNavigation<PropsAppStack>();

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
        <Text className="text-2xl font-redHatDisplaySemiBold text-primary">
          Olá, Luis
        </Text>

        <TouchableOpacity activeOpacity={0.85} onPress={handleLogout}>
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
          title="Qual gato é você?"
          subtitile="Descubra, colecione e imagine"
          data={productsData}
          limit={4}
        />

        <List
          title="Qual gato é você?"
          subtitile="Descubra, colecione e imagine"
          data={productsData}
          limit={4}
        />
      </View>
    </ScrollView>
  );
};

export default Home;
