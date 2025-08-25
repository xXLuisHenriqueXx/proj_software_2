import { forwardRef, useState } from "react";
import { View } from "react-native";
import BottomSheet from "@gorhom/bottom-sheet";
import {
  ButtonSend,
  Container,
  ContainerIcon,
  ContainerInput,
  ContainerText,
  InputField,
  Label,
  Subtitle,
  TextSend,
  Title,
} from "./styles";
import { useThemeStore } from "@src/stores/ThemeStore";
import { AsteriskSquare } from "lucide-react-native";

interface SheetEmailProps {
  email: string;
  setEmail: (email: string) => void;
  onSend: () => void;
  onClose?: () => void;
}

const SheetEmail = forwardRef<BottomSheet, SheetEmailProps>(
  ({ email, setEmail, onSend, onClose }, ref) => {
    const { theme } = useThemeStore();

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
        snapPoints={["48%"]}
        onChange={handleSheetChanges}
        backgroundComponent={({ style }) => (
          <View
            style={[
              style,
              {
                borderTopLeftRadius: 24,
                borderTopRightRadius: 24,
                backgroundColor: theme.colors.textContrast,
                shadowColor: theme.colors.textPrimary,
                elevation: 30,
              },
            ]}
          />
        )}
      >
        <Container>
          <ContainerIcon>
            {[1, 2, 3].map((index) => (
              <AsteriskSquare
                key={index}
                size={22}
                color={theme.colors.highlight}
              />
            ))}
          </ContainerIcon>

          <ContainerText>
            <Title>Esqueci a senha</Title>

            <Subtitle>Digite seu e-mail de cadastro abaixo</Subtitle>
          </ContainerText>

          <ContainerInput>
            <Label>E-mail</Label>
            <InputField
              placeholder="seuemail@exemplo.com"
              returnKeyType="done"
              onSubmitEditing={onSend}
              blurOnSubmit={false}
              value={email}
              onChangeText={(text: string) => {
                setEmail(text);
              }}
            />
          </ContainerInput>

          <ButtonSend onPress={onSend}>
            <TextSend>Enviar</TextSend>
          </ButtonSend>
        </Container>
      </BottomSheet>
    );
  }
);

export default SheetEmail;
