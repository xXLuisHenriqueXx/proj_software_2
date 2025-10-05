import {
  createNativeStackNavigator,
  NativeStackNavigationProp,
} from "@react-navigation/native-stack";

import AppTabs from "../tabs/AppTabs";
import CreateStack from "./CreateStack";
import ProductDetail from "@src/screens/ProductDetail";
import InstituteDetail from "@src/screens/InstituteDetail";


export type AppStackParamList = {
  AppTabs: undefined;
  CreateStack: undefined;
  ProductDetail: { id: string };
  InstituteDetail: { id: string };
};

const Stack = createNativeStackNavigator<AppStackParamList>();

export type PropsAppStack = NativeStackNavigationProp<AppStackParamList>;

export default function AppStack() {
  return (
    <Stack.Navigator
      screenOptions={{ headerShown: false, animation: "fade_from_bottom" }}
    >
      <Stack.Screen name="AppTabs" component={AppTabs} />
      <Stack.Screen name="CreateStack" component={CreateStack} />
      <Stack.Screen name="ProductDetail" component={ProductDetail} />
      <Stack.Screen name="InstituteDetail" component={InstituteDetail} />
    </Stack.Navigator>
  );
}
