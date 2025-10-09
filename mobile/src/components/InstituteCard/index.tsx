import { memo } from "react";
import { Image, Text, TouchableOpacity } from "react-native";
import { styles } from "./styles";

import { IInstitute } from "@src/common/Entities/Institute";
import { baseURL } from "@src/services/Api";

interface IInstituteCardProps {
  item: IInstitute;
  handleNavigateToInstituteDetail: (id: string) => void;
}

const InstituteCard = ({
  item,
  handleNavigateToInstituteDetail,
}: IInstituteCardProps) => {
  const uri =
    item.picture.startsWith("data:image") || item.picture.startsWith("http")
      ? item.picture
      : `${baseURL}${item.picture}`;

  return (
    <TouchableOpacity
      style={styles.container}
      activeOpacity={0.85}
      onPress={() => handleNavigateToInstituteDetail(item.id)}
    >
      <Image
        style={styles.image}
        source={{
          uri,
        }}
        resizeMode="cover"
      />

      <Text style={styles.text}>{item.name}</Text>
    </TouchableOpacity>
  );
};

export default memo(InstituteCard);
