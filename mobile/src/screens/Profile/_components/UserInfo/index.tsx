import { memo, useMemo } from "react";
import { View, Text, Image } from "react-native";
import { styles } from "./styles";
import { User2 } from "lucide-react-native";

import { IUser } from "@src/common/Entities/User";
import { HIGHLIGHT_COLOR } from "@src/constants/Colors";

interface IUserInfo {
  user: IUser;
}

const UserInfo = ({ user }: IUserInfo) => {
  const renderImage = useMemo(() => {
    if (user?.picture) {
      return <Image style={styles.picture} source={{ uri: user.picture }} />;
    } else {
      return (
        <View style={styles.picture}>
          <User2 size={64} color={HIGHLIGHT_COLOR} strokeWidth={1} />
        </View>
      );
    }
  }, [user?.picture]);

  return (
    <View style={styles.container}>
      {renderImage}

      <View style={styles.containerText}>
        <Text style={styles.nameText} numberOfLines={1}>
          {user.name}
        </Text>
        <Text style={styles.emailText} numberOfLines={1}>
          {user.email}
        </Text>
      </View>
    </View>
  );
};

export default memo(UserInfo);
