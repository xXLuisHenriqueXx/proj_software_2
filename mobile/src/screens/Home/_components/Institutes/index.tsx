import { View, Text, TouchableOpacity, ScrollView, Image } from "react-native";
import { styles } from "./styles";
import { ChevronRight } from "lucide-react-native";

import { institutesData } from "@src/static/InstitutesData";
import { IInstitute } from "@src/common/Entities/Institute";
import { useNavigation } from "@react-navigation/native";
import { PropsAppStack } from "@src/routes/stacks/AppStack";

const Institutes = () => {
  const navigation = useNavigation<PropsAppStack>();

  const handleNavigateToInstituteDetail = (institute: IInstitute) => {
    navigation.navigate("InstituteDetail", { institute });
  };

  return (
    <View style={styles.container}>
      <TouchableOpacity style={styles.containerHeader} activeOpacity={0.85}>
        <View style={{ flexDirection: "column" }}>
          <Text style={styles.title}>Instituições assistenciais</Text>
          <Text style={styles.subtitle}>
            Explore e contribua com um mundo melhor
          </Text>
        </View>

        <ChevronRight size={24} color={"#131313"} />
      </TouchableOpacity>

      <View style={{ width: "100%" }}>
        <ScrollView
          contentContainerStyle={{ columnGap: 16 }}
          horizontal
          showsHorizontalScrollIndicator={false}
        >
          {institutesData.map((item, index) => (
            <TouchableOpacity
              key={index}
              style={styles.containerItem}
              activeOpacity={0.85}
              onPress={() => handleNavigateToInstituteDetail(item)}
            >
              <Image
                style={styles.image}
                source={{ uri: item.src }}
                resizeMode="contain"
              />

              <Text style={styles.name}>{item.name}</Text>
            </TouchableOpacity>
          ))}
        </ScrollView>
      </View>
    </View>
  );
};

export default Institutes;
