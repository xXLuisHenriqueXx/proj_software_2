import { View, Text, Image } from "react-native";
import { styles } from "./styles";

import { IToyOwner } from "@src/common/Interfaces/Toy.interface";
import { baseURL } from "@src/services/Api";

interface IOwnerProps {
  owner: IToyOwner;
}

const Owner = ({ owner }: IOwnerProps) => {
  return (
    <View style={styles.container}>
      <Image
        style={styles.image}
        source={{
          uri:
            owner.picture.startsWith("data:image") ||
            owner.picture.startsWith("http")
              ? owner.picture
              : `${baseURL}${owner.picture}`,
        }}
        resizeMode="contain"
      />

      <View>
        <Text style={styles.title}>Proprietário</Text>
        <Text style={styles.nameText}>{owner.name}</Text>
      </View>
    </View>
  );
};

export default Owner;
