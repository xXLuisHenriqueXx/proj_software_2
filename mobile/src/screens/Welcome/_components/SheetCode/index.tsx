import { forwardRef, useEffect, useState } from "react";
import { View } from "react-native";
import BottomSheet from "@gorhom/bottom-sheet";
import {
  ButtonNew,
  ButtonSend,
  Container,
  ContainerButtons,
  ContainerIcon,
  ContainerInput,
  ContainerRemainingTime,
  ContainerText,
  InputField,
  Label,
  Subtitle,
  TextNew,
  TextRemainingTime,
  TextSend,
  Title,
} from "./styles";
import { useThemeStore } from "@src/stores/ThemeStore";
import { PlusSquare } from "lucide-react-native";

interface SheetCodeProps {
  onClose?: () => void;
}

const SheetCode = forwardRef<BottomSheet, SheetCodeProps>(
  ({ onClose }, ref) => {
    const { theme } = useThemeStore();

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
              <PlusSquare
                key={index}
                size={22}
                color={theme.colors.highlight}
              />
            ))}
          </ContainerIcon>

          <ContainerText>
            <Title>Código de confirmação</Title>

            <Subtitle>
              Para confirmar seu e-mail, enviamos um código para sua caixa de
              entrada em youremail@exemplo.com
            </Subtitle>
          </ContainerText>

          <ContainerInput>
            <Label>Código</Label>
            <InputField
              placeholder="Seu código"
              returnKeyType="next"
              onSubmitEditing={() => onClose?.()}
              blurOnSubmit={false}
              //   value={email}
              //   onChangeText={(text: string) => {
              //     setEmail(text);
              //   }}
            />
          </ContainerInput>

          <ContainerButtons>
            <ButtonSend>
              <TextSend>Enviar</TextSend>
            </ButtonSend>

            {showButton ? (
              <ButtonNew onPress={handleResendCode}>
                <TextNew>Reenviar</TextNew>
              </ButtonNew>
            ) : (
              <ContainerRemainingTime>
                <TextRemainingTime>
                  Reenviar código em {remainingTime} segundos
                </TextRemainingTime>
              </ContainerRemainingTime>
            )}
          </ContainerButtons>
        </Container>
      </BottomSheet>
    );
  }
);

export default SheetCode;
