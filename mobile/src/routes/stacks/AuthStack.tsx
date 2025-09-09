import React from "react";
import {
  createNativeStackNavigator,
  NativeStackNavigationProp,
} from "@react-navigation/native-stack";

import Access from "@src/screens/Welcome/Access";
import Login from "@src/screens/Welcome/Login";
import Register from "@src/screens/Welcome/Register";
import Address from "@src/screens/Welcome/Address";

import { IUserCreate } from "@src/common/Entities/User";

export type AuthStackParamList = {
  Access: undefined;
  Login: undefined;
  Register: undefined;
  Address: { fieldsData: IUserCreate };
};

const Stack = createNativeStackNavigator<AuthStackParamList>();

export type PropsAuthStack = NativeStackNavigationProp<AuthStackParamList>;

const AuthStack = () => {
  return (
    <Stack.Navigator
      screenOptions={{
        headerShown: false,
        animation: "fade_from_bottom",
      }}
    >
      <Stack.Screen name="Access" component={Access} />
      <Stack.Screen name="Login" component={Login} />
      <Stack.Screen name="Register" component={Register} />
      <Stack.Screen name="Address" component={Address} />
    </Stack.Navigator>
  );
};

export default AuthStack;
