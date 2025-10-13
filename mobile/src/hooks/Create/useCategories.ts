import { useState } from "react";
import { useWindowDimensions } from "react-native";
import Toast from "react-native-toast-message";

import {
  EToyType,
  IFieldsToyCreateMain,
  IToyCreate,
} from "@src/common/Interfaces/Toy.interface";
import { toyService } from "@src/services/ToyService";
import { useAppNavigation } from "../useAppNavigation";

export function useCategories(fields: IFieldsToyCreateMain) {
  const { width } = useWindowDimensions();
  const { appNavigation, createNavigation } = useAppNavigation();

  const [categories, setCategories] = useState<EToyType[]>([]);
  const [loading, setLoading] = useState<boolean>(false);

  const handleSelectCategory = (category: EToyType) => {
    if (categories.includes(category)) {
      setCategories(categories.filter((item) => item !== category));
    } else {
      setCategories([...categories, category]);
    }
  };

  const handleCreate = async () => {
    setLoading(true);

    try {
      const params: IToyCreate = {
        name: fields.name,
        description: fields.description,
        price: fields.canLend || fields.canTrade ? 0 : Number(fields.price),
        isNew: fields.isNew,
        canTrade: fields.canTrade,
        canLend: fields.canLend,
        usageTime: 1,
        type: categories,
        ageGroup: fields.ageGroup,
        pictures: fields.pictures,
        discount: 0,
      };

      await toyService.create(params);

      appNavigation.replace("AppTabs");
    } catch (error: any) {
      Toast.show({
        type: "error",
        text1: "Aviso",
        text2: error.message || "Erro ao criar o produto",
      });
    } finally {
      setLoading(false);
    }
  };

  const widthCategory = (width - 48 - 16) / 2;

  return {
    categories,
    loading,
    widthCategory,
    createNavigation,
    appNavigation,
    handleSelectCategory,
    handleCreate,
  };
}
