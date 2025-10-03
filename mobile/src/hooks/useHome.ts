import { useEffect, useState } from "react";
import { useWindowDimensions } from "react-native";

import useAuth from "./useAuth";
import { IHighlight } from "@src/common/Entities/Highlight";
import { IProduct } from "@src/common/Entities/Product";
import { highlightService } from "@src/services/HighlightService";
import { toyService } from "@src/services/ToyService";
import { EToyType } from "@src/common/Interfaces/Toy.interface";

export function useHome() {
  const { width } = useWindowDimensions();
  const { logout, user } = useAuth();

  const [highlights, setHighlights] = useState<IHighlight[]>([]);
  const [boyToys, setBoyToys] = useState<IProduct[]>([]);
  const [girlToys, setGirlToys] = useState<IProduct[]>([]);
  const [babyToys, setBabyToys] = useState<IProduct[]>([]);
  const [isLoading, setIsLoading] = useState<boolean>(false);

  const handleFetchHighlights = async () => {
    const highlights = await highlightService.get();

    setHighlights(highlights.data);
  };

  const handleFetchBoysToys = async () => {
    const toys = await toyService.get({
      page: 1,
      pageSize: 4,
      filter: { type: EToyType.BOYS },
    });

    setBoyToys(toys.data.toys);
  };

  const handleFetchGirlsToys = async () => {
    const toys = await toyService.get({
      page: 1,
      pageSize: 4,
      filter: { type: EToyType.GIRLS },
    });

    setGirlToys(toys.data.toys);
  };

  const handleFetchBabyToys = async () => {
    const toys = await toyService.get({
      page: 3,
      pageSize: 1,
      filter: { type: EToyType.BABIES },
    });

    setBabyToys(toys.data.toys);
  };

  useEffect(() => {
    setIsLoading(true);

    try {
      handleFetchHighlights();
      handleFetchBoysToys();
      handleFetchGirlsToys();
      handleFetchBabyToys();
    } catch (error) {
      console.error(error);
    } finally {
      setIsLoading(false);
    }
  }, []);

  const carouselWidth = width - 48;

  const handleLogout = () => logout();

  return {
    user,
    handleLogout,
    highlights,
    boyToys,
    girlToys,
    babyToys,
    isLoading,
    carouselWidth,
  };
}
