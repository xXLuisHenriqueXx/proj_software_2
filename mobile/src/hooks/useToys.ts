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
    ): Promise<{
      toys: IProduct[];
      page: number;
      pageSize: number;
      totalPages: number;
      total?: number;
    }> => {
      setLoading(true);
      try {
        // 🧹 Clean up the filter to avoid empty strings
        const cleanedFilter = filter
          ? Object.fromEntries(
              Object.entries(filter).filter(
                ([, value]) =>
                  value !== "" && value !== undefined && value !== null
              )
            )
          : undefined;

        const response = await toyService.get({
          page,
          pageSize,
          filter: cleanedFilter,
        });

        const data = response?.data || {};

        return {
          toys: data.toys ?? [],
          page: data.page ?? 1,
          pageSize: data.pageSize ?? pageSize,
          totalPages: data.totalPages ?? 1,
          total: data.total ?? data.toys?.length ?? 0,
        };
      } catch (error) {
        console.error("fetchToys error:", error);
        return {
          toys: [],
          page: 1,
          pageSize,
          totalPages: 1,
          total: 0,
        };
      } finally {
        setLoading(false);
      }
    },
    []
  );

  return { loading, fetchToys };
}
