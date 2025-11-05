import { forwardRef, useMemo } from "react";
import { Text, TextInput, TextInputProps, View } from "react-native";
import { styles } from "./styles";

type ITextAreaProps = TextInputProps & {
  label: string;
  width?: number;
};

const TextArea = forwardRef<any, ITextAreaProps>((props, ref) => {
  const { label, width, ...rest } = props;

  const inputStyles = useMemo(() => [styles.container, { width }], [width]);

  return (
    <View style={inputStyles}>
      <Text style={styles.textLabel}>{label}</Text>
      <TextInput style={styles.input} ref={ref} {...rest} />
    </View>
  );
});

export default TextArea;
