import { ActivityIndicator, ScrollView, View } from "react-native";
import { styles } from "./styles";

import Featured from "./_components/Featured";
import SearchInput from "./_components/SearchInput";
import Categories from "./_components/Categories";
import Recent from "./_components/Recent";
import List from "@src/components/List";
import Loader from "@src/components/Loader";

import { useSearch } from "@src/hooks/useSearch";

const Search = () => {
  const {
    handleFocus,
    handleEndEditing,
    handleSearchWithCategory,
    handleCloseList,
    shouldShowFeatured,
    shouldShowList,
    data,
    recents,
    search,
    setSearch,
    isFocused,
    loading,
  } = useSearch();

  if (loading) return <Loader />;

  return (
    <ScrollView
      style={styles.container}
      contentContainerStyle={{
        paddingBottom: 264,
        rowGap: 48,
      }}
    >
      {!shouldShowList && (
        <SearchInput
          onPress={handleFocus}
          onEndEditing={handleEndEditing}
          search={search}
          setSearch={setSearch}
        />
      )}

      {shouldShowFeatured && (
        <>
          <Featured />
          <Categories onSearch={handleSearchWithCategory} />
        </>
      )}

      {isFocused && <Recent data={recents} setSearch={setSearch} />}

      {shouldShowList && <List data={data} onClose={handleCloseList} />}
    </ScrollView>
  );
};

export default Search;
