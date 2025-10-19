import { forwardRef } from "react";
import { Text, TextInput, TextInputProps, View } from "react-native";
import { styles } from "./styles";

type ITextAreaProps = TextInputProps & {
  label: string;
  width?: number;
};

const TextArea = forwardRef<any, ITextAreaProps>((props, ref) => {
  const { label, width, ...rest } = props;

  return (
    <View style={[styles.container, { width }]}>
      <Text style={styles.textLabel}>{label}</Text>
      <TextInput style={styles.input} ref={ref} {...rest} />
    </View>
  );
});

export default TextArea;
