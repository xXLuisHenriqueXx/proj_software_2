import {
  createNativeStackNavigator,
  NativeStackNavigationProp,
} from "@react-navigation/native-stack";

import AppTabs from "../tabs/AppTabs";
import CreateStack from "./CreateStack";
import Recents from "@src/screens/Recents";
import ProductDetail from "@src/screens/ProductDetail";
import InstituteDetail from "@src/screens/InstituteDetail";
import ProductList from "@src/screens/ProductList";

import { IFilter } from "@src/common/Interfaces/Toy.interface";

export type AppStackParamList = {
  AppTabs: undefined;
  CreateStack: undefined;
  Recents: undefined;
  ProductDetail: { id: string };
  InstituteDetail: { id: string };
  ProductList: { filter?: IFilter };
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
      <Stack.Screen name="Recents" component={Recents} />
      <Stack.Screen name="ProductDetail" component={ProductDetail} />
      <Stack.Screen name="InstituteDetail" component={InstituteDetail} />
      <Stack.Screen name="ProductList" component={ProductList} />
    </Stack.Navigator>
  );
}
