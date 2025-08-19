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
import Navbar from "@src/components/Navbar";

export default function App() {
  const { theme } = useThemeStore();

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

  return (
    <>
      <StatusBar
        barStyle={"dark-content"}
        backgroundColor={theme.colors.backgroundPrimary}
      />

      <ThemeProvider theme={theme}>
        <Navbar />
      </ThemeProvider>
    </>
  );
}
