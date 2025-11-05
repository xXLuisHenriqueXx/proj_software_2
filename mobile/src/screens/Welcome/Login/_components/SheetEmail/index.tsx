import { forwardRef, useMemo } from "react";
import { Text, View } from "react-native";
import { styles } from "./styles";
import BottomSheet, { BottomSheetView } from "@gorhom/bottom-sheet";
import { AsteriskSquare } from "lucide-react-native";

import { Input } from "@src/components/Input";
import { Button } from "@src/components/Button";

import { HIGHLIGHT_COLOR } from "@src/constants/Colors";

interface ISheetEmailProps {
  email: string;
  setEmail: (email: string) => void;
  onSend: () => void;
  onClose?: () => void;
}

const SheetEmail = forwardRef<BottomSheet, ISheetEmailProps>(
  ({ email, setEmail, onSend, onClose }, ref) => {
    const onSheetChanges = (index: number) => {
      if (index === 0) {
        onClose?.();
      }
    };

    const renderIcons = useMemo(() => {
      return [1, 2, 3].map((index) => (
        <AsteriskSquare key={index} size={22} color={HIGHLIGHT_COLOR} />
      ));
    }, []);

    return (
      <BottomSheet
        ref={ref}
        index={-1}
        snapPoints={["50%"]}
        onChange={onSheetChanges}
        enablePanDownToClose
        backgroundComponent={({ style }) => (
          <View style={[style, styles.container]} />
        )}
      >
        <BottomSheetView style={styles.containerBottom}>
          <View style={styles.containerIcon}>{renderIcons}</View>

          <View style={styles.containerHeader}>
            <Text style={styles.title}>Esqueci a senha</Text>

            <Text style={styles.subtitle}>
              Digite seu e-mail de cadastro abaixo
            </Text>
          </View>

          <Input.Normal
            label="E-mail"
            placeholder="seuemail@exemplo.com"
            returnKeyType="done"
            onSubmitEditing={onSend}
            value={email}
            onChangeText={(text: string) => {
              setEmail(text);
            }}
          />

          <Button.Primary text="Enviar" onPress={onSend} />
        </BottomSheetView>
      </BottomSheet>
    );
  }
);

export default SheetEmail;
