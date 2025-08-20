import { forwardRef, useState } from "react";
import { ContainerField, ContainerInput, InputField, Label } from "./styles";
import { useThemeStore } from "@src/stores/ThemeStore";
import { Eye, EyeOff } from "lucide-react-native";

interface IInput {
  label: string;
  placeholder: string;
  keyType: string;
  onSubmitEditing: () => void;
  blurOnSubmit: boolean;
  password?: boolean;
  value: string;
  setValue: (text: string) => void;
}

const Input = forwardRef<any, IInput>(
  (
    {
      label,
      placeholder,
      keyType,
      onSubmitEditing,
      blurOnSubmit,
      password,
      value,
      setValue,
    },
    ref
  ) => {
    const { theme } = useThemeStore();

    const [showPassword, setShowPassword] = useState<boolean>(true);

    return (
      <ContainerField>
        <Label>{label}</Label>
        <ContainerInput>
          <InputField
            ref={ref}
            placeholder={placeholder}
            placeholderTextColor={theme.colors.textPrimary60}
            returnKeyType={keyType}
            onSubmitEditing={onSubmitEditing}
            blurOnSubmit={blurOnSubmit}
            secureTextEntry={password ? showPassword : false}
            value={value}
            onChangeText={setValue}
          />
          {password &&
            (showPassword ? (
              <Eye
                onPress={() => setShowPassword(!showPassword)}
                size={24}
                color={theme.colors.textSecondary}
              />
            ) : (
              <EyeOff
                onPress={() => setShowPassword(!showPassword)}
                size={24}
                color={theme.colors.textSecondary}
              />
            ))}
        </ContainerInput>
      </ContainerField>
    );
  }
);

export default Input;
