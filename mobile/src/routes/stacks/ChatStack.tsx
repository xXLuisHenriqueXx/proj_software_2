import React from "react";
import {
  createNativeStackNavigator,
  NativeStackNavigationProp,
} from "@react-navigation/native-stack";

import AllChats from "@src/screens/Chats/AllChats";
import Chat from "@src/screens/Chats/Chat";

export type ChatStackParamList = {
  AllChats: undefined;
  Chat: { id: string; username: string };
};

const Stack = createNativeStackNavigator<ChatStackParamList>();

export type PropsChatStack = NativeStackNavigationProp<ChatStackParamList>;

const ChatStack = () => {
  return (
    <Stack.Navigator
      screenOptions={{
        headerShown: false,
        animation: "fade_from_bottom",
      }}
    >
      <Stack.Screen name="AllChats" component={AllChats} />
      <Stack.Screen name="Chat" component={Chat} />
    </Stack.Navigator>
  );
};

export default ChatStack;
