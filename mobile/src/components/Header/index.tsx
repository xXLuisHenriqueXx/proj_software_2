import React, { memo } from "react";
import { View, Text, TouchableOpacity } from "react-native";
import { styles } from "./styles";
import { useNavigation } from "@react-navigation/native";
import { ChevronLeft, ChevronRight, X } from "lucide-react-native";

import { PRIMARY_COLOR, SECONDARY_COLOR } from "@src/constants/Colors";
import { PropsRoot } from "@src/routes";

export type HeaderVariant = "back" | "close" | "link" | "noClose";

interface HeaderProps {
  title: string;
  subtitle?: string;
  variant?: HeaderVariant;
  onPress?: () => void;
}

const Header = ({
  title,
  subtitle,
  variant = "back",
  onPress,
}: HeaderProps) => {
  const navigation = useNavigation<PropsRoot>();

  const handleBack = () => {
    if (onPress) return onPress();
    navigation.goBack();
  };

  const renderLeftIcon = () => {
    if (variant === "back") {
      return (
        <TouchableOpacity activeOpacity={0.85} onPress={handleBack}>
          <ChevronLeft size={24} color={SECONDARY_COLOR} />
        </TouchableOpacity>
      );
    }
    return null;
  };

  const renderRightIcon = () => {
    if (variant === "close" || variant === "link") {
      return (
        <TouchableOpacity activeOpacity={0.85} onPress={onPress}>
          {variant === "close" ? (
            <X size={24} color={PRIMARY_COLOR} />
          ) : (
            <ChevronRight size={24} color={PRIMARY_COLOR} />
          )}
        </TouchableOpacity>
      );
    }
    return null;
  };

  const Wrapper = variant === "link" ? TouchableOpacity : View;

  return (
    <Wrapper
      style={
        variant === "back" || variant === "close"
          ? styles.containerHeaderBack
          : styles.containerHeader
      }
      activeOpacity={0.85}
      onPress={variant === "link" ? onPress : undefined}
    >
      {renderLeftIcon()}

      <View style={{ flex: 1 }}>
        <Text
          style={
            variant === "back" || variant === "close"
              ? styles.titleBack
              : styles.title
          }
        >
          {title}
        </Text>
        {subtitle && <Text style={styles.subtitle}>{subtitle}</Text>}
      </View>

      {renderRightIcon()}
    </Wrapper>
  );
};

export default memo(Header);
