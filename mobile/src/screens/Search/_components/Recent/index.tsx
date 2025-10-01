import { recentSearchService } from "@src/services/RecentSearchService";
import { History, X } from "lucide-react-native";
import { View, Text, TouchableOpacity } from "react-native";

interface IRecentProps {
  data: string[];
  setSearch: (value: string) => void;
}

const Recent = ({ data, setSearch }: IRecentProps) => {
  return (
    <View className="flex-col gap-y-4 w-full">
      <Text className="text-lg font-redHatDisplayMedium text-primary">
        Pesquisas recentes
      </Text>

      {data.length > 0 ? (
        <View className="flex-col gap-y-8 w-full">
          {data.map((item, index) => (
            <TouchableOpacity
              key={index}
              className="flex-row items-center justify-between w-full"
              activeOpacity={0.85}
              onPress={() => setSearch(item)}
            >
              <View className="flex-row items-center gap-x-2">
                <History size={20} color={"#13131360"} />
                <Text className="text-lg font-redHatDisplayRegular text-primary">
                  {item}
                </Text>
              </View>

              <X
                size={20}
                color={"#131313"}
                onPress={() => {
                  recentSearchService.delete(item);
                }}
              />
            </TouchableOpacity>
          ))}
        </View>
      ) : (
        <Text className="text-base font-redHatDisplayRegular text-primary/60">
          Nenhuma pesquisa recente ...
        </Text>
      )}
    </View>
  );
};

export default Recent;
