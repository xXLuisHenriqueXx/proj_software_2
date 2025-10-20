import { View, Text } from "react-native";
import { styles } from "./styles";

interface IContentProps {
  title: string;
  subtitle?: string;
  textCenter?: boolean;
}

const Content = ({ title, subtitle, textCenter }: IContentProps) => {
  return (
    <View
      style={[
        styles.container,
        { alignItems: textCenter ? "center" : "flex-start" },
      ]}
    >
      <Text style={subtitle ? styles.titleSmall : styles.titleBig}>
        {title}
      </Text>

      {subtitle && <Text style={styles.subtitle}>{subtitle}</Text>}
    </View>
  );
};

export default Content;
