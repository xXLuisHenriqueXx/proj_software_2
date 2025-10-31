import { useCallback, useEffect, useRef, useState } from "react";
import { Image, RefreshControl, ScrollView, Text, View } from "react-native";
import BottomSheet from "@gorhom/bottom-sheet";
import Toast from "react-native-toast-message";
import { ChevronLeft, User2 } from "lucide-react-native";

import { styles } from "./styles";
import { Header } from "@src/components/Header";
import Loader from "@src/components/Loader";
import Products from "./_components/Products";
import Favorites from "./_components/Favorites";
import History from "./_components/History";

import { useAuthStore } from "@src/stores/AuthStore";
import { useAppNavigation } from "@src/hooks/useAppNavigation";
import { IUser } from "@src/common/Entities/User";
import { IProduct } from "@src/common/Entities/Product";
import { IHistory } from "@src/common/Entities/History";

import { userService } from "@src/services/UserService";
import { favoriteService } from "@src/services/FavoriteService";
import { historyService } from "@src/services/HistoryService";
import { toyService } from "@src/services/ToyService";

import { HIGHLIGHT_COLOR } from "@src/constants/Colors";

import ProductsBody from "./_components/Sheet/ProductsBody";
import FavoritesBody from "./_components/Sheet/FavoritesBody";
import HistoryBody from "./_components/Sheet/HistoryBody";
import { Button } from "@src/components/Button";

type SheetType = "product" | "favorite" | "history";
type ActiveSheet = { type: SheetType; id: string } | null;

const Profile = () => {
  const { logout } = useAuthStore();
  const { rootNavigation } = useAppNavigation();

  const bottomSheetRef = useRef<BottomSheet>(null);

  const [user, setUser] = useState<IUser>();
  const [favorites, setFavorites] = useState<IProduct[]>([]);
  const [history, setHistory] = useState<IHistory[]>([]);

  const [loading, setLoading] = useState<boolean>(true);
  const [refreshing, setRefreshing] = useState<boolean>(false);

  const [activeSheet, setActiveSheet] = useState<ActiveSheet>(null);

  const handleFetchUser = async () => {
    const response = await userService.get();
    setUser(response?.data ?? undefined);
    return response;
  };

  const handleFetchFavorites = async () => {
    const response = await favoriteService.get();
    setFavorites(response?.data ?? []);
    return response;
  };

  const handleFetchHistory = async () => {
    const response = await historyService.get();
    setHistory(response?.data ?? []);
    return response;
  };

  const fetchAll = useCallback(async () => {
    setLoading(true);
    try {
      await Promise.all([
        handleFetchUser(),
        handleFetchFavorites(),
        handleFetchHistory(),
      ]);
    } catch (error: any) {
      Toast.show({
        type: "error",
        text1: "Aviso",
        text2: error?.message ?? "Erro ao carregar dados",
      });
    } finally {
      setLoading(false);
    }
  }, []);

  const onRefresh = useCallback(() => {
    setRefreshing(true);
    Promise.all([
      handleFetchUser(),
      handleFetchFavorites(),
      handleFetchHistory(),
    ])
      .catch((err) => {
        Toast.show({
          type: "error",
          text1: "Aviso",
          text2: err?.message ?? "Erro ao atualizar",
        });
      })
      .finally(() => setRefreshing(false));
  }, [handleFetchUser, handleFetchFavorites, handleFetchHistory]);

  const openSheet = useCallback((type: SheetType, id: string) => {
    setActiveSheet({ type, id });
    bottomSheetRef.current?.expand();
  }, []);

  const closeSheet = useCallback(() => {
    bottomSheetRef.current?.close();
    setActiveSheet(null);
  }, []);

  const refreshAfterAction = useCallback(
    async (type: SheetType) => {
      try {
        if (type === "product") {
          await handleFetchUser();
        } else if (type === "favorite") {
          await handleFetchFavorites();
        } else if (type === "history") {
          await handleFetchHistory();
        }
      } catch (err: any) {
        Toast.show({
          type: "error",
          text1: "Aviso",
          text2: err?.message ?? "Erro ao atualizar",
        });
      }
    },
    [handleFetchUser, handleFetchFavorites, handleFetchHistory]
  );

  const onLogout = useCallback(() => {
    logout();
    rootNavigation.replace("AuthStack");
  }, [logout, rootNavigation]);

  useEffect(() => {
    let mounted = true;
    (async () => {
      if (!mounted) return;
      await fetchAll();
    })();
    return () => {
      mounted = false;
    };
  }, [fetchAll]);

  if (loading) return <Loader />;

  return (
    <>
      <ScrollView
        style={styles.container}
        contentContainerStyle={styles.containerContent}
        showsVerticalScrollIndicator
        refreshControl={
          <RefreshControl refreshing={refreshing} onRefresh={onRefresh} />
        }
      >
        <Header.Root>
          <Header.LeftIcon
            icon={ChevronLeft}
            onPress={() => rootNavigation.goBack()}
          />
          <Header.Content title="Minha Conta" />
        </Header.Root>

        <View style={styles.containerUser}>
          {user?.picture ? (
            <Image style={styles.picture} source={{ uri: user.picture }} />
          ) : (
            <View style={styles.picture}>
              <User2 size={64} color={HIGHLIGHT_COLOR} strokeWidth={1} />
            </View>
          )}

          <View style={styles.containerText}>
            <Text style={styles.nameText}>{user?.name}</Text>
            <Text style={styles.emailText}>{user?.email}</Text>
          </View>
        </View>

        <Products
          data={user?.toys}
          setOpenSheet={(id: string) => openSheet("product", id)}
          setSelectedID={() => {}}
        />

        <History
          data={history}
          setOpenSheet={(id: string) => openSheet("history", id)}
          setSelectedID={() => {}}
        />

        <Favorites
          data={favorites}
          setOpenSheet={(id: string) => openSheet("favorite", id)}
          setSelectedID={() => {}}
        />

        <Button.Secondary text="Editar" onPress={onLogout} />
        <Button.Destructive text="Sair" onPress={onLogout} />
      </ScrollView>

      <BottomSheet
        ref={bottomSheetRef}
        index={-1}
        snapPoints={["50%"]}
        enablePanDownToClose={true}
        onChange={(index) => {
          if (index === -1) setActiveSheet(null);
        }}
        backgroundComponent={({ style }) => (
          <View style={[style, styles.containerSheet]} />
        )}
      >
        {activeSheet?.type === "product" && (
          <ProductsBody
            id={activeSheet.id}
            onClose={closeSheet}
            onSuccess={() => refreshAfterAction("product")}
          />
        )}

        {activeSheet?.type === "favorite" && (
          <FavoritesBody
            id={activeSheet.id}
            onClose={closeSheet}
            onSuccess={() => refreshAfterAction("favorite")}
          />
        )}

        {activeSheet?.type === "history" && (
          <HistoryBody
            id={activeSheet.id}
            onClose={closeSheet}
            onSuccess={() => refreshAfterAction("history")}
          />
        )}
      </BottomSheet>
    </>
  );
};

export default Profile;
