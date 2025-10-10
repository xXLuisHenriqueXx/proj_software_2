import { View, Text } from "react-native";
import { styles } from "./styles";

interface IContentProps {
  title: string;
  subtitle?: string;
}

const Content = ({ title, subtitle }: IContentProps) => {
  return (
    <View style={styles.container}>
      <Text style={subtitle ? styles.titleSmall : styles.titleBig}>
        {title}
      </Text>

      {subtitle && <Text style={styles.subtitle}>{subtitle}</Text>}
    </View>
  );
};

export default Content;
