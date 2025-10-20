import { forwardRef, useEffect, useState } from "react";
import { Text, View } from "react-native";
import { styles } from "./styles";
import BottomSheet, { BottomSheetView } from "@gorhom/bottom-sheet";
import { PlusSquare } from "lucide-react-native";

import { Input } from "@src/components/Input";
import { Button } from "@src/components/Button";

import { HIGHLIGHT_COLOR } from "@src/constants/Colors";

interface SheetCodeProps {
  email: string;
  code: string;
  setCode: (code: string) => void;
  onClose?: () => void;
}

const SheetCode = forwardRef<BottomSheet, SheetCodeProps>(
  ({ email, code, setCode, onClose }, ref) => {
    const [remainingTime, setRemainingTime] = useState<number>(60);
    const [showButton, setShowButton] = useState<boolean>(false);

    useEffect(() => {
      const timer = setInterval(() => {
        if (remainingTime > 0) {
          setRemainingTime(remainingTime - 1);
        } else {
          setShowButton(true);
        }
      }, 1000);

      return () => clearInterval(timer);
    }, [remainingTime]);

    const handleResendCode = () => {
      setRemainingTime(60);
      setShowButton(false);
    };

    const handleSheetChanges = (index: number) => {
      if (index === 0) {
        onClose?.();
      }
    };

    return (
      <BottomSheet
        ref={ref}
        index={-1}
        snapPoints={["56%"]}
        onChange={handleSheetChanges}
        backgroundComponent={({ style }) => (
          <View style={[style, styles.container]} />
        )}
      >
        <BottomSheetView style={styles.containerBottom}>
          <View style={styles.containerIcon}>
            {[1, 2, 3].map((index) => (
              <PlusSquare key={index} size={22} color={HIGHLIGHT_COLOR} />
            ))}
          </View>

          <View style={styles.containerHeader}>
            <Text style={styles.title}>Código de confirmação</Text>

            <Text style={styles.subtitle}>
              Para confirmar seu e-mail, enviamos um código para sua caixa de
              entrada em {email}
            </Text>
          </View>

          <Input.Normal
            label="Código"
            placeholder="Seu código"
            returnKeyType="next"
            onSubmitEditing={() => onClose?.()}
            value={code}
            onChangeText={(text: string) => {
              setCode(text);
            }}
          />

          <View style={styles.containerButtons}>
            <Button.Primary text="Enviar" onPress={() => onClose?.()} />

            {showButton ? (
              <Button.Secondary text="Reenviar" onPress={handleResendCode} />
            ) : (
              <View style={styles.containerResend}>
                <Text style={styles.textResend}>
                  Reenviar código em {remainingTime} segundos
                </Text>
              </View>
            )}
          </View>
        </BottomSheetView>
      </BottomSheet>
    );
  }
);

export default SheetCode;
