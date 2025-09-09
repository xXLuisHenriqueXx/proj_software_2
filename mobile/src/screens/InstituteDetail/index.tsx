import {
  Image,
  ScrollView,
  Text,
  TouchableOpacity,
  useWindowDimensions,
  View,
} from "react-native";
import { useNavigation } from "@react-navigation/native";
import { NativeStackScreenProps } from "@react-navigation/native-stack";
import Constants from "expo-constants";
import { X } from "lucide-react-native";

import { AppStackParamList, PropsAppStack } from "@src/routes/stacks/AppStack";

type Props = NativeStackScreenProps<AppStackParamList, "InstituteDetail">;

const InstituteDetail = ({ route }: Props) => {
  const { institute } = route.params || {};
  const { width } = useWindowDimensions();

  const navigation = useNavigation<PropsAppStack>();
  const statusBarHeight = Constants.statusBarHeight;

  const infoWidth = (width - 48 - 16) / 2;

  return (
    <ScrollView
      className="flex-1 bg-backgroundPrimary"
      showsVerticalScrollIndicator={false}
      contentContainerStyle={{
        paddingTop: statusBarHeight + 32,
        paddingBottom: 32,
        rowGap: 48,
      }}
    >
      <View className="flex-row items-center justify-between w-full px-6 py-4">
        <Text className="text-2xl font-redHatDisplaySemiBold text-primary">
          Instituições assistenciais
        </Text>

        <TouchableOpacity
          activeOpacity={0.85}
          onPress={() => navigation.goBack()}
        >
          <X size={20} color={"#13131399"} />
        </TouchableOpacity>
      </View>

      <View className="flex-col gap-y-6 w-full px-6">
        <View className="flex-col gap-y-4">
          <Image
            className="w-28 h-28 rounded-2xl"
            source={{ uri: institute.src }}
            resizeMode="cover"
          />

          <View className="flex-col gap-y-1">
            <Text
              className="text-2xl font-redHatDisplaySemiBold text-primary"
              numberOfLines={2}
            >
              {institute.name}
            </Text>
            <Text className="text-base font-redHatDisplayRegular text-primary/60">
              {institute.ageRange}
            </Text>
          </View>

          <Text className="text-lg font-redHatDisplayRegular text-primary">
            {institute.description}
          </Text>
        </View>

        <View className="flex-row flex-wrap justify-between gap-4 w-full">
          <View className="flex-col" style={{ width: infoWidth }}>
            <Text className="text-base font-redHatDisplaySemiBold text-primary">
              Telefone
            </Text>
            <Text className="text-base font-redHatDisplayRegular text-primary/60">
              {institute.phone}
            </Text>
          </View>

          <View className="flex-col" style={{ width: infoWidth }}>
            <Text className="text-base font-redHatDisplaySemiBold text-primary">
              Online
            </Text>
            <Text className="text-base font-redHatDisplayRegular text-primary/60">
              {institute.online}
            </Text>
          </View>

          <View className="flex-col w-full">
            <Text className="text-base font-redHatDisplaySemiBold text-primary">
              Endereço
            </Text>
            <Text className="text-base font-redHatDisplayRegular text-primary/60">
              {institute.address}
            </Text>
          </View>
        </View>

        <View className="w-full h-44 bg-backgroundSecondary rounded-xl" />
      </View>
    </ScrollView>
  );
};

export default InstituteDetail;
