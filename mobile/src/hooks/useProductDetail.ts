import { IProduct } from "@src/common/Entities/Product";
import { toyService } from "@src/services/ToyService";
import { useEffect, useState } from "react";
import { useWindowDimensions } from "react-native";

export function useProductDetail(id: string) {
  const { width } = useWindowDimensions();

  const [product, setProduct] = useState<IProduct | null>(null);
  const [loading, setLoading] = useState<boolean>(false);

  useEffect(() => {
    let isMounted = true;

    const fetchProduct = async () => {
      setLoading(true);
      try {
        const response = await toyService.getByID({ id });
        if (isMounted) setProduct(response.data);
      } catch (error) {
        console.error("Error fetching product:", error);
      } finally {
        if (isMounted) setLoading(false);
      }
    };

    fetchProduct();
    return () => {
      isMounted = false;
    };
  }, [id]);

  const characteristicWidth = (width - 48 - 16) / 2;

  return { product, loading, characteristicWidth, width };
}
