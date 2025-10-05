import { useEffect, useState } from "react";
import { Linking } from "react-native";
import Toast from "react-native-toast-message";
import * as Clipboard from "expo-clipboard";

import { IInstitute } from "@src/common/Entities/Institute";
import { instituteService } from "@src/services/InstituteService";

export function useInstituteDetail(id: string) {
  const [institute, setInstitute] = useState<IInstitute | null>(null);
  const [loading, setLoading] = useState<boolean>(false);

  useEffect(() => {
    let isMounted = true;

    const fetchProduct = async () => {
      setLoading(true);
      try {
        const response = await instituteService.getByID({ id });
        if (isMounted) setInstitute(response.data);
      } catch (error: any) {
        Toast.show({
          type: "error",
          text1: "Aviso",
          text2: error.message || "Erro ao carregar o instituto",
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

  const handleOpenSite = async () => {
    if (!institute?.online) return;

    await Linking.openURL(institute.online);
  };

  const handleCopyPixKey = async () => {
    await Clipboard.setStringAsync(institute?.pix_key ?? "");
    Toast.show({
      type: "success",
      text1: "Aviso",
      text2: "Chave PIX copiada para área de transferência",
    });
  };

  return { institute, loading, handleOpenSite, handleCopyPixKey };
}
