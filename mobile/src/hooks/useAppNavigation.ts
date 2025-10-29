import { useNavigation } from "@react-navigation/native";

import { PropsRoot } from "@src/routes";
import { PropsAuthStack } from "@src/routes/stacks/AuthStack";
import { PropsAppStack } from "@src/routes/stacks/AppStack";
import { PropsChatStack } from "@src/routes/stacks/ChatStack";

export function useAppNavigation() {
  const rootNavigation = useNavigation<PropsRoot>();
  const authNavigation = useNavigation<PropsAuthStack>();
  const appNavigation = useNavigation<PropsAppStack>();
  const chatNavigation = useNavigation<PropsChatStack>();

  return { rootNavigation, authNavigation, appNavigation, chatNavigation };
}
