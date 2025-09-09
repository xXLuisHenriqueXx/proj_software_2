import { useState } from "react";
import {
  View,
  Text,
  ScrollView,
  TouchableOpacity,
  TextInput,
  Image,
} from "react-native";
import { useNavigation } from "@react-navigation/native";
import Constants from "expo-constants";
import { Search, X } from "lucide-react-native";

import { PropsAppStack } from "@src/routes/stacks/AppStack";
import { chatsData } from "@src/static/chatsData";
import { PropsChatStack } from "@src/routes/stacks/ChatStack";
import { IChat } from "@src/common/Entities/Chat";

const ChatsList = () => {
  const [search, setSearch] = useState<string>("");

  const appNavigation = useNavigation<PropsAppStack>();
  const chatNavigation = useNavigation<PropsChatStack>();
  const statusBarHeight = Constants.statusBarHeight;

  const handleNavigateToHome = () => appNavigation.replace("AppTabs");

  const handleNavigateToChat = (chat: IChat) =>
    chatNavigation.navigate("Chat", { chat });

  const filteredChats = chatsData.filter((chat) =>
    chat.participant.name.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <ScrollView
      className="flex-1 bg-backgroundPrimary"
      showsVerticalScrollIndicator={false}
      contentContainerStyle={{
        paddingTop: statusBarHeight + 32,
        paddingBottom: 32,
        paddingHorizontal: 24,
        rowGap: 48,
      }}
    >
      <View className="flex-row items-center justify-between w-full py-4">
        <Text className="text-2xl font-redHatDisplaySemiBold text-primary">
          Conversas
        </Text>

        <TouchableOpacity activeOpacity={0.85} onPress={handleNavigateToHome}>
          <X size={24} color={"#13131399"} />
        </TouchableOpacity>
      </View>

      <View className="flex-row items-center gap-x-2 w-full h-16 px-4 bg-backgroundPrimary border border-highlight rounded-2xl">
        <Search size={24} color={"#13131399"} />

        <TextInput
          className="flex-1 text-base font-redHatDisplayRegular text-primary"
          placeholder="Pesquisar"
          returnKeyType="done"
          value={search}
          onChangeText={(text: string) => {
            setSearch(text);
          }}
          onBlur={() => alert("onBlur")}
        />
      </View>

      <View className="flex-col gap-y-4">
        {filteredChats.map((chat) => (
          <TouchableOpacity
            key={chat.id}
            className="flex-row items-center gap-x-4"
            activeOpacity={0.85}
            onPress={() => handleNavigateToChat(chat)}
          >
            <Image
              className="w-12 h-12 rounded-full"
              source={{ uri: chat.participant.avatar }}
              resizeMode="cover"
            />

            <View className="flex-col gap-y-1">
              <Text className="text-base font-redHatDisplayRegular text-primary">
                {chat.participant.name}
              </Text>

              <Text className="text-sm font-redHatDisplayRegular text-primary/60">
                {chat.lastMessage.message}
              </Text>
            </View>
          </TouchableOpacity>
        ))}
      </View>
    </ScrollView>
  );
};

export default ChatsList;
