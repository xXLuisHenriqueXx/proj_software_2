import { useEffect, useState } from "react";
import { FlatList, Image, Text, TouchableOpacity, View } from "react-native";
import { styles } from "./styles";
import Toast from "react-native-toast-message";
import { MessageCircleOff } from "lucide-react-native";

import { Header } from "@src/components/Header";
import { Input } from "@src/components/Input";
import Loader from "@src/components/Loader";

import { useAppNavigation } from "@src/hooks/useAppNavigation";
import { IChat } from "@src/common/Entities/Chat";
import { chatService } from "@src/services/ChatService";
import EmptyList from "@src/components/EmptyList";

const AllChats = () => {
  const { chatNavigation } = useAppNavigation();

  const [search, setSearch] = useState<string>("");
  const [chats, setChats] = useState<IChat[]>([]);
  const [loading, setLoading] = useState<boolean>(false);

  const fetchChats = async () => {
    setLoading(true);

    try {
      const response = await chatService.get();

      setChats(response?.data.chats ?? []);
    } catch (error: any) {
      Toast.show({
        type: "error",
        text1: "Aviso",
        text2: error.message || "Erro ao buscar as conversas",
      });
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchChats();
  }, []);

  const filteredChats =
    chats && chats.filter((chat) => chat.userName.includes(search));

  if (loading) return <Loader />;

  return (
    <View style={styles.container}>
      <Header.Root>
        <Header.Content title="Suas conversas" />
      </Header.Root>

      <Input.Search
        placeholder="Pesquisar vendedor ..."
        value={search}
        onChangeText={(text) => setSearch(text)}
      />

      <FlatList
        contentContainerStyle={styles.containerContent}
        showsVerticalScrollIndicator={false}
        data={filteredChats ?? []}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => (
          <TouchableOpacity
            style={styles.containerItem}
            activeOpacity={0.85}
            onPress={() =>
              chatNavigation.navigate("Chat", {
                id: item.id,
                username: item.userName,
              })
            }
          >
            <Image
              style={styles.image}
              source={{
                uri: item.userPicture,
              }}
            />
            <View>
              <Text style={styles.textName}>{item.userName}</Text>
              <Text style={styles.textMessage}>
                {item.latestMessage?.message ?? "Nenhuma mensagem"}
              </Text>
            </View>
          </TouchableOpacity>
        )}
        ListEmptyComponent={
          <EmptyList icon={MessageCircleOff} message="Nenhum chat encontrado" />
        }
      />
    </View>
  );
};

export default AllChats;
