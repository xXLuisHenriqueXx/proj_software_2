import { memo, useCallback } from "react";
import {
  View,
  Text,
  TouchableOpacity,
  ScrollView,
  Image,
  useWindowDimensions,
} from "react-native";
import { styles } from "./styles";
import { useNavigation } from "@react-navigation/native";
import { Skeleton } from "moti/skeleton";
import { ChevronRight } from "lucide-react-native";

import { IInstitute } from "@src/common/Entities/Institute";
import { PropsAppStack } from "@src/routes/stacks/AppStack";
import {
  BACKGROUND_SECONDARY_COLOR,
  PRIMARY_COLOR,
  SECONDARY_COLOR,
} from "@src/constants/Colors";
import { baseURL } from "@src/services/Api";

interface IInstituteProps {
  data: IInstitute[];
}

interface IInstituteItemProps {
  item: IInstitute;
  index: number;
  handleNavigateToInstituteDetail: (id: string) => void;
}

const InstituteItem = ({
  item,
  index,
  handleNavigateToInstituteDetail,
}: IInstituteItemProps) => (
  <TouchableOpacity
    key={index}
    style={styles.containerItem}
    activeOpacity={0.85}
    onPress={() => handleNavigateToInstituteDetail(item.id)}
  >
    <Image
      style={styles.image}
      source={{
        uri:
          item.picture.startsWith("data:image") ||
          item.picture.startsWith("http")
            ? item.picture
            : `${baseURL}${item.picture}`,
      }}
      resizeMode="contain"
    />

    <Text style={styles.name}>{item.name}</Text>
  </TouchableOpacity>
);

const Institutes = ({ data }: IInstituteProps) => {
  const { width } = useWindowDimensions();

  const navigation = useNavigation<PropsAppStack>();

  const handleNavigateToInstituteDetail = useCallback(
    (id: string) => {
      navigation.navigate("InstituteDetail", { id });
    },
    [navigation]
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
      <TouchableOpacity style={styles.containerHeader} activeOpacity={0.85}>
        <View style={{ flexDirection: "column" }}>
          <Text style={styles.title}>Instituições assistenciais</Text>
          <Text style={styles.subtitle}>
            Explore e contribua com um mundo melhor
          </Text>
        </View>

        <ChevronRight size={24} color={PRIMARY_COLOR} />
      </TouchableOpacity>

      <View style={{ width: "100%" }}>
        <ScrollView
          contentContainerStyle={{ columnGap: 16 }}
          horizontal
          showsHorizontalScrollIndicator={false}
        >
          {data.map((item, index) => (
            <InstituteItem
              key={index}
              item={item}
              index={index}
              handleNavigateToInstituteDetail={handleNavigateToInstituteDetail}
            />
          ))}
        </ScrollView>
      </View>
    </View>
  );
};

export default memo(Institutes);
