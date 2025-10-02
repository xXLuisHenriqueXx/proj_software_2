import { forwardRef } from "react";
import { Text, View } from "react-native";
import MaskInput, { MaskInputProps } from "react-native-mask-input";
import { styles } from "./styles";

type MaskType = (string | RegExp)[];

type IMaskedInputProps = MaskInputProps & {
  label: string;
  mask?: MaskType;
};

const MaskedInput = forwardRef<any, IMaskedInputProps>((props, ref) => {
  const { label, ...rest } = props;

  return (
    <View style={styles.containerInput}>
      <Text style={styles.labelText}>{label}</Text>
      <MaskInput style={styles.input} ref={ref} {...rest} />
    </View>
  );
});

export default MaskedInput;
