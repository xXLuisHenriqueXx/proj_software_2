import { memo, useCallback, useEffect, useState } from "react";
import { FlatList, ListRenderItem, View } from "react-native";
import { styles } from "./styles";
import Toast from "react-native-toast-message";

import { Header } from "@src/components/Header";
import Item from "../Item";
import EmptyList from "@src/components/EmptyList";
import LoaderSkeleton from "@src/components/LoaderSkeleton";

import { IHistory } from "@src/common/Entities/History";
import { historyService } from "@src/services/HistoryService";
import { WIDTH } from "@src/constants/Values";

interface IHistoryProps {
  refreshing: boolean;
  setOpenSheet: (id: string) => void;
}

const History = ({ refreshing, setOpenSheet }: IHistoryProps) => {
  const [history, setHistory] = useState<IHistory[]>([]);
  const [loading, setLoading] = useState<boolean>(true);

  const handleFetchHistory = useCallback(async () => {
    try {
      const response = await historyService.get();

      setHistory(response?.data ?? []);
    } catch (error: any) {
      Toast.show({
        type: "error",
        text1: "Aviso",
        text2: error.message || "Ocorreu um erro ao buscar o histórico",
      });
    } finally {
      setLoading(false);
    }
  }, []);

  useEffect(() => {
    handleFetchHistory();
  }, [handleFetchHistory, refreshing]);

  const renderItem = useCallback<ListRenderItem<IHistory>>(
    ({ item }) => (
      <Item data={item} onOptionsPress={() => setOpenSheet(item.id)} />
    ),
    [setOpenSheet]
  );

  const keyExtractor = useCallback((item: IHistory) => item.id, []);

  if (loading) {
    return <LoaderSkeleton width={WIDTH - 48} height={192} />;
  }

  return (
    <View style={styles.container}>
      <Header.Root>
        <Header.Content
          title="Seu histórico"
          subtitle="Gerencie seu histórico de produtos acessados"
        />
      </Header.Root>

      <FlatList
        data={history}
        keyExtractor={keyExtractor}
        renderItem={renderItem}
        horizontal
        showsHorizontalScrollIndicator={false}
        contentContainerStyle={styles.containerContent}
        ListEmptyComponent={<EmptyList />}
        initialNumToRender={4}
        windowSize={5}
        maxToRenderPerBatch={5}
      />
    </View>
  );
};

export default memo(History);
