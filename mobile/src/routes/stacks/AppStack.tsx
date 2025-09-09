import {
  createNativeStackNavigator,
  NativeStackNavigationProp,
} from "@react-navigation/native-stack";

import AppTabs from "../tabs/AppTabs";
import ProductDetail from "@src/screens/ProductDetail";
import InstituteDetail from "@src/screens/InstituteDetail";

import { IProduct } from "@src/common/Entities/Product";
import { IInstitute } from "@src/common/Entities/Institute";

export type AppStackParamList = {
  AppTabs: undefined;
  ProductDetail: { product: IProduct };
  InstituteDetail: { institute: IInstitute };
};

const Stack = createNativeStackNavigator<AppStackParamList>();

export type PropsAppStack = NativeStackNavigationProp<AppStackParamList>;

export default function AppStack() {
  return (
    <Stack.Navigator
      screenOptions={{ headerShown: false, animation: "fade_from_bottom" }}
    >
      <Stack.Screen name="AppTabs" component={AppTabs} />
      <Stack.Screen name="ProductDetail" component={ProductDetail} />
      <Stack.Screen name="InstituteDetail" component={InstituteDetail} />
    </Stack.Navigator>
  );
}
