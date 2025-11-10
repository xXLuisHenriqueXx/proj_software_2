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
  const [page, setPage] = useState<number>(1);
  const [totalPages, setTotalPages] = useState<number>(1);
  const [loading, setLoading] = useState<boolean>(false);
  const [refreshing, setRefreshing] = useState<boolean>(false);
  const [loadingMore, setLoadingMore] = useState<boolean>(false);

  const handleLoadData = async () => {
    setLoading(true);

    try {
      const [h, i, toyResponse] = await Promise.all([
        fetchHighlights(),
        fetchInstitutes(),
        fetchToys(1, 20),
      ]);

      setToys(toyResponse.toys);
      setPage(toyResponse.page);
      setTotalPages(toyResponse.totalPages);
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

  const handleLoadMore = async () => {
    if (loadingMore || page >= totalPages) return;

    setLoadingMore(true);
    try {
      const nextPage = page + 1;
      const response = await fetchToys(nextPage, 20);

      setToys((prev) => [...prev, ...response.toys]);
      setPage(response.page);
      setTotalPages(response.totalPages);
    } catch (error: any) {
      Toast.show({
        type: "error",
        text1: "Aviso",
        text2: error.message || "Erro ao carregar mais dados",
      });
    } finally {
      setLoadingMore(false);
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
    loadingMore,
    handleLoadMore,
  };
}
