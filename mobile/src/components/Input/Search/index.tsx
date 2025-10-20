import { forwardRef } from "react";
import { TextInput, TextInputProps, View } from "react-native";
import { styles } from "./styles";
import { ChevronLeft, SearchIcon } from "lucide-react-native";

import { Button } from "@src/components/Button";

import { HIGHLIGHT_COLOR } from "@src/constants/Colors";

type ISearchProps = TextInputProps & {
  onBack?: () => void;
};

const Search = forwardRef<any, ISearchProps>((props, ref) => {
  const { onBack, ...rest } = props;

  return (
    <View style={styles.container}>
      {onBack && <Button.Square icon={ChevronLeft} onPress={onBack} />}

      <View style={styles.containerInput}>
        <SearchIcon size={20} color={HIGHLIGHT_COLOR} />

        <TextInput ref={ref} style={styles.input} {...rest} />
      </View>
    </View>
  );
});

export default Search;
