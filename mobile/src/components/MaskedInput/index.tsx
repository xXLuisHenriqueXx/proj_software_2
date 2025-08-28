import { forwardRef } from "react";
import { Text, View } from "react-native";
import MaskInput, { MaskInputProps } from "react-native-mask-input";

type MaskType = (string | RegExp)[];

type IMaskedInputProps = MaskInputProps & {
  label: string;
  mask?: MaskType;
};

const MaskedInput = forwardRef<any, IMaskedInputProps>((props, ref) => {
  const { label, ...rest } = props;

  return (
    <View className="relative flex-row items-center justify-center h-16 px-4 border border-highlight rounded-xl">
      <Text className="absolute -top-3 left-4 px-2 bg-backgroundPrimary text-sm font-redHatDisplayMedium text-highlight">
        {label}
      </Text>
      <MaskInput
        className="flex-1 text-base font-redHatDisplayRegular text-primary"
        ref={ref}
        {...rest}
      />
    </View>
  );
});

export default MaskedInput;
