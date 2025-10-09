import { useCallback, useEffect, useState } from "react";
import { useToysQuery } from "./Toys/useToysQuery";
import { IProduct } from "@src/common/Entities/Product";
import { EToyType } from "@src/common/Interfaces/Toy.interface";

export function useSearch() {
  const { searchToys, recents, loading, loadRecents } = useToysQuery();

  const [isFocused, setIsFocused] = useState<boolean>(false);
  const [search, setSearch] = useState<string>("");
  const [toys, setSearchToys] = useState<IProduct[]>([]);

  const handleFocus = useCallback(() => setIsFocused(true), []);
  const handleEndEditing = useCallback(() => {
    setIsFocused(false);
    searchToys(search).then((toys) => setSearchToys(toys));
  }, [search]);

  const handleSearchWithCategory = useCallback((type: EToyType) => {
    searchToys(type).then((toys) => setSearchToys(toys));
  }, []);

  const handleSearchWithFeatured = useCallback((search: string) => {
    searchToys(search).then((toys) => setSearchToys(toys));
  }, []);

  const handleCloseList = useCallback(() => {
    setSearch("");
  }, []);

  useEffect(() => {
    loadRecents();
  }, [loadRecents]);

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
    handleCloseList,
    shouldShowList,
    shouldShowFeatured,
  };
}
