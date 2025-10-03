import { View, Text, TouchableOpacity } from "react-native";
import { styles } from "./styles";
import { ChevronRight } from "lucide-react-native";

interface IHeaderProps {
  title: string;
  subtitile: string;
}

const Header = ({ title, subtitile }: IHeaderProps) => {
  return (
    <TouchableOpacity style={styles.containerHeader} activeOpacity={0.85}>
      <View style={{ flexDirection: "column" }}>
        <Text style={styles.title}>{title}</Text>
        <Text style={styles.subtitle}>{subtitile}</Text>
      </View>

      <ChevronRight size={24} color={"#131313"} />
    </TouchableOpacity>
  );
};

export default Header;
