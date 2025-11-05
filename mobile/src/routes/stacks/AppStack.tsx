import {
  createNativeStackNavigator,
  NativeStackNavigationProp,
} from "@react-navigation/native-stack";

import AppTabs, { AppTabsParamList } from "../tabs/AppTabs";
import CreateProduct from "@src/screens/CreateProduct";
import UpdateProduct from "@src/screens/UpdateProduct";
import Recents from "@src/screens/Recents";
import ProductDetail from "@src/screens/ProductDetail";
import InstituteDetail from "@src/screens/InstituteDetail";
import ProductList from "@src/screens/ProductList";
import UpdateUser from "@src/screens/UpdateUser";

import { IFilter } from "@src/common/Interfaces/Toy.interface";

export type AppStackParamList = {
  AppTabs: { screen?: keyof AppTabsParamList } | undefined;
  CreateProduct: undefined;
  UpdateProduct: { id: string };
  Recents: undefined;
  ProductDetail: { id: string };
  InstituteDetail: { id: string };
  ProductList: { filter?: IFilter };
  UpdateUser: { id: string };
};

const Stack = createNativeStackNavigator<AppStackParamList>();

export type PropsAppStack = NativeStackNavigationProp<AppStackParamList>;

export default function AppStack() {
  return (
    <Stack.Navigator
      screenOptions={{ headerShown: false, animation: "fade_from_bottom" }}
    >
      <Stack.Screen name="AppTabs" component={AppTabs} />
      <Stack.Screen name="CreateProduct" component={CreateProduct} />
      <Stack.Screen name="UpdateProduct" component={UpdateProduct} />
      <Stack.Screen name="Recents" component={Recents} />
      <Stack.Screen name="ProductDetail" component={ProductDetail} />
      <Stack.Screen name="InstituteDetail" component={InstituteDetail} />
      <Stack.Screen name="ProductList" component={ProductList} />
      <Stack.Screen name="UpdateUser" component={UpdateUser} />
    </Stack.Navigator>
  );
}
