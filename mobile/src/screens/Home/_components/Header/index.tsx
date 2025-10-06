import { View, Text, TouchableOpacity, Image } from "react-native";
import { styles } from "./styles";
import { LogOut, User2 } from "lucide-react-native";

import { HIGHLIGHT_COLOR } from "@src/constants/Colors";
import { baseURL } from "@src/services/Api";
import { memo } from "react";

interface IHeaderProps {
  name?: string;
  picture?: string;
  onLogout: () => void;
}

const Header = ({ name, picture, onLogout }: IHeaderProps) => {
  return (
    <View style={styles.container}>
      <View style={styles.containerUser}>
        {picture ? (
          <Image
            style={styles.image}
            source={{
              uri: picture.startsWith("data:image")
                ? picture
                : `${baseURL}${picture}`,
            }}
            resizeMode="cover"
          />
        ) : (
          <View style={styles.image}>
            <User2 size={20} color={HIGHLIGHT_COLOR} strokeWidth={1} />
          </View>
        )}

        <Text style={styles.title}>
          Olá, <Text style={styles.titleHighlight}>{name}</Text>
        </Text>
      </View>

      <TouchableOpacity activeOpacity={0.85} onPress={onLogout}>
        <LogOut size={24} color={HIGHLIGHT_COLOR} />
      </TouchableOpacity>
    </View>
  );
};

export default memo(Header);
