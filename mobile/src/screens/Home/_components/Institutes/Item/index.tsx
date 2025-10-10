import { memo } from "react";
import { Image, Text, TouchableOpacity } from "react-native";
import { styles } from "./styles";

import { IInstitute } from "@src/common/Entities/Institute";
import { baseURL } from "@src/services/Api";

interface IItemProps {
  data: IInstitute;
  handleNavigateToInstituteDetail: (id: string) => void;
}

const Item = ({ data, handleNavigateToInstituteDetail }: IItemProps) => {
  const uri =
    data.picture.startsWith("data:image") || data.picture.startsWith("http")
      ? data.picture
      : `${baseURL}${data.picture}`;

  return (
    <TouchableOpacity
      style={styles.container}
      activeOpacity={0.85}
      onPress={() => handleNavigateToInstituteDetail(data.id)}
    >
      <Image style={styles.image} source={{ uri }} resizeMode="cover" />

      <Text style={styles.text}>{data.name}</Text>
    </TouchableOpacity>
  );
};

export default memo(Item);
