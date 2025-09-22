import { useState } from "react";
import { ScrollView } from "react-native";
import Constants from "expo-constants";

import Featured from "./_components/Featured";
import SearchInput from "./_components/SearchInput";
import Categories from "./_components/Categories";
import Recent from "./_components/Recent";
import List from "@src/components/List";

import { productsData } from "@src/static/ProductsData";

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
      style={{ paddingTop: statusBarHeight + 64 }}
      contentContainerStyle={{
        paddingBottom: 264,
        rowGap: 48,
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

      {shouldShowList && <List data={productsData} limit={4} />}
    </ScrollView>
  );
};

export default Search;
