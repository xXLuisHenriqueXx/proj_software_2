import { useCallback, useEffect, useState } from "react";

import { IProduct } from "@src/common/Entities/Product";
import { EToyType } from "@src/common/Interfaces/Toy.interface";
import { useToys } from "./useToys";
import { useRecentsStore } from "@src/stores/RecentsStore";

export function useSearch() {
  const { fetchToys, loading } = useToys();
  const { recents, fetchRecents } = useRecentsStore();

  const [isFocused, setIsFocused] = useState<boolean>(false);
  const [search, setSearch] = useState<string>("");
  const [toys, setSearchToys] = useState<IProduct[]>([]);

  const handleFocus = useCallback(() => setIsFocused(true), []);
  const handleEndEditing = useCallback(() => {
    setIsFocused(false);
    fetchToys(1, 10, { search }).then((toys) => setSearchToys(toys));
  }, [search]);

  const handleSearchWithCategory = useCallback((type: EToyType) => {
    fetchToys(1, 10, { type }).then((toys) => setSearchToys(toys));
  }, []);

  const handleSearchWithFeatured = useCallback((search: string) => {
    fetchToys(1, 10, { search }).then((toys) => setSearchToys(toys));
  }, []);

  useEffect(() => {
    fetchRecents();
  }, [fetchRecents]);

  const shouldShowFeatured = !isFocused && toys.length === 0;
  const shouldShowList = !isFocused && toys.length > 0;

  return {
    isFocused,
    search,
    setSearch,
    recents,
    data: toys,
    loading,
    handleFocus,
    handleEndEditing,
    handleSearchWithCategory,
    handleSearchWithFeatured,
    shouldShowList,
    shouldShowFeatured,
  };
}
