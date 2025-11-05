import { forwardRef, useMemo } from "react";
import { Text, View } from "react-native";
import { styles } from "./styles";
import MaskInput, { MaskInputProps } from "react-native-mask-input";

type IMaskedProps = MaskInputProps & {
  label: string;
  width?: number;
};

const Masked = forwardRef<any, IMaskedProps>((props, ref) => {
  const { label, width, ...rest } = props;

  const inputStyles = useMemo(() => [styles.container, { width }], [width]);

  return (
    <View style={inputStyles}>
      <Text style={styles.textLabel}>{label}</Text>
      <MaskInput style={styles.input} ref={ref} {...rest} />
    </View>
  );
});

export default Masked;
