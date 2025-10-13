import { useNavigation } from "@react-navigation/native";

import { PropsRoot } from "@src/routes";
import { PropsAuthStack } from "@src/routes/stacks/AuthStack";
import { PropsAppStack } from "@src/routes/stacks/AppStack";
import { PropsCreateStack } from "@src/routes/stacks/CreateStack";

export function useAppNavigation() {
  const rootNavigation = useNavigation<PropsRoot>();
  const authNavigation = useNavigation<PropsAuthStack>();
  const appNavigation = useNavigation<PropsAppStack>();
  const createNavigation = useNavigation<PropsCreateStack>();

  return { rootNavigation, authNavigation, appNavigation, createNavigation };
}
