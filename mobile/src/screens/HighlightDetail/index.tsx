import { useEffect, useState } from "react";
import { Image, Text, View } from "react-native";
import { styles } from "./styles";

import { NativeStackScreenProps } from "@react-navigation/native-stack";
import { useAppNavigation } from "@src/hooks/useAppNavigation";
import { AppStackParamList } from "@src/routes/stacks/AppStack";
import List from "@src/components/List";
import { IHighlightWithToys } from "@src/common/Entities/Highlight";
import { highlightService } from "@src/services/HighlightService";
import Toast from "react-native-toast-message";
import Loader from "@src/components/Loader";
import { Header } from "@src/components/Header";
import { ChevronLeft } from "lucide-react-native";
import { baseURL } from "@src/services/Api";

type Props = NativeStackScreenProps<AppStackParamList, "HighlightDetail">;

const HighlightDetail = ({ route }: Props) => {
  const { id } = route.params || {};
  const { appNavigation } = useAppNavigation();

  const [loading, setLoading] = useState<boolean>(true);
  const [highlight, setHighlight] = useState<IHighlightWithToys | null>(null);

  const fetchHighlight = async () => {
    try {
      const response = await highlightService.getById({ id });

      setHighlight(response);
    } catch (error: any) {
      Toast.show({
        type: "error",
        text1: "Aviso",
        text2: error.message || "Erro ao carregar o produto",
      });
    } finally {
      setLoading(false);
    }
  };

  const uri =
    highlight?.picture.startsWith("data:image") ||
    highlight?.picture.startsWith("http")
      ? highlight?.picture
      : `${baseURL}${highlight?.picture}`;

  useEffect(() => {
    fetchHighlight();
  }, []);

  if (loading) return <Loader />;

  return (
    <List
      header={
        <View style={styles.containerHeader}>
          <Header.Root>
            <Header.LeftIcon
              icon={ChevronLeft}
              onPress={() => appNavigation.goBack()}
            />
            <Header.Content title={highlight?.name ?? ""} />
          </Header.Root>

          <Image style={styles.image} source={{ uri }} resizeMode="cover" />

          <Text style={styles.descriptionText}>{highlight?.description}</Text>
        </View>
      }
      data={highlight?.toys || []}
    />
  );
};

export default HighlightDetail;
