import { useEffect, useState } from "react";
import { ScrollView } from "react-native";
import { styles } from "./styles";

import Featured from "./_components/Featured";
import SearchInput from "./_components/SearchInput";
import Categories from "./_components/Categories";
import Recent from "./_components/Recent";
import List from "@src/components/List";

import { toyService } from "@src/services/ToyService";
import { recentSearchService } from "@src/services/RecentSearchService";
import { IProduct } from "@src/common/Entities/Product";
import { EToyType } from "@src/common/Interfaces/Toy.interface";

const Search = () => {
  const [isFocused, setIsFocused] = useState<boolean>(false);
  const [search, setSearch] = useState<string>("");
  const [recents, setRecents] = useState<string[]>([]);
  const [data, setData] = useState<IProduct[]>([]);

  const handleSearch = async () => {
    await toyService
      .get({ filter: { search: search } })
      .then((response) => {
        setData(response.data.toys);
        setRecents((prev) => [...prev, search]);
      })
      .catch(() => {
        setData([]);
      });

    await recentSearchService.save(search);
  };

  const handleFocus = () => setIsFocused(true);
  const handleEndEditing = () => {
    setIsFocused(false);
    handleSearch();
  };

  const handleSearchWithCategory = async (value: EToyType) => {
    await toyService
      .get({ filter: { type: value } })
      .then((response) => setData(response.data.toys))
      .catch(() => setData([]));
  };

  useEffect(() => {
    recentSearchService.getAll().then((response) => setRecents(response));
  }, []);

  const shouldShowList = isFocused ? false : data.length > 0;
  const shouldShowFeatured = !isFocused && data.length === 0;

  return (
    <ScrollView
      style={styles.container}
      contentContainerStyle={{
        paddingBottom: 264,
        rowGap: 48,
      }}
    >
      <SearchInput
        onPress={handleFocus}
        onEndEditing={handleEndEditing}
        search={search}
        setSearch={setSearch}
      />

      {shouldShowFeatured && (
        <>
          <Featured />
          <Categories onSearch={handleSearchWithCategory} />
        </>
      )}

      {isFocused && <Recent data={recents} setSearch={setSearch} />}

      {shouldShowList && <List data={data} />}
    </ScrollView>
  );
};

export default Search;
