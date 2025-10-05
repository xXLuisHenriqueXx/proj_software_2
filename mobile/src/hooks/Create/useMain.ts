import { useState } from "react";
import { useNavigation } from "@react-navigation/native";

import { EAgeRange, IFieldsToyCreateMain } from "@src/common/Interfaces/Toy.interface";
import { PropsAppStack } from "@src/routes/stacks/AppStack";
import { PropsCreateStack } from "@src/routes/stacks/CreateStack";

export function useMain() {
    const rootNavigation = useNavigation<PropsAppStack>();
      const createNavigation = useNavigation<PropsCreateStack>();

      const [fields, setFields] = useState<IFieldsToyCreateMain>({
        name: "",
        description: "",
        price: "",
        isNew: false,
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

      return { fields, setFields, handleNavigateToCategories, rootNavigation, createNavigation };
}