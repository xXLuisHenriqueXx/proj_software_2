import { ScrollView } from "react-native";
import Constants from "expo-constants";
import Featured from "./_components/Featured";
import SearchInput from "./_components/SearchInput";
import { useState } from "react";
import Categories from "./_components/Categories";
import Recent from "./_components/Recent";
import List from "@src/components/List";
import { productsBarbieData } from "@src/static/ProductsBarbieData";

const Search = () => {
  const statusBarHeight = Constants.statusBarHeight;

  const [isFocused, setIsFocused] = useState<boolean>(false);
  const [search, setSearch] = useState<string>("");

  const handleFocus = () => setIsFocused(true);
  const handleBlur = () => setIsFocused(false);

  const shouldShowList = !isFocused && !!search;
  const shouldShowFeatured = !isFocused && !search;

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
        onPress={handleFocus}
        onBlur={handleBlur}
        search={search}
        setSearch={setSearch}
      />
      {shouldShowFeatured && (
        <>
          <Featured />
          <Categories />
        </>
      )}

      {isFocused && <Recent />}

      {shouldShowList && <List data={productsBarbieData} limit={4} />}
    </ScrollView>
  );
};

export default Search;
