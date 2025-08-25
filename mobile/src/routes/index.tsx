import { NavigationContainer } from "@react-navigation/native";
import {
  createNativeStackNavigator,
  NativeStackNavigationProp,
} from "@react-navigation/native-stack";
import { UserCreate } from "@src/common/Entities/User";

import Access from "@src/screens/Welcome/Access";
import Address from "@src/screens/Welcome/Address";
import Login from "@src/screens/Welcome/Login";
import Register from "@src/screens/Welcome/Register";

export type PropsNavigationStack = {
  Access: undefined;
  Login: undefined;
  Register: undefined;
  Address: {
    fieldsData: UserCreate;
  };
};

const Stack = createNativeStackNavigator<PropsNavigationStack>();

export type PropsStack = NativeStackNavigationProp<PropsNavigationStack>;

const Routes = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator
        screenOptions={{
          headerShown: false,
          animation: "none",
        }}
      >
        <Stack.Screen name="Access" component={Access} />
        <Stack.Screen name="Login" component={Login} />
        <Stack.Screen name="Register" component={Register} />
        <Stack.Screen name="Address" component={Address} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default Routes;
