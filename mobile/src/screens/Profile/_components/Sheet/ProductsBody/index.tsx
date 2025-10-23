import { Button } from "@src/components/Button";
import ActionBase from "../ActionBase";

import { toyService } from "@src/services/ToyService";
import { useAppNavigation } from "@src/hooks/useAppNavigation";

interface IProductsBodyProps {
  id: string;
  onClose?: () => void;
  onSuccess?: () => void;
}

const ProductsBody = ({ id, onClose, onSuccess }: IProductsBodyProps) => {
  const { appNavigation } = useAppNavigation();

  const handleDelete = async () => {
    await toyService.delete({ id });
    onSuccess?.();
    onClose?.();
  };

  const handleEdit = () => {
    appNavigation.navigate("UpdateProduct", { id });
    onClose?.();
  };

  return (
    <ActionBase>
      <Button.Secondary text="Editar" onPress={handleEdit} />
      <Button.Destructive text="Excluir" onPress={handleDelete} />
    </ActionBase>
  );
};

export default ProductsBody;
