import { useEffect } from "react";
import { SafeAreaView, StatusBar } from "react-native";
import * as SplashScreen from "expo-splash-screen";
import {
  RedHatDisplay_400Regular,
  RedHatDisplay_500Medium,
  RedHatDisplay_600SemiBold,
  RedHatDisplay_700Bold,
  RedHatDisplay_800ExtraBold,
  RedHatDisplay_900Black,
  useFonts,
} from "@expo-google-fonts/red-hat-display";
import { GestureHandlerRootView } from "react-native-gesture-handler";
import Toast from "react-native-toast-message";
import "react-native-reanimated";
import "react-native-gesture-handler";

import Routes from "@src/routes";
import { useAuthStore } from "@src/stores/AuthStore";
import ErrorBoundary from "@src/components/Error";

export default function App() {
  const [fontsLoaded] = useFonts({
    RedHatDisplay_400Regular: RedHatDisplay_400Regular,
    RedHatDisplay_500Medium: RedHatDisplay_500Medium,
    RedHatDisplay_600SemiBold: RedHatDisplay_600SemiBold,
    RedHatDisplay_700Bold: RedHatDisplay_700Bold,
    RedHatDisplay_800ExtraBold: RedHatDisplay_800ExtraBold,
    RedHatDisplay_900Black: RedHatDisplay_900Black,
  });
  const { restore, isLoading, logout } = useAuthStore();

  useEffect(() => {
    const prepare = async () => {
      try {
        await SplashScreen.preventAutoHideAsync();

        await restore();
      } catch (error: any) {
        Toast.show({
          type: "error",
          text1: "Aviso",
          text2: error.message || "Erro ao carregar o usuário",
        });
      } finally {
        if (fontsLoaded) await SplashScreen.hideAsync();
      }
    };

    prepare();
  }, [fontsLoaded]);

  if (!fontsLoaded || isLoading) return null;

  return <AppContent />;
}
const AppContent = () => {
  return (
    <SafeAreaView style={{ flex: 1 }}>
      <ErrorBoundary>
        <GestureHandlerRootView>
          <StatusBar
            barStyle={"dark-content"}
            backgroundColor="transparent"
            translucent
          />

          <Routes />
        </GestureHandlerRootView>
      </ErrorBoundary>

      <Toast />
    </SafeAreaView>
  );
};
