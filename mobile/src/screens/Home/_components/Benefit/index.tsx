import { TouchableOpacity, Image } from "react-native";
import { styles } from "./styles";
import { memo } from "react";

const Benefit = () => {
  return (
    <TouchableOpacity style={styles.container} activeOpacity={0.85}>
      <Image
        style={styles.image}
        source={{
          uri: "https://images.ctfassets.net/eexbcii1ci83/FFVexcCF2r9y32NKaeJuN/2c5114d698ce78b9cfbd2032b90d29cc/Mental_health_benefits_of_playing_card_games.jpg",
        }}
        resizeMode="cover"
      />
    </TouchableOpacity>
  );
};

export default memo(Benefit);
