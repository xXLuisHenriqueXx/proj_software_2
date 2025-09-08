import {
  createNativeStackNavigator,
  NativeStackNavigationProp,
} from "@react-navigation/native-stack";

import AppTabs from "../tabs/AppTabs";
import Detail from "@src/screens/Detail";

import { IProduct } from "@src/common/Entities/Product";

export type AppStackParamList = {
  AppTabs: undefined;
  Detail: { product: IProduct };
};

const Stack = createNativeStackNavigator<AppStackParamList>();

export type PropsAppStack = NativeStackNavigationProp<AppStackParamList>;

export default function AppStack() {
  return (
    <Stack.Navigator
      screenOptions={{ headerShown: false, animation: "fade_from_bottom" }}
    >
      <Stack.Screen name="AppTabs" component={AppTabs} />
      <Stack.Screen name="Detail" component={Detail} />
    </Stack.Navigator>
  );
}
