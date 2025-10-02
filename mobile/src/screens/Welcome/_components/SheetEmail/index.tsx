import { forwardRef } from "react";
import { Text, TextInput, TouchableOpacity, View } from "react-native";
import { styles } from "./styles";
import BottomSheet, { BottomSheetView } from "@gorhom/bottom-sheet";
import { AsteriskSquare } from "lucide-react-native";

import { HIGHLIGHT_COLOR } from "@src/constants/Colors";

interface SheetEmailProps {
  email: string;
  setEmail: (email: string) => void;
  onSend: () => void;
  onClose?: () => void;
}

const SheetEmail = forwardRef<BottomSheet, SheetEmailProps>(
  ({ email, setEmail, onSend, onClose }, ref) => {
    const handleSheetChanges = (index: number) => {
      if (index === 0) {
        onClose?.();
      }
    };

    return (
      <BottomSheet
        ref={ref}
        index={-1}
        snapPoints={["48%"]}
        onChange={handleSheetChanges}
        backgroundComponent={({ style }) => (
          <View style={[style, styles.container]} />
        )}
      >
        <BottomSheetView style={styles.containerBottom}>
          <View style={styles.containerIcon}>
            {[1, 2, 3].map((index) => (
              <AsteriskSquare key={index} size={22} color={HIGHLIGHT_COLOR} />
            ))}
          </View>

          <View style={styles.containerHeader}>
            <Text style={styles.title}>Esqueci a senha</Text>

            <Text style={styles.subtitle}>
              Digite seu e-mail de cadastro abaixo
            </Text>
          </View>

          <View style={styles.containerInput}>
            <Text style={styles.labelText}>E-mail</Text>
            <TextInput
              style={styles.input}
              placeholder="seuemail@exemplo.com"
              returnKeyType="done"
              onSubmitEditing={onSend}
              value={email}
              onChangeText={(text: string) => {
                setEmail(text);
              }}
            />
          </View>

          <TouchableOpacity
            style={styles.buttonForgot}
            activeOpacity={0.85}
            onPress={onSend}
          >
            <Text style={styles.textForgot}>Enviar</Text>
          </TouchableOpacity>
        </BottomSheetView>
      </BottomSheet>
    );
  }
);

export default SheetEmail;
