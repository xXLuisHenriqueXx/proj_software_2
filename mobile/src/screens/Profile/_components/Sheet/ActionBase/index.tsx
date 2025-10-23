import type { ReactNode } from "react";
import { View, Text } from "react-native";
import { styles } from "./styles";
import { BottomSheetView } from "@gorhom/bottom-sheet";

interface IActionBaseProps {
  title?: string;
  children: ReactNode;
}

const ActionBase = ({ title, children }: IActionBaseProps) => {
  return (
    <BottomSheetView style={styles.containerBottom}>
      <Text style={styles.title}>
        {title ?? "Selecione a ação abaixo que deseja realizar"}
      </Text>

      <View style={styles.containerButtons}>{children}</View>
    </BottomSheetView>
  );
};

export default ActionBase;
