import { ScrollView } from "react-native";
import { styles } from "./styles";

import { Input } from "@src/components/Input";
import Featured from "./_components/Featured";
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
    if (shouldShowList) return <List data={data} />;

    return (
      <>
        <Input.Search
          placeholder="Pesquisar ..."
          returnKeyType="done"
          value={search}
          onChangeText={(text: string) => setSearch(text)}
          onPress={handleFocus}
          onEndEditing={handleEndEditing}
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
