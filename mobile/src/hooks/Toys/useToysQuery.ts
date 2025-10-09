import { useState, useCallback } from "react";

import { toyService } from "@src/services/ToyService";
import { recentSearchService } from "@src/services/RecentSearchService";
import { EToyType, IFilter } from "@src/common/Interfaces/Toy.interface";
import { IProduct } from "@src/common/Entities/Product";

export function useToysQuery() {
  const [loading, setLoading] = useState<boolean>(false);
  const [recents, setRecents] = useState<string[]>([]);

  const fetchToys = useCallback(
    async (
      page: number = 1,
      pageSize: number = 10,
      filter?: IFilter
    ): Promise<IProduct[]> => {
      setLoading(true);
      try {
        const response = await toyService.get({
          page,
          pageSize,
          filter,
        });

        const { toys } = response?.data;

        return toys;
      } catch {
        return [];
      } finally {
        setLoading(false);
      }
    },
    []
  );

  const searchToys = useCallback(
    async (search?: string, type?: EToyType): Promise<IProduct[]> => {
      const toys = await fetchToys(1, 10, { search, type });

      return toys;
    },
    []
  );

  const loadRecents = useCallback(async () => {
    try {
      const response = await recentSearchService.getAll();
      setRecents(response);
    } catch {
      setRecents([]);
    }
  }, []);

  return {
    recents,
    loading,
    fetchToys,
    searchToys,
    loadRecents,
  };
}
