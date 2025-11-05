import { Image, ScrollView, Text, View } from "react-native";
import { styles } from "./styles";
import { NativeStackScreenProps } from "@react-navigation/native-stack";
import { X } from "lucide-react-native";

import { Header } from "@src/components/Header";
import { Button } from "@src/components/Button";
import Loader from "@src/components/Loader";

import { AppStackParamList } from "@src/routes/stacks/AppStack";
import { getAgeGroup } from "@src/utils/GetAgeGroup";
import { useInstituteDetail } from "@src/hooks/useInstituteDetail";
import { formatPhoneNumber } from "@src/utils/FormatPhoneNumber";
import { useAppNavigation } from "@src/hooks/useAppNavigation";

type Props = NativeStackScreenProps<AppStackParamList, "InstituteDetail">;

const InstituteDetail = ({ route }: Props) => {
  const { id } = route.params || {};
  const { institute, loading, handleOpenSite, handleCopyPixKey } =
    useInstituteDetail(id);

  const { rootNavigation } = useAppNavigation();

  if (!institute || loading) {
    return <Loader />;
  }

  return (
    <ScrollView
      style={styles.container}
      contentContainerStyle={styles.containerScroll}
      showsVerticalScrollIndicator={false}
    >
      <Header.Root padding={16}>
        <Header.Content title="Instituição assistencial" />
        <Header.RightIcon icon={X} onPress={() => rootNavigation.goBack()} />
      </Header.Root>

      <View style={styles.containerContent}>
        <View style={styles.containerInfo}>
          <Image
            style={styles.image}
            source={{ uri: institute.picture }}
            resizeMode="cover"
          />

          <View style={styles.containerText}>
            <Text style={styles.textName} numberOfLines={2}>
              {institute.name}
            </Text>
            <Text style={styles.subtitle}>
              {getAgeGroup(institute.ageRange)}
            </Text>
          </View>

          <Text style={styles.textDescription}>{institute.description}</Text>
        </View>

        <View>
          <Text style={styles.title}>
            {institute.phone.length > 1 ? "Telefones" : "Telefone"}
          </Text>
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

        <Button.Secondary
          text="Acessar site"
          onPress={handleOpenSite}
          style={styles.buttonSite}
        />

        <Button.Primary text="Copiar chave PIX" onPress={handleCopyPixKey} />

        <Image
          style={styles.containerMap}
          source={require("@assets/map.jpg")}
          resizeMode="cover"
        />
      </View>
    </ScrollView>
  );
};

export default InstituteDetail;
