import { NavigationContainer } from "@react-navigation/native";
import {
  createNativeStackNavigator,
  NativeStackNavigationProp,
} from "@react-navigation/native-stack";

import AuthStack from "./stacks/AuthStack";
import AppStack from "./stacks/AppStack";

export type RootParamList = {
  AuthStack: undefined;
  AppStack: undefined;
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
        <Stack.Screen name="AppStack" component={AppStack} />
        <Stack.Screen name="AuthStack" component={AuthStack} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default Routes;
