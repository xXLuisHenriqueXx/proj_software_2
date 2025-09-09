import {
  createNativeStackNavigator,
  NativeStackNavigationProp,
} from "@react-navigation/native-stack";

import Chat from "@src/screens/Chats/Chat";
import ChatsList from "@src/screens/Chats/ChatsList";

import { IChat } from "@src/common/Entities/Chat";

export type ChatStackParamList = {
  ChatsList: undefined;
  Chat: { chat: IChat };
};

const Stack = createNativeStackNavigator<ChatStackParamList>();

export type PropsChatStack = NativeStackNavigationProp<ChatStackParamList>;

export default function ChatStack() {
  return (
    <Stack.Navigator
      screenOptions={{ headerShown: false, animation: "fade_from_bottom" }}
    >
      <Stack.Screen name="ChatsList" component={ChatsList} />
      <Stack.Screen name="Chat" component={Chat} />
    </Stack.Navigator>
  );
}
