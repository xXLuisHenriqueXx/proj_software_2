import { useCallback, useEffect, useMemo, useRef, useState } from "react";
import { RefreshControl, ScrollView, View } from "react-native";
import { styles } from "./styles";
import { useIsFocused } from "@react-navigation/native";
import BottomSheet from "@gorhom/bottom-sheet";
import Toast from "react-native-toast-message";

import { Button } from "@src/components/Button";
import Loader from "@src/components/Loader";
import Products from "./_components/Products";
import Favorites from "./_components/Favorites";
import History from "./_components/History";
import Sheet from "./_components/Sheet";
import UserInfo from "./_components/UserInfo";

import { useAuthStore } from "@src/stores/AuthStore";
import { useAppNavigation } from "@src/hooks/useAppNavigation";
import { IUser } from "@src/common/Entities/User";
import { userService } from "@src/services/UserService";
import {
  CANCEL_COLOR,
  CANCEL_COLOR_25,
  PRIMARY_COLOR,
  PRIMARY_COLOR_25,
} from "@src/constants/Colors";
import { ChevronLeft, LogOut, Pencil } from "lucide-react-native";

type SheetType = "product" | "favorite" | "history";
type ActiveSheet = { type: SheetType; id: string } | null;

const Profile = () => {
  const { logout } = useAuthStore();
  const { rootNavigation, appNavigation } = useAppNavigation();

  const isFocused = useIsFocused();
  const bottomSheetRef = useRef<BottomSheet>(null);

  const [user, setUser] = useState<IUser>();
  const [loading, setLoading] = useState<boolean>(true);
  const [refreshing, setRefreshing] = useState<boolean>(false);
  const [activeSheet, setActiveSheet] = useState<ActiveSheet>(null);

  const handleFetchUser = useCallback(async () => {
    try {
      const response = await userService.get();

      if (response?.data) setUser(response.data);
    } catch (error: any) {
      Toast.show({
        type: "error",
        text1: "Aviso",
        text2: error.message || "Ocorreu um erro ao buscar o perfil",
      });
    } finally {
      setLoading(false);
    }
  }, []);

  const onRefresh = useCallback(async () => {
    setRefreshing(true);
    await handleFetchUser();
    setRefreshing(false);
  }, [handleFetchUser]);

  const openSheet = useCallback((type: SheetType, id: string) => {
    setActiveSheet({ type, id });
    bottomSheetRef.current?.expand();
  }, []);

  const closeSheet = useCallback(() => {
    bottomSheetRef.current?.close();
    setActiveSheet(null);
  }, []);

  const onLogout = useCallback(() => {
    logout();
    rootNavigation.replace("AuthStack");
  }, [logout, rootNavigation]);

  const onEdit = useCallback(() => {
    if (user) appNavigation.navigate("UpdateUser", { id: user.id });
  }, [appNavigation, user]);

  const refreshControl = useMemo(
    () => <RefreshControl refreshing={refreshing} onRefresh={onRefresh} />,
    [refreshing, onRefresh]
  );

  useEffect(() => {
    if (isFocused) handleFetchUser();
  }, [isFocused, handleFetchUser]);

  if (loading || !user) return <Loader />;

  return (
    <>
      <ScrollView
        style={styles.container}
        contentContainerStyle={styles.containerScroll}
        showsVerticalScrollIndicator
        refreshControl={refreshControl}
      >
        <Button.Square
          style={styles.backButton}
          icon={ChevronLeft}
          onPress={() => rootNavigation.goBack()}
        />

        <UserInfo user={user} />

        <View style={styles.containerContent}>
          <Products
            data={user.toys}
            setOpenSheet={(id: string) => openSheet("product", id)}
          />

          <History
            refreshing={refreshing}
            setOpenSheet={(id: string) => openSheet("history", id)}
          />

          <Favorites
            refreshing={refreshing}
            setOpenSheet={(id: string) => openSheet("favorite", id)}
          />

          <View>
            <Button.Profile
              text="Editar Perfil"
              icon={Pencil}
              onPress={onEdit}
              color={PRIMARY_COLOR}
              backgroundColor={PRIMARY_COLOR_25}
            />

            <Button.Profile
              text="Desconectar"
              icon={LogOut}
              onPress={onLogout}
              color={CANCEL_COLOR}
              backgroundColor={CANCEL_COLOR_25}
            />
          </View>
        </View>
      </ScrollView>

      {activeSheet && (
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
          <Sheet
            id={activeSheet.id}
            type={activeSheet.type}
            onClose={closeSheet}
          />
        </BottomSheet>
      )}
    </>
  );
};

export default Profile;
