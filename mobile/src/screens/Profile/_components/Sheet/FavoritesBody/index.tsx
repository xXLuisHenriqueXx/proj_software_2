import { Button } from "@src/components/Button";
import ActionBase from "../ActionBase";

import { favoriteService } from "@src/services/FavoriteService";

interface IFavoritesBodyProps {
  id: string;
  onClose?: () => void;
  onSuccess?: () => void;
}

const FavoritesBody = ({ id, onClose, onSuccess }: IFavoritesBodyProps) => {
  const handleDelete = async () => {
    await favoriteService.delete({ toyId: id });
    onSuccess?.();
    onClose?.();
  };

  return (
    <ActionBase>
      <Button.Destructive text="Excluir" onPress={handleDelete} />
    </ActionBase>
  );
};

export default FavoritesBody;
