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

interface IInstituteItemProps {
  data: IInstitute[];
}

const Institutes = ({ data }: IInstituteItemProps) => {
  const { width } = useWindowDimensions();

  const navigation = useNavigation<PropsAppStack>();

  const handleNavigateToInstituteDetail = (id: string) => {
    navigation.navigate("InstituteDetail", { id });
  };

  return (
    <Skeleton
      width={width - 48}
      height={116}
      colors={[BACKGROUND_SECONDARY_COLOR, SECONDARY_COLOR]}
    >
      {data.length > 0 ? (
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
                <TouchableOpacity
                  key={index}
                  style={styles.containerItem}
                  activeOpacity={0.85}
                  onPress={() => handleNavigateToInstituteDetail(item.id)}
                >
                  <Image
                    style={styles.image}
                    source={{
                      uri: item.picture,
                    }}
                    resizeMode="contain"
                  />

                  <Text style={styles.name}>{item.name}</Text>
                </TouchableOpacity>
              ))}
            </ScrollView>
          </View>
        </View>
      ) : null}
    </Skeleton>
  );
};

export default Institutes;
