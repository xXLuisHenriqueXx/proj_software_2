import { Text, Pressable, View } from "react-native";
import React from "react";
import {
  HIGHLIGHT_COLOR,
  PRIMARY_COLOR,
  PRIMARY_COLOR_25,
} from "@src/constants/Colors";
import { ChevronRight, LucideIcon } from "lucide-react-native";
import { MEDIUM_FONT } from "@src/constants/Fonts";

interface IProfileProps {
  text: string;
  icon: LucideIcon;
  onPress: () => void;
  color: string;
  backgroundColor: string;
}

const Profile = ({
  text,
  icon: Icon,
  onPress,
  color,
  backgroundColor,
}: IProfileProps) => {
  return (
    <Pressable
      style={{
        flexDirection: "row",
        alignItems: "center",
        justifyContent: "space-between",
        width: "100%",
        paddingHorizontal: 8,
        paddingVertical: 16,
        borderRadius: 12,
        overflow: "hidden",
      }}
      android_ripple={{
        color,
        borderless: false,
        foreground: true,
      }}
      onPress={onPress}
    >
      <View
        style={{ flexDirection: "row", alignItems: "center", columnGap: 16 }}
      >
        <View
          style={{
            padding: 8,
            backgroundColor,
            borderRadius: 8,
          }}
        >
          <Icon size={20} color={color} />
        </View>
        <Text
          style={{
            fontSize: 16,
            fontFamily: MEDIUM_FONT,
            color,
          }}
        >
          {text}
        </Text>
      </View>

      <ChevronRight size={20} color={color} />
    </Pressable>
  );
};

export default Profile;
