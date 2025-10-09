import { useEffect, useState } from "react";
import { useWindowDimensions } from "react-native";
import Toast from "react-native-toast-message";

import useAuth from "./useAuth";
import { IHighlight } from "@src/common/Entities/Highlight";
import { highlightService } from "@src/services/HighlightService";
import { IInstitute } from "@src/common/Entities/Institute";
import { instituteService } from "@src/services/InstituteService";
import { EToyType } from "@src/common/Interfaces/Toy.interface";
import { IProduct } from "@src/common/Entities/Product";
import { useToysQuery } from "./Toys/useToysQuery";

export function useHome() {
  const { width } = useWindowDimensions();
  const { user } = useAuth();
  const { fetchToys } = useToysQuery();

  const [highlights, setHighlights] = useState<IHighlight[]>([]);
  const [institutes, setInstitutes] = useState<IInstitute[]>([]);
  const [toys, setToys] = useState<IProduct[]>([]);
  const [category, setCategory] = useState<EToyType>();
  const [loading, setLoading] = useState<boolean>(false);
  const [refreshing, setRefreshing] = useState<boolean>(false);

  const handleFetchHighlights = async () => {
    const response = await highlightService.get();

    setHighlights(response.data);
  };

  const handleFetchInstitutes = async () => {
    const response = await instituteService.get();

    setInstitutes(response.data);
  };

  const handleLoadData = async () => {
    setLoading(true);

    try {
      await Promise.all([
        handleFetchHighlights(),
        handleFetchInstitutes(),
        fetchToys().then((toys) => setToys(toys)),
      ]);
    } catch (error: any) {
      Toast.show({
        type: "error",
        text1: "Aviso",
        text2: error.message || "Erro ao fazer cadastro",
      });
    } finally {
      setLoading(false);
    }
  };

  const handleSearch = async (search?: string, type?: EToyType) => {
    setLoading(true);

    try {
      await fetchToys(1, 10, { search, type }).then((toys) => setToys(toys));
    } catch (error: any) {
      Toast.show({
        type: "error",
        text1: "Aviso",
        text2: error.message || "Erro ao fazer cadastro",
      });
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    handleLoadData();
  }, []);

  const onRefresh = () => {
    setRefreshing(true);

    try {
      setCategory(undefined);
      handleLoadData();
    } catch (error: any) {
      Toast.show({
        type: "error",
        text1: "Aviso",
        text2: error.message || "Erro ao fazer cadastro",
      });
    } finally {
      setRefreshing(false);
    }
  };

  return {
    user,
    onRefresh,
    refreshing,
    category,
    setCategory,
    highlights,
    institutes,
    toys,
    loading,
    handleSearch,
    carouselWidth: width - 48,
  };
}
