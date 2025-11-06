import { useEffect, useState } from "react";
import { useWindowDimensions } from "react-native";
import Toast from "react-native-toast-message";

import { IProduct } from "@src/common/Entities/Product";
import { toyService } from "@src/services/ToyService";

export function useProductDetail(id: string) {
  const { width } = useWindowDimensions();

  const [product, setProduct] = useState<IProduct | null>(null);
  const [loading, setLoading] = useState<boolean>(false);
  const [favorited, setFavorited] = useState<boolean>(false);

  useEffect(() => {
    let isMounted = true;

    const fetchProduct = async () => {
      setLoading(true);
      try {
        const response = await toyService.getByID({ id });

        console.log(response?.data);
        if (isMounted) {
          setProduct(response?.data);
          setFavorited(response?.data?.isFavorited);
        }
      } catch (error: any) {
        Toast.show({
          type: "error",
          text1: "Aviso",
          text2: error.message || "Erro ao carregar o produto",
        });
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

  return {
    product,
    favorited,
    setFavorited,
    loading,
    characteristicWidth,
    width,
  };
}
