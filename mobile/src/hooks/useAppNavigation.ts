import { useNavigation } from "@react-navigation/native";

import { PropsRoot } from "@src/routes";
import { PropsAuthStack } from "@src/routes/stacks/AuthStack";
import { PropsAppStack } from "@src/routes/stacks/AppStack";

export function useAppNavigation() {
  const rootNavigation = useNavigation<PropsRoot>();
  const authNavigation = useNavigation<PropsAuthStack>();
  const appNavigation = useNavigation<PropsAppStack>();

  return { rootNavigation, authNavigation, appNavigation };
}
