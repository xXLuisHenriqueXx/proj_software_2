import { forwardRef } from "react";
import { Text, TextInput, TextInputProps, View } from "react-native";
import { styles } from "./styles";

type INormalProps = TextInputProps & {
  label: string;
  width: number;
  height?: number;
};

const Normal = forwardRef<any, INormalProps>((props, ref) => {
  const { label, width, height = 64, ...rest } = props;

  return (
    <View style={[styles.container, { width, height }]}>
      <Text style={styles.textLabel}>{label}</Text>
      <TextInput style={styles.input} ref={ref} {...rest} />
    </View>
  );
});

export default Normal;
