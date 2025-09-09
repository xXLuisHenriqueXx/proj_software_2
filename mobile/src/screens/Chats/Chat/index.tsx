import {
  View,
  Text,
  TouchableOpacity,
  ScrollView,
  TextInput,
  KeyboardAvoidingView,
} from "react-native";
import { useNavigation } from "@react-navigation/native";
import { NativeStackScreenProps } from "@react-navigation/native-stack";
import Constants from "expo-constants";
import { ChevronLeft, Paperclip, SendHorizonal } from "lucide-react-native";

import {
  ChatStackParamList,
  PropsChatStack,
} from "@src/routes/stacks/ChatStack";

type Props = NativeStackScreenProps<ChatStackParamList, "Chat">;

const Chat = ({ route }: Props) => {
  const { chat } = route.params || {};

  const navigation = useNavigation<PropsChatStack>();

  const statusBarHeight = Constants.statusBarHeight;
  const currentUserId = "1";

  return (
    <View
      className="relative flex-1 flex-col items-center px-6 bg-backgroundPrimary"
      style={{ paddingTop: statusBarHeight + 32 }}
    >
      <View className="flex-row items-center gap-x-4 w-full py-4 bg-backgroundPrimary">
        <TouchableOpacity
          activeOpacity={0.85}
          onPress={() => navigation.goBack()}
        >
          <ChevronLeft size={24} color={"#131313"} />
        </TouchableOpacity>

        <Text className="text-2xl font-redHatDisplaySemiBold text-primary">
          {chat.participant.name}
        </Text>
      </View>

      <ScrollView
        className="flex-1 w-full"
        contentContainerStyle={{ paddingBottom: 32, rowGap: 8 }}
      >
        {chat.messages.map((msg: any) => {
          const isSender = msg.senderId === currentUserId;

          return (
            <View
              key={msg.id}
              className={`flex-row w-full ${
                isSender ? "justify-end" : "justify-start"
              }`}
            >
              <View
                className={`px-4 py-3 rounded-2xl max-w-[80%] ${
                  isSender
                    ? "bg-highlight self-end rounded-br-none"
                    : "bg-backgroundSecondary self-start rounded-bl-none"
                }`}
              >
                <Text
                  className={`text-base font-redHatDisplayRegular ${
                    isSender ? "text-contrast" : "text-primary"
                  }`}
                >
                  {msg.message}
                </Text>
              </View>
            </View>
          );
        })}
      </ScrollView>

      <KeyboardAvoidingView className="flex-row items-center gap-x-2 w-full py-4 bg-backgroundPrimary">
        <View className="flex-1 flex-row items-center justify-between h-16 px-4 bg-backgroundPrimary border border-highlight rounded-2xl">
          <TextInput
            className="flex-1 text-base font-redHatDisplayRegular text-primary"
            placeholder="Enviar uma mensagem ..."
            returnKeyType="done"
            //   value={search}
            //   onChangeText={(text: string) => {
            //     setSearch(text);
            //   }}
            onBlur={() => alert("onBlur")}
          />

          <Paperclip size={24} color={"#13131399"} />
        </View>

        <TouchableOpacity
          className="flex-col items-center justify-center w-16 h-16 bg-highlight rounded-2xl"
          activeOpacity={0.85}
        >
          <SendHorizonal size={24} color={"#FAF9F6"} />
        </TouchableOpacity>
      </KeyboardAvoidingView>
    </View>
  );
};

export default Chat;
