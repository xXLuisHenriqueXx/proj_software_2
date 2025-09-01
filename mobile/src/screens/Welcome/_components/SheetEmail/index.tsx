import { forwardRef } from "react";
import { Text, TextInput, TouchableOpacity, View } from "react-native";
import BottomSheet, { BottomSheetView } from "@gorhom/bottom-sheet";
import { AsteriskSquare } from "lucide-react-native";

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
              <AsteriskSquare key={index} size={22} color={"#316A41"} />
            ))}
          </View>

          <View className="flex-col items-center gap-y-1">
            <Text className="text-2xl font-redHatDisplaySemiBold text-primary text-center">
              Esqueci a senha
            </Text>

            <Text className="text-lg font-redHatDisplayRegular text-primary/60 text-center">
              Digite seu e-mail de cadastro abaixo
            </Text>
          </View>

          <View className="relative flex-row items-center justify-center h-16 px-4 border border-highlight rounded-xl">
            <Text className="absolute -top-3 left-4 px-2 bg-contrast text-sm font-redHatDisplayMedium text-highlight">
              E-mail
            </Text>
            <TextInput
              className="flex-1 text-base font-redHatDisplayRegular text-primary"
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
            className="flex-row items-center justify-center w-full h-16 bg-highlight rounded-xl"
            activeOpacity={0.85}
            onPress={onSend}
          >
            <Text className="text-lg font-redHatDisplayMedium text-contrast">
              Enviar
            </Text>
          </TouchableOpacity>
        </BottomSheetView>
      </BottomSheet>
    );
  }
);

export default SheetEmail;
