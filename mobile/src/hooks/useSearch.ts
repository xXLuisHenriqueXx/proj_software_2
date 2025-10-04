import { useCallback, useEffect, useState } from "react";

import { IProduct } from "@src/common/Entities/Product";
import { EToyType, IFilter } from "@src/common/Interfaces/Toy.interface";
import { recentSearchService } from "@src/services/RecentSearchService";
import { toyService } from "@src/services/ToyService";

export function useSearch() {
  const [isFocused, setIsFocused] = useState<boolean>(false);
  const [search, setSearch] = useState<string>("");
  const [recents, setRecents] = useState<string[]>([]);
  const [data, setData] = useState<IProduct[]>([]);
  const [loading, setLoading] = useState<boolean>(false);

  const fetchToys = useCallback(async (filter?: IFilter) => {
    setLoading(true);

    try {
      const response = await toyService.get({ page: 1, pageSize: 4, filter });
      setData(response.data.toys);
    } catch {
      setData([]);
    } finally {
      setLoading(false);
    }
  }, []);

  const handleSearch = useCallback(async () => {
    if (!search.trim()) return;

    setLoading(true);

    try {
      const [toyResponse] = await Promise.all([
        toyService.get({ filter: { search } }),
        recentSearchService.save(search),
      ]);

      setData(toyResponse.data.toys);
      setRecents((prev) => Array.from(new Set([...prev, search])));
    } catch {
      setData([]);
    } finally {
      setLoading(false);
    }
  }, [search]);

  const handleSearchWithCategory = useCallback(
    async (value: EToyType) => {
      await fetchToys({ type: value });
    },
    [fetchToys]
  );

  const handleFocus = useCallback(() => setIsFocused(true), []);
  const handleEndEditing = useCallback(() => {
    setIsFocused(false);
    handleSearch();
  }, [handleSearch]);

  useEffect(() => {
    (async () => {
      try {
        const response = await recentSearchService.getAll();
        setRecents(response);
      } catch {
        setRecents([]);
      }
    })();
  }, []);

  const handleCloseList = useCallback(() => {
    setData([]);
    setSearch("");
  }, []);

  const shouldShowFeatured = !isFocused && data.length === 0;
  const shouldShowList = !isFocused && data.length > 0;

  return {
    isFocused,
    search,
    setSearch,
    recents,
    data,
    loading,
    handleSearch,
    handleFocus,
    handleEndEditing,
    handleSearchWithCategory,
    handleCloseList,
    shouldShowList,
    shouldShowFeatured,
  };
}
