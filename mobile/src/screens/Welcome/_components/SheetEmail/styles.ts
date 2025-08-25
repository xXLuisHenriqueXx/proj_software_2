import styled from "styled-components/native";
import { ThemeType } from "@src/stores/ThemeStore";
import { BottomSheetView } from "@gorhom/bottom-sheet";

interface ITheme {
  theme: ThemeType;
}

export const Container = styled(BottomSheetView)`
  flex: 1;
  flex-direction: column;
  align-items: center;
  row-gap: 36px;
  height: 100%;
  padding: 16px;
`;

export const ContainerIcon = styled.View`
  flex-direction: row;
  align-items: center;
`;

export const ContainerText = styled.View`
  flex-direction: column;
  align-items: center;
  row-gap: 4px;
`;

export const Title = styled.Text`
  font-size: 22px;
  font-family: ${({ theme }: ITheme) => theme.fonts.redHatDisplaySemiBold};
  color: ${({ theme }: ITheme) => theme.colors.textPrimary};
  text-align: center;
`;

export const Subtitle = styled.Text`
  font-size: 16px;
  font-family: ${({ theme }: ITheme) => theme.fonts.redHatDisplayRegular};
  color: ${({ theme }: ITheme) => theme.colors.textPrimary60};
  text-align: center;
`;

export const ContainerInput = styled.View`
  position: relative;
  flex-direction: row;
  justify-content: center;
  width: 100%;
  height: 56px;
  align-items: center;
  padding: 0 16px;
  background-color: ${({ theme }: ITheme) => theme.colors.textContrast};
  border: 1px solid ${({ theme }: ITheme) => theme.colors.highlight};
  border-radius: 12px;
`;

export const Label = styled.Text`
  position: absolute;
  top: -10px;
  left: 12px;
  padding: 0 8px;
  background-color: ${({ theme }: ITheme) => theme.colors.textContrast};
  font-size: 12px;
  font-family: ${({ theme }: ITheme) => theme.fonts.redHatDisplayMedium};
  color: ${({ theme }: ITheme) => theme.colors.highlight};
`;

export const InputField = styled.TextInput`
  flex: 1;
  font-size: 14px;
  font-family: ${({ theme }: ITheme) => theme.fonts.redHatDisplayRegular};
  color: ${({ theme }: ITheme) => theme.colors.textPrimary};
`;

export const ButtonSend = styled.TouchableOpacity.attrs({
  activeOpacity: 0.85,
})`
  position: absolute;
  bottom: 16px;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  width: 100%;
  height: 56px;
  background-color: ${({ theme }: ITheme) => theme.colors.highlight};
  border-radius: 12px;
`;

export const TextSend = styled.Text`
  font-size: 16px;
  font-family: ${({ theme }: ITheme) => theme.fonts.redHatDisplayMedium};
  color: ${({ theme }: ITheme) => theme.colors.textContrast};
`;
