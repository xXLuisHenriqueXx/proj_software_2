import { View, Text, ScrollView, useWindowDimensions } from "react-native";
import Constants from "expo-constants";
import Featured from "./_components/Featured";
import SearchInput from "./_components/SearchInput";
import { useState } from "react";
import Categories from "./_components/Categories";
import Recent from "./_components/Recent";

const Search = () => {
  const statusBarHeight = Constants.statusBarHeight;
  const { height } = useWindowDimensions();

  const [isSearchOpen, setIsSearchOpen] = useState<boolean>(false);
  const [search, setSearch] = useState<string>("");

  const openSearch = () => setIsSearchOpen(true);

  const closeSearch = () => {
    if (search) return;

    setIsSearchOpen(false);
  };

  return (
    <ScrollView
      className="relative flex-1 bg-backgroundPrimary w-full h-full px-6"
      style={{ paddingTop: statusBarHeight }}
      contentContainerStyle={{
        alignItems: "center",
        rowGap: 48,
        paddingBottom: 192,
      }}
    >
      <SearchInput
        onPress={openSearch}
        onBlur={closeSearch}
        search={search}
        setSearch={setSearch}
      />
      {!isSearchOpen && <Featured />}
      {!isSearchOpen && <Categories />}

      {isSearchOpen && <Recent />}
    </ScrollView>
  );
};

export default Search;
