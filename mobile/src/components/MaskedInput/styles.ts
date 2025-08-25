import styled from "styled-components/native";
import { ThemeType } from "@src/stores/ThemeStore";
import MaskInput from "react-native-mask-input";

interface ITheme {
  theme: ThemeType;
}

export const ContainerField = styled.View`
  flex-direction: column;
`;

export const ContainerInput = styled.View`
  position: relative;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  column-gap: 8px;
  padding: 0 16px;
  height: 56px;
  margin-bottom: 16px;
  background-color: ${({ theme }: ITheme) => theme.colors.backgroundPrimary};
  border: 1px solid ${({ theme }: ITheme) => theme.colors.highlight};
  border-radius: 12px;
`;

export const Label = styled.Text`
  position: absolute;
  top: -10px;
  left: 12px;
  padding: 0 8px;
  background-color: ${({ theme }: ITheme) => theme.colors.backgroundPrimary};
  font-size: 12px;
  font-family: ${({ theme }: ITheme) => theme.fonts.redHatDisplayMedium};
  color: ${({ theme }: ITheme) => theme.colors.highlight};
`;

export const InputField = styled(MaskInput)`
  flex: 1;
  font-size: 14px;
  font-family: ${({ theme }: ITheme) => theme.fonts.redHatDisplayRegular};
  color: ${({ theme }: ITheme) => theme.colors.textPrimary};
`;
