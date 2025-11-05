import { forwardRef, useMemo } from "react";
import { Text, TextInput, TextInputProps, View } from "react-native";
import { styles } from "./styles";

type INormalProps = TextInputProps & {
  label: string;
  width?: number;
};

const Normal = forwardRef<any, INormalProps>((props, ref) => {
  const { label, width, ...rest } = props;

  const inputStyles = useMemo(() => [styles.container, { width }], [width]);

  return (
    <View style={inputStyles}>
      <Text style={styles.textLabel}>{label}</Text>
      <TextInput style={styles.input} ref={ref} {...rest} />
    </View>
  );
});

export default Normal;
