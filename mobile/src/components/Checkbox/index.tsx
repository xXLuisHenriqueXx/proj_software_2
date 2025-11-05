import { memo, useMemo } from "react";
import { View } from "react-native";
import { styles } from "./styles";
import { Check } from "lucide-react-native";

import { BACKGROUND_PRIMARY_COLOR } from "@src/constants/Colors";

interface ICheckboxProps {
  checked: boolean;
}

const Checkbox = ({ checked }: ICheckboxProps) => {
  const renderIcon = useMemo(
    () =>
      checked ? (
        <View style={styles.checkbox}>
          <Check size={12} color={BACKGROUND_PRIMARY_COLOR} />
        </View>
      ) : null,
    [checked]
  );

  return <View style={styles.container}>{renderIcon}</View>;
};

export default memo(Checkbox);
