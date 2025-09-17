import { NavigationContainer } from "@react-navigation/native";
import {
  createNativeStackNavigator,
  NativeStackNavigationProp,
} from "@react-navigation/native-stack";

import AuthStack from "./stacks/AuthStack";
import AppStack from "./stacks/AppStack";
import useAuth from "@src/hooks/useAuth";

export type RootParamList = {
  AuthStack: undefined;
  AppStack: undefined;
};

const Stack = createNativeStackNavigator<RootParamList>();

export type PropsRoot = NativeStackNavigationProp<RootParamList>;

const Routes = () => {
  const { token } = useAuth();

  return (
    <NavigationContainer>
      <Stack.Navigator
        screenOptions={{
          headerShown: false,
          animation: "none",
        }}
        initialRouteName={token ? "AppStack" : "AuthStack"}
      >
        <Stack.Screen name="AuthStack" component={AuthStack} />
        <Stack.Screen name="AppStack" component={AppStack} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default Routes;
