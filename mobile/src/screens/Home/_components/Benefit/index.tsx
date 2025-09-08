import { TouchableOpacity, Image } from "react-native";

const Benefit = () => {
  return (
    <TouchableOpacity className="w-full h-60 rounded-xl" activeOpacity={0.85}>
      <Image
        className="w-full h-full rounded-xl"
        source={{
          uri: "https://placecats.com/300/300",
        }}
        resizeMode="cover"
      />
    </TouchableOpacity>
  );
};

export default Benefit;
