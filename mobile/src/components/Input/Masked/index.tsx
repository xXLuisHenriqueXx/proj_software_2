import { forwardRef } from "react";
import { Text, View } from "react-native";
import { styles } from "./styles";
import MaskInput, { MaskInputProps } from "react-native-mask-input";

type IMaskedProps = MaskInputProps & {
  label: string;
  width?: number;
};

const Masked = forwardRef<any, IMaskedProps>((props, ref) => {
  const { label, width, ...rest } = props;

  return (
    <View style={[styles.container, { width }]}>
      <Text style={styles.textLabel}>{label}</Text>
      <MaskInput style={styles.input} ref={ref} {...rest} />
    </View>
  );
});

export default Masked;
