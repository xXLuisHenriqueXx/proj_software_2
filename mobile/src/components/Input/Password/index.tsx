import { forwardRef, useState } from "react";
import { Text, TextInput, TextInputProps, View } from "react-native";
import { styles } from "./styles";
import { Eye, EyeOff } from "lucide-react-native";

import { PRIMARY_COLOR_75 } from "@src/constants/Colors";

type IPasswordProps = TextInputProps & {
  label: string;
  instruction?: string;
  width: number;
};

const Password = forwardRef<any, IPasswordProps>((props, ref) => {
  const { label, instruction, width, ...rest } = props;
  const [showPassword, setShowPassword] = useState<boolean>(true);

  return (
    <View style={styles.container}>
      <View style={[styles.containerInput, { width }]}>
        <Text style={styles.textLabel}>{label}</Text>
        <TextInput
          style={styles.input}
          ref={ref}
          secureTextEntry={showPassword}
          {...rest}
        />
        {showPassword ? (
          <Eye
            onPress={() => setShowPassword(false)}
            size={24}
            color={PRIMARY_COLOR_75}
          />
        ) : (
          <EyeOff
            onPress={() => setShowPassword(true)}
            size={24}
            color={PRIMARY_COLOR_75}
          />
        )}
      </View>
      {instruction && <Text style={styles.textInstruction}>{instruction}</Text>}
    </View>
  );
});

export default Password;
