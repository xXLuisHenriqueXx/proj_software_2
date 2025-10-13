import { useState, useCallback } from "react";

import { toyService } from "@src/services/ToyService";
import { IFilter } from "@src/common/Interfaces/Toy.interface";
import { IProduct } from "@src/common/Entities/Product";

export function useToys() {
  const [loading, setLoading] = useState<boolean>(false);

  const fetchToys = useCallback(
    async (
      page: number = 1,
      pageSize: number = 20,
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

  return { loading, fetchToys };
}
