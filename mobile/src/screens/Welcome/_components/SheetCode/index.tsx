import { forwardRef, useEffect, useState } from "react";
import { Text, TextInput, TouchableOpacity, View } from "react-native";
import BottomSheet, { BottomSheetView } from "@gorhom/bottom-sheet";
import { PlusSquare } from "lucide-react-native";

interface SheetCodeProps {
  onClose?: () => void;
}

const SheetCode = forwardRef<BottomSheet, SheetCodeProps>(
  ({ onClose }, ref) => {
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
      console.log("handleSheetChanges", index);
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
          <View
            style={[
              style,
              {
                borderTopLeftRadius: 24,
                borderTopRightRadius: 24,
                backgroundColor: "#FEFEFE",
                shadowColor: "#131313",
                elevation: 30,
              },
            ]}
          />
        )}
      >
        <BottomSheetView className="relative flex-1 flex-col items-center gap-y-12 h-full py-4 px-6">
          <View className="flex-row items-center">
            {[1, 2, 3].map((index) => (
              <PlusSquare key={index} size={22} color={"#316A41"} />
            ))}
          </View>

          <View className="flex-col items-center gap-y-1">
            <Text className="text-2xl font-redHatDisplaySemiBold text-primary text-center">
              Código de confirmação
            </Text>

            <Text className="text-lg font-redHatDisplayRegular text-primary/60 text-center">
              Para confirmar seu e-mail, enviamos um código para sua caixa de
              entrada em youremail@exemplo.com
            </Text>
          </View>

          <View className="relative flex-row items-center justify-center h-16 px-4 border border-highlight rounded-xl">
            <Text className="absolute -top-3 left-4 px-2 bg-contrast text-sm font-redHatDisplayMedium text-highlight">
              Código
            </Text>
            <TextInput
              className="flex-1 text-base font-redHatDisplayRegular text-primary"
              placeholder="Seu código"
              returnKeyType="next"
              onSubmitEditing={() => onClose?.()}
              //   value={email}
              //   onChangeText={(text: string) => {
              //     setEmail(text);
              //   }}
            />
          </View>

          <View className="flex-col gap-y-4 w-full">
            <TouchableOpacity
              className="flex-row items-center justify-center w-full h-16 bg-highlight rounded-xl"
              activeOpacity={0.85}
            >
              <Text className="text-lg font-redHatDisplayMedium text-contrast">
                Enviar
              </Text>
            </TouchableOpacity>

            {showButton ? (
              <TouchableOpacity
                className="flex-row items-center justify-center w-full h-16 border border-highlight rounded-xl"
                activeOpacity={0.85}
                onPress={handleResendCode}
              >
                <Text className="text-lg font-redHatDisplayMedium text-highlight">
                  Reenviar
                </Text>
              </TouchableOpacity>
            ) : (
              <View className="flex-col items-center justify-center w-full h-16">
                <Text className="text-lg font-redHatDisplayMedium text-highlight text-center">
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
