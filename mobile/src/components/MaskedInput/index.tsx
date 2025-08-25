import { forwardRef } from "react";
import { ContainerField, ContainerInput, InputField, Label } from "./styles";
import { MaskInputProps } from "react-native-mask-input";

import { useThemeStore } from "@src/stores/ThemeStore";

type MaskType = (string | RegExp)[];

type IMaskedInputProps = MaskInputProps & {
  label: string;
  mask?: MaskType;
};

const MaskedInput = forwardRef<any, IMaskedInputProps>((props, ref) => {
  const { theme } = useThemeStore();
  const { label, ...rest } = props;

  return (
    <ContainerField>
      <ContainerInput>
        <Label>{label}</Label>
        <InputField
          ref={ref}
          placeholderTextColor={theme.colors.textPrimary60}
          {...rest}
        />
      </ContainerInput>
    </ContainerField>
  );
});

export default MaskedInput;
