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
    handleSearchWithFeatured,
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

  const renderContent = () => {
    if (shouldShowList) return <List data={data} onClose={handleCloseList} />;

    return (
      <>
        <SearchInput
          onPress={handleFocus}
          onEndEditing={handleEndEditing}
          search={search}
          setSearch={setSearch}
        />
        {shouldShowFeatured && (
          <>
            <Featured onSearch={handleSearchWithFeatured} />
            <Categories onSearch={handleSearchWithCategory} />
          </>
        )}
        {isFocused && <Recent data={recents} setSearch={setSearch} />}
      </>
    );
  };

  if (loading) return <Loader />;

  return (
    <ScrollView
      style={styles.container}
      contentContainerStyle={styles.containerScroll}
    >
      {renderContent()}
    </ScrollView>
  );
};

export default Search;
