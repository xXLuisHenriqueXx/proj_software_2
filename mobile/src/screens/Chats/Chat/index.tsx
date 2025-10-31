import { useCallback, useEffect, useRef, useState, memo } from "react";
import {
  FlatList,
  KeyboardAvoidingView,
  Text,
  View,
  ListRenderItemInfo,
  NativeSyntheticEvent,
  NativeScrollEvent,
} from "react-native";
import { MotiView } from "moti";
import { ChevronLeft, ChevronRight } from "lucide-react-native";

import { Header } from "@src/components/Header";
import { Input } from "@src/components/Input";
import { Button } from "@src/components/Button";
import { styles } from "./styles";

import { useChatSocket } from "@src/hooks/useChatSocket";
import { useAppNavigation } from "@src/hooks/useAppNavigation";
import { IMessage } from "@src/common/Entities/Chat";
import {
  BACKGROUND_PRIMARY_COLOR,
  BACKGROUND_SECONDARY_COLOR,
  HIGHLIGHT_COLOR,
  PRIMARY_COLOR,
  PRIMARY_COLOR_50,
} from "@src/constants/Colors";

const MessageBubble = memo(({ item }: { item: IMessage }) => {
  const isMine = item.sent_by_me;

  return (
    <MotiView
      style={[
        styles.containerMessage,
        { justifyContent: isMine ? "flex-end" : "flex-start" },
      ]}
      from={{ opacity: 0, translateY: 6 }}
      animate={{ opacity: 1, translateY: 0 }}
      transition={{ type: "timing", duration: 200 }}
    >
      <View
        style={[
          styles.containerBubble,
          {
            backgroundColor: isMine
              ? HIGHLIGHT_COLOR
              : BACKGROUND_SECONDARY_COLOR,
            borderTopLeftRadius: isMine ? 16 : 0,
            borderTopRightRadius: isMine ? 0 : 16,
          },
        ]}
      >
        <Text
          style={[
            styles.textMessage,
            { color: isMine ? BACKGROUND_PRIMARY_COLOR : PRIMARY_COLOR },
          ]}
        >
          {item.message}
        </Text>
        <Text
          style={[
            styles.textSentAt,
            { color: isMine ? BACKGROUND_SECONDARY_COLOR : PRIMARY_COLOR_50 },
          ]}
        >
          {new Date(item.sent_at).toLocaleTimeString([], {
            hour: "2-digit",
            minute: "2-digit",
          })}
        </Text>
      </View>
    </MotiView>
  );
});
MessageBubble.displayName = "MessageBubble";

type Props = {
  route: {
    params: {
      id: string;
      username: string;
    };
  };
};

const Chat = ({ route }: Props) => {
  const { id: chatId, username } = route.params || {};
  const { chatNavigation } = useAppNavigation();
  const { messages, sendMessage, connected } = useChatSocket({ chatId });

  const [text, setText] = useState("");
  const [autoScroll, setAutoScroll] = useState(true);
  const listRef = useRef<FlatList<IMessage> | null>(null);

  const handleScroll = useCallback(
    (e: NativeSyntheticEvent<NativeScrollEvent>) => {
      const { layoutMeasurement, contentOffset, contentSize } = e.nativeEvent;
      const isNearBottom =
        layoutMeasurement.height + contentOffset.y >= contentSize.height - 60;
      setAutoScroll(isNearBottom);
    },
    []
  );

  useEffect(() => {
    if (autoScroll) {
      listRef.current?.scrollToEnd({ animated: true });
    }
  }, [messages, autoScroll]);

  const handleSend = useCallback(() => {
    const trimmed = text.trim();
    if (!trimmed) return;
    sendMessage(trimmed);
    setText("");
  }, [text, sendMessage]);

  const renderItem = useCallback(
    ({ item }: ListRenderItemInfo<IMessage>) => <MessageBubble item={item} />,
    []
  );

  return (
    <KeyboardAvoidingView style={styles.container}>
      <View style={styles.containerContent}>
        <Header.Root padding={32}>
          <Header.LeftIcon
            icon={ChevronLeft}
            onPress={() => chatNavigation.goBack()}
          />
          <Header.Content title={username} />
        </Header.Root>

        {!connected && (
          <Text style={styles.textMessage}>Conectando ao chat...</Text>
        )}

        <FlatList
          ref={listRef}
          data={messages}
          renderItem={renderItem}
          keyExtractor={(item) => String(item.id)}
          onScroll={handleScroll}
          scrollEventThrottle={50}
          showsVerticalScrollIndicator={false}
          contentContainerStyle={styles.containerContentFlatlist}
          initialNumToRender={20}
          maxToRenderPerBatch={30}
          windowSize={5}
          removeClippedSubviews
          getItemLayout={(_, index) => ({
            length: 80,
            offset: 80 * index,
            index,
          })}
        />

        <View style={styles.containerInput}>
          <Input.Normal
            label="Mensagem"
            style={styles.input}
            placeholder={
              connected ? "Digite sua mensagem ..." : "Conectando..."
            }
            value={text}
            onChangeText={setText}
            multiline
            returnKeyType="send"
            onSubmitEditing={handleSend}
            editable={connected}
          />

          <Button.Square
            icon={ChevronRight}
            disabled={!text.trim() || !connected}
            onPress={handleSend}
          />
        </View>
      </View>
    </KeyboardAvoidingView>
  );
};

export default Chat;
