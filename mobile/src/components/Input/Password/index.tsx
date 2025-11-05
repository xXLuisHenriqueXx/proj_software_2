import { forwardRef, useMemo, useState } from "react";
import {
  Text,
  TextInput,
  TextInputProps,
  TouchableOpacity,
  View,
} from "react-native";
import { styles } from "./styles";
import { Eye, EyeOff } from "lucide-react-native";

import { PRIMARY_COLOR_75 } from "@src/constants/Colors";

type IPasswordProps = TextInputProps & {
  label: string;
  instruction?: string;
  width?: number;
};

const Password = forwardRef<any, IPasswordProps>((props, ref) => {
  const { label, instruction, width, ...rest } = props;
  const [showPassword, setShowPassword] = useState<boolean>(true);

  const inputStyles = useMemo(
    () => [styles.containerInput, { width }],
    [width]
  );

  const renderIcon = useMemo(() => {
    if (showPassword) {
      return <Eye size={24} color={PRIMARY_COLOR_75} />;
    } else {
      return <EyeOff size={24} color={PRIMARY_COLOR_75} />;
    }
  }, [showPassword]);

  const renderInstruction = useMemo(() => {
    if (instruction) {
      return <Text style={styles.textInstruction}>{instruction}</Text>;
    }
  }, [instruction]);

  return (
    <View style={styles.container}>
      <View style={inputStyles}>
        <Text style={styles.textLabel}>{label}</Text>
        <TextInput
          style={styles.input}
          ref={ref}
          secureTextEntry={showPassword}
          {...rest}
        />
        <TouchableOpacity
          activeOpacity={0.85}
          onPress={() => setShowPassword(!showPassword)}
        >
          {renderIcon}
        </TouchableOpacity>
      </View>

      {renderInstruction}
    </View>
  );
});

export default Password;
