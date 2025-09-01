import { TouchableOpacity, Image } from "react-native";

const Benefit = () => {
  return (
    <TouchableOpacity className="w-full h-60 rounded-xl" activeOpacity={0.85}>
      <Image
        className="w-full h-full rounded-xl"
        source={{
          uri: "https://ingresso-a.akamaihd.net/b2b/production/uploads/article/image/3600/693695cead3e56eef1c9ce94df4ed832.jpg",
        }}
        resizeMode="cover"
      />
    </TouchableOpacity>
  );
};

export default Benefit;
