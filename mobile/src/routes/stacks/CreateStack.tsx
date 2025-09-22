import {
  createNativeStackNavigator,
  NativeStackNavigationProp,
} from "@react-navigation/native-stack";

import Main from "@src/screens/Create/Main";

import { IFieldsToyCreateMain } from "@src/common/Interfaces/Toy.interface";
import Categories from "@src/screens/Create/Categories";

export type CreateStackParamList = {
  Main: undefined;
  Categories: { fields: IFieldsToyCreateMain };
};

const Stack = createNativeStackNavigator<CreateStackParamList>();

export type PropsCreateStack = NativeStackNavigationProp<CreateStackParamList>;

export default function CreateStack() {
  return (
    <Stack.Navigator
      screenOptions={{ headerShown: false, animation: "fade_from_bottom" }}
    >
      <Stack.Screen name="Main" component={Main} />
      <Stack.Screen name="Categories" component={Categories} />
    </Stack.Navigator>
  );
}
