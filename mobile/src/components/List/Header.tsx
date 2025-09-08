import { View, Text, TouchableOpacity } from "react-native";
import { ChevronRight } from "lucide-react-native";

interface IHeaderProps {
  title: string;
  subtitile: string;
}

const Header = ({ title, subtitile }: IHeaderProps) => {
  return (
    <TouchableOpacity
      className="flex-row items-start justify-between gap-x-2 w-full"
      activeOpacity={0.85}
    >
      <View className="flex-col">
        <Text className="text-lg font-redHatDisplaySemiBold text-primary">
          {title}
        </Text>
        <Text className="text-base font-redHatDisplayRegular text-primary">
          {subtitile}
        </Text>
      </View>

      <ChevronRight size={24} color={"#131313"} />
    </TouchableOpacity>
  );
};

export default Header;
