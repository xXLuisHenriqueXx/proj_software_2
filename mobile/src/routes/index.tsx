import { NavigationContainer } from "@react-navigation/native";
import {
  createNativeStackNavigator,
  NativeStackNavigationProp,
} from "@react-navigation/native-stack";

import AuthStack from "./stacks/AuthStack";
import AppTabs from "./tabs/AppTabs";

export type RootParamList = {
  AuthStack: undefined;
  AppTabs: undefined;
};

const Stack = createNativeStackNavigator<RootParamList>();

export type PropsRoot = NativeStackNavigationProp<RootParamList>;

const Routes = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator
        screenOptions={{
          headerShown: false,
          animation: "none",
        }}
      >
        <Stack.Screen name="AuthStack" component={AuthStack} />
        <Stack.Screen name="AppTabs" component={AppTabs} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default Routes;
