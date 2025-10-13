import { useState } from "react";

import {
  EAgeRange,
  IFieldsToyCreateMain,
} from "@src/common/Interfaces/Toy.interface";
import { useAppNavigation } from "../useAppNavigation";

export function useMain() {
  const { appNavigation, createNavigation } = useAppNavigation();

  const [fields, setFields] = useState<IFieldsToyCreateMain>({
    name: "",
    description: "",
    price: "",
    isNew: true,
    canTrade: false,
    canLend: false,
    usageTime: "",
    ageGroup: EAgeRange.ZERO_TO_ONE,
    pictures: [],
    discount: "",
  });

  const handleNavigateToCategories = () => {
    createNavigation.navigate("Categories", { fields });
  };

  return {
    fields,
    setFields,
    handleNavigateToCategories,
    appNavigation,
    createNavigation,
  };
}
