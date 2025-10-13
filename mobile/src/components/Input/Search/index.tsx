import { ChevronLeft, SearchIcon } from "lucide-react-native";
import {
  TextInput,
  TextInputProps,
  TouchableOpacity,
  View,
} from "react-native";
import { styles } from "./styles";

import {
  BACKGROUND_PRIMARY_COLOR,
  HIGHLIGHT_COLOR,
} from "@src/constants/Colors";

type ISearchProps = TextInputProps & {
  onBack?: () => void;
};

const Search = (props: ISearchProps) => {
  const { onBack, ...rest } = props;

  return (
    <View style={styles.container}>
      {onBack && (
        <TouchableOpacity
          style={styles.button}
          onPress={onBack}
          activeOpacity={0.85}
        >
          <ChevronLeft size={24} color={BACKGROUND_PRIMARY_COLOR} />
        </TouchableOpacity>
      )}

      <View style={styles.containerInput}>
        <SearchIcon size={20} color={HIGHLIGHT_COLOR} />

        <TextInput style={styles.input} {...rest} />
      </View>
    </View>
  );
};

export default Search;
