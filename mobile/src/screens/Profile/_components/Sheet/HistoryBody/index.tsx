import { Button } from "@src/components/Button";

import { historyService } from "@src/services/HistoryService";
import ActionBase from "../ActionBase";

interface IHistoryBodyProps {
  id: string;
  onClose?: () => void;
  onSuccess?: () => void;
}

const HistoryBody = ({ id, onClose, onSuccess }: IHistoryBodyProps) => {
  const handleDelete = async () => {
    await historyService.remove({ id });
    onSuccess?.();
    onClose?.();
  };

  return (
    <ActionBase>
      <Button.Destructive text="Excluir" onPress={handleDelete} />
    </ActionBase>
  );
};

export default HistoryBody;
