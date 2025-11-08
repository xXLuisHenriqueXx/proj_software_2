import { Button } from "@src/components/Button";
import { favoriteService } from "@src/services/FavoriteService";
import { historyService } from "@src/services/HistoryService";
import { toyService } from "@src/services/ToyService";
import { useAppNavigation } from "@src/hooks/useAppNavigation";
import { BottomSheetView } from "@gorhom/bottom-sheet";
import { Text, View } from "react-native";
import { styles } from "./styles";

type ActionType = "favorite" | "history" | "product";

interface ISheetProps {
  id: string;
  type: ActionType;
  onClose?: () => void;
}

const Sheet = ({ id, type, onClose }: ISheetProps) => {
  const { appNavigation } = useAppNavigation();

  const deleteHandlers = {
    favorite: () => favoriteService.delete({ toyId: id }),
    history: () => historyService.remove({ id }),
    product: () => toyService.delete({ id }),
  };

  const handleDelete = async () => {
    await deleteHandlers[type]();
    onClose?.();
  };

  const handleEdit = () => {
    if (type === "product") {
      appNavigation.navigate("UpdateProduct", { id });
    }
    onClose?.();
  };

  return (
    <BottomSheetView style={styles.container}>
      <Text style={styles.title}>
        {"Selecione a ação abaixo que deseja realizar"}
      </Text>

      <View style={styles.containerButtons}>
        {type === "product" && (
          <Button.Secondary text="Editar" onPress={handleEdit} />
        )}

        <Button.Destructive text="Excluir" onPress={handleDelete} />
      </View>
    </BottomSheetView>
  );
};

export default Sheet;
