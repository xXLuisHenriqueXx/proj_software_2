import AsyncStorage from "@react-native-async-storage/async-storage";

export const recentSearchService = {
  getAll: async () => {
    const recents = await AsyncStorage.getItem("@recents");

    return recents ? JSON.parse(recents) : [];
  },
  save: async (search: string) => {
    const recents = await recentSearchService.getAll();

    const newRecents = recents.filter((recent: string) => recent !== search);
    newRecents.unshift(search);

    await AsyncStorage.setItem("@recents", JSON.stringify(newRecents));
  },

  delete: async (search: string) => {
    const recents = await recentSearchService.getAll();

    const newRecents = recents.filter((recent: string) => recent !== search);

    await AsyncStorage.setItem("@recents", JSON.stringify(newRecents));
  },

  clear: async () => await AsyncStorage.removeItem("@recents"),
};
