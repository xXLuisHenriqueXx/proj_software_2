import { useEffect, useState } from "react";
import Toast from "react-native-toast-message";

import { EToyType } from "@src/common/Interfaces/Toy.interface";
import { IProduct } from "@src/common/Entities/Product";
import { useHighlightsStore } from "@src/stores/HighlightStore";
import { useInstitutesStore } from "@src/stores/InstituteStore";
import { useToys } from "@src/hooks/useToys";

export function useHome() {
  const { fetchToys } = useToys();
  const { highlights, fetchHighlights } = useHighlightsStore();
  const { institutes, fetchInstitutes } = useInstitutesStore();

  const [toys, setToys] = useState<IProduct[]>([]);
  const [loading, setLoading] = useState<boolean>(false);
  const [refreshing, setRefreshing] = useState<boolean>(false);

  const handleLoadData = async () => {
    setLoading(true);

    try {
      await Promise.all([
        fetchHighlights(),
        fetchInstitutes(),
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
      await fetchToys(1, 20, { search, type }).then((toys) => setToys(toys));
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
    onRefresh,
    refreshing,
    highlights,
    institutes,
    toys,
    loading,
    handleSearch,
  };
}
