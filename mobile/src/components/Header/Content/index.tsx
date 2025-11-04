import { View, Text, ViewStyle } from "react-native";
import { styles } from "./styles";
import { useMemo } from "react";

interface IContentProps {
  title: string;
  subtitle?: string;
  textCenter?: boolean;
}

const Content = ({ title, subtitle, textCenter }: IContentProps) => {
  const containerStyle: ViewStyle[] = useMemo(
    () => [
      styles.container,
      { alignItems: textCenter ? "center" : "flex-start" },
    ],
    [textCenter]
  );

  const titleStyle = useMemo(
    () => (subtitle ? styles.titleSmall : styles.titleBig),
    [subtitle]
  );

  return (
    <View style={containerStyle}>
      <Text style={titleStyle}>{title}</Text>

      {subtitle && <Text style={styles.subtitle}>{subtitle}</Text>}
    </View>
  );
};

export default Content;
