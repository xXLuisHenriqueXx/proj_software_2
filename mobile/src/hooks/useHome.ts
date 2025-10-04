import { useEffect, useState } from "react";
import { useWindowDimensions } from "react-native";

import useAuth from "./useAuth";
import { IHighlight } from "@src/common/Entities/Highlight";
import { IProduct } from "@src/common/Entities/Product";
import { highlightService } from "@src/services/HighlightService";
import { toyService } from "@src/services/ToyService";
import { EToyType, IFilter } from "@src/common/Interfaces/Toy.interface";
import Toast from "react-native-toast-message";
import { PropsRoot } from "@src/routes";
import { useNavigation } from "@react-navigation/native";

export function useHome() {
  const { width } = useWindowDimensions();
  const { logout, user } = useAuth();

  const navigation = useNavigation<PropsRoot>();

  const [highlights, setHighlights] = useState<IHighlight[]>([]);
  const [forYouToys, setForYouToys] = useState<IProduct[]>([]);
  const [boyToys, setBoyToys] = useState<IProduct[]>([]);
  const [girlToys, setGirlToys] = useState<IProduct[]>([]);
  const [babyToys, setBabyToys] = useState<IProduct[]>([]);
  const [isLoading, setIsLoading] = useState<boolean>(false);

  const fetchToys = async (
    setToys: (toys: IProduct[]) => void,
    filter?: IFilter
  ) => {
    const toys = await toyService.get({ page: 1, pageSize: 4, filter });

    setToys(toys.data.toys);
  };

  const handleFetchHighlights = async () => {
    const response = await highlightService.get();

    setHighlights(response.data);
  };

  const handleLoadData = async () => {
    setIsLoading(true);

    try {
      await Promise.all([
        handleFetchHighlights(),
        fetchToys(setForYouToys),
        fetchToys(setBoyToys, { type: EToyType.BOYS }),
        fetchToys(setGirlToys, { type: EToyType.GIRLS }),
        fetchToys(setBabyToys, { type: EToyType.BABIES }),
      ]);
    } catch (error: any) {
      Toast.show({
        type: "error",
        text1: "Aviso",
        text2: error.message || "Erro ao fazer cadastro",
      });
    } finally {
      setIsLoading(false);
    }
  };

  useEffect(() => {
    handleLoadData();
  }, []);

  const handleLogout = async () => {
    await logout();

    navigation.replace("AuthStack");
  };

  return {
    user,
    handleLogout,
    highlights,
    forYouToys,
    boyToys,
    girlToys,
    babyToys,
    isLoading,
    carouselWidth: width - 48,
  };
}
