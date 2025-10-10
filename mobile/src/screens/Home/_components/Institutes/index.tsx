import { memo, useCallback } from "react";
import {
  View,
  useWindowDimensions,
  ListRenderItem,
  FlatList,
} from "react-native";
import { styles } from "./styles";
import { useNavigation } from "@react-navigation/native";

import { Header } from "@src/components/Header";
import Item from "./Item";
import LoaderSkeleton from "@src/components/LoaderSkeleton";

import { IInstitute } from "@src/common/Entities/Institute";
import { PropsAppStack } from "@src/routes/stacks/AppStack";

interface IInstituteProps {
  data: IInstitute[];
}

const Institutes = ({ data }: IInstituteProps) => {
  const { width } = useWindowDimensions();

  const navigation = useNavigation<PropsAppStack>();

  const handleNavigateToInstituteDetail = useCallback(
    (id: string) => {
      navigation.navigate("InstituteDetail", { id });
    },
    [navigation]
  );

  const renderItem: ListRenderItem<IInstitute> = useCallback(
    ({ item }) => (
      <Item
        data={item}
        handleNavigateToInstituteDetail={handleNavigateToInstituteDetail}
      />
    ),
    [handleNavigateToInstituteDetail]
  );

  if (!data || data.length === 0) {
    return <LoaderSkeleton width={width - 48} height={116} />;
  }

  return (
    <View style={styles.container}>
      <Header.Root>
        <Header.Content
          title="Instituições assistenciais"
          subtitle="Explore e contribua com um mundo melhor"
        />
      </Header.Root>

      <FlatList
        data={data}
        renderItem={renderItem}
        keyExtractor={(item) => item.id}
        horizontal
        showsHorizontalScrollIndicator={false}
        contentContainerStyle={styles.containerScrollContent}
        initialNumToRender={5}
        maxToRenderPerBatch={6}
        windowSize={5}
      />
    </View>
  );
};

export default memo(Institutes);
