import { Image, ScrollView, Text, TouchableOpacity, View } from "react-native";
import { styles } from "./styles";
import { NativeStackScreenProps } from "@react-navigation/native-stack";
import { Copy, Globe } from "lucide-react-native";

import Header from "./Header";
import Loader from "@src/components/Loader";

import { AppStackParamList } from "@src/routes/stacks/AppStack";
import { getAgeGroup } from "@src/utils/GetAgeGroup";
import { useInstituteDetail } from "@src/hooks/useInstituteDetail";
import {
  BACKGROUND_PRIMARY_COLOR,
  HIGHLIGHT_COLOR,
} from "@src/constants/Colors";
import { formatPhoneNumber } from "@src/utils/FormatPhoneNumber";

type Props = NativeStackScreenProps<AppStackParamList, "InstituteDetail">;
const mapImage = require("@assets/map.jpg");

const InstituteDetail = ({ route }: Props) => {
  const { id } = route.params || {};
  const { institute, loading, handleOpenSite, handleCopyPixKey } =
    useInstituteDetail(id);

  if (!institute || loading) {
    return <Loader />;
  }

  return (
    <ScrollView
      style={styles.container}
      contentContainerStyle={styles.containerScroll}
      showsVerticalScrollIndicator={false}
    >
      <Header />

      <View style={styles.containerContent}>
        <View style={styles.containerInfo}>
          <Image
            style={styles.image}
            source={{ uri: institute.picture }}
            resizeMode="cover"
          />

          <View style={styles.containerText}>
            <Text style={styles.name} numberOfLines={2}>
              {institute.name}
            </Text>
            <Text style={styles.ageRange}>
              {getAgeGroup(institute.ageRange)}
            </Text>
          </View>

          <Text style={styles.description}>{institute.description}</Text>
        </View>

        <View style={styles.containerCharacteristics}>
          <View>
            <Text style={styles.title}>Telefone</Text>
            {institute.phone.map((item) => (
              <Text key={item} style={styles.subtitle}>
                {formatPhoneNumber(item)}
              </Text>
            ))}
          </View>

          <View>
            <Text style={styles.title}>Endereço</Text>
            <Text style={styles.subtitle}>{institute.address}</Text>
          </View>

          <TouchableOpacity
            style={styles.buttonSite}
            activeOpacity={0.85}
            onPress={handleOpenSite}
          >
            <Text style={styles.textSite}>Acessar site</Text>

            <Globe style={styles.icon} size={20} color={HIGHLIGHT_COLOR} />
          </TouchableOpacity>

          <TouchableOpacity
            style={styles.buttonCopy}
            activeOpacity={0.85}
            onPress={handleCopyPixKey}
          >
            <Text style={styles.textCopy}>Copiar chave PIX</Text>
            <Copy
              style={styles.icon}
              size={20}
              color={BACKGROUND_PRIMARY_COLOR}
            />
          </TouchableOpacity>
        </View>

        <Image style={styles.map} source={mapImage} resizeMode="cover" />
      </View>
    </ScrollView>
  );
};

export default InstituteDetail;
