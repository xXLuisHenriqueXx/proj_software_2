import { memo } from "react";
import { View, TouchableOpacity, Image, Text } from "react-native";
import { styles } from "./styles";
import { MessageSquareMoreIcon, User2 } from "lucide-react-native";

import { HIGHLIGHT_COLOR } from "@src/constants/Colors";
import { baseURL } from "@src/services/Api";

interface IHeaderProps {
  picture?: string;
}

const Header = ({ picture }: IHeaderProps) => {
  const uri =
    picture?.startsWith("data:image") || picture?.startsWith("http")
      ? picture
      : `${baseURL}${picture}`;

  return (
    <View style={styles.container}>
      <TouchableOpacity activeOpacity={0.85}>
        <MessageSquareMoreIcon size={24} color={HIGHLIGHT_COLOR} />
      </TouchableOpacity>

      <TouchableOpacity activeOpacity={0.85}>
        {picture ? (
          <Image style={styles.image} source={{ uri }} resizeMode="cover" />
        ) : (
          <View style={styles.image}>
            <User2 size={20} color={HIGHLIGHT_COLOR} />
          </View>
        )}
      </TouchableOpacity>
    </View>
  );
};

export default memo(Header);
