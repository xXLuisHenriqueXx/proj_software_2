import { TouchableOpacity, Image } from "react-native";
import { styles } from "./styles";

const Benefit = () => {
  return (
    <TouchableOpacity style={styles.container} activeOpacity={0.85}>
      <Image
        style={styles.image}
        source={{
          uri: "https://placecats.com/300/300",
        }}
        resizeMode="cover"
      />
    </TouchableOpacity>
  );
};

export default Benefit;
