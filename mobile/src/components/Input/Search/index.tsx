import { forwardRef } from "react";
import {
  TextInput,
  TextInputProps,
  TouchableOpacity,
  View,
} from "react-native";
import { styles } from "./styles";
import { ChevronLeft, SearchIcon } from "lucide-react-native";

import {
  BACKGROUND_PRIMARY_COLOR,
  HIGHLIGHT_COLOR,
} from "@src/constants/Colors";

type ISearchProps = TextInputProps & {
  onBack?: () => void;
};

const Search = forwardRef<any, ISearchProps>((props, ref) => {
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

        <TextInput ref={ref} style={styles.input} {...rest} />
      </View>
    </View>
  );
});

export default Search;
