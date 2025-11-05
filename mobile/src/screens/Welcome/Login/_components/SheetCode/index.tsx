import { forwardRef, useEffect, useMemo, useState } from "react";
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

    const onResendCode = () => {
      setRemainingTime(60);
      setShowButton(false);
    };

    const onSheetChanges = (index: number) => {
      if (index === 0) {
        onClose?.();
      }
    };

    const renderIcons = useMemo(() => {
      return [1, 2, 3].map((index) => (
        <PlusSquare key={index} size={22} color={HIGHLIGHT_COLOR} />
      ));
    }, []);

    const renderResendButton = useMemo(() => {
      if (showButton) {
        return <Button.Secondary text="Reenviar" onPress={onResendCode} />;
      } else {
        return (
          <View style={styles.containerResend}>
            <Text style={styles.textResend}>Reenviar em {remainingTime}</Text>
          </View>
        );
      }
    }, [showButton, remainingTime]);

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

            {renderResendButton}
          </View>
        </BottomSheetView>
      </BottomSheet>
    );
  }
);

export default SheetCode;
