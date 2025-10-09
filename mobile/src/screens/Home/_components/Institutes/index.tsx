import { memo, useCallback } from "react";
import {
  View,
  useWindowDimensions,
  ListRenderItem,
  FlatList,
} from "react-native";
import { styles } from "./styles";
import { useNavigation } from "@react-navigation/native";
import { Skeleton } from "moti/skeleton";

import Header from "@src/components/Header";
import Item from "./Item";

import { IInstitute } from "@src/common/Entities/Institute";
import { PropsAppStack } from "@src/routes/stacks/AppStack";
import {
  BACKGROUND_SECONDARY_COLOR,
  SECONDARY_COLOR,
} from "@src/constants/Colors";

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
    return (
      <Skeleton
        width={width - 48}
        height={116}
        colors={[BACKGROUND_SECONDARY_COLOR, SECONDARY_COLOR]}
      />
    );
  }

  return (
    <View style={styles.container}>
      <Header
        title="Instituições assistenciais"
        subtitle="Explore e contribua com um mundo melhor"
        variant="link"
      />

      <View style={styles.containerScroll}>
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
    </View>
  );
};

export default memo(Institutes);
