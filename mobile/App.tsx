import { useEffect } from "react";
import { StatusBar } from "react-native";
import * as SplashScreen from "expo-splash-screen";
import {
  RedHatDisplay_400Regular,
  RedHatDisplay_500Medium,
  RedHatDisplay_600SemiBold,
  useFonts,
} from "@expo-google-fonts/red-hat-display";
import "react-native-reanimated";
import "react-native-gesture-handler";

import { ThemeProvider } from "styled-components/native";
import { useThemeStore } from "@src/stores/ThemeStore";
import Routes from "@src/routes";
import { GestureHandlerRootView } from "react-native-gesture-handler";

export default function App() {
  const [fontsLoaded] = useFonts({
    RedHatDisplay_400Regular: RedHatDisplay_400Regular,
    RedHatDisplay_500Medium: RedHatDisplay_500Medium,
    RedHatDisplay_600SemiBold: RedHatDisplay_600SemiBold,
  });

  useEffect(() => {
    const prepare = async () => {
      try {
        await SplashScreen.preventAutoHideAsync();
      } catch (error) {
        console.warn(error);
      } finally {
        if (fontsLoaded) await SplashScreen.hideAsync();
      }
    };

    prepare();
  }, [fontsLoaded]);

  if (!fontsLoaded) return null;

  return <AppContent />;
}
const AppContent = () => {
  const { theme } = useThemeStore();

  return (
    <GestureHandlerRootView>
      <StatusBar
        barStyle={"dark-content"}
        backgroundColor={theme.colors.backgroundPrimary}
      />

      <ThemeProvider theme={theme}>
        <Routes />
      </ThemeProvider>
    </GestureHandlerRootView>
  );
};
