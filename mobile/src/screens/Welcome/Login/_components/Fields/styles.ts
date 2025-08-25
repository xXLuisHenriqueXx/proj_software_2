import styled from "styled-components/native";
import { ThemeType } from "@src/stores/ThemeStore";

interface ITheme {
  theme: ThemeType;
}

export const ContainerFields = styled.ScrollView`
  width: 100%;
  padding-top: 48px;
`;

export const ContainerField = styled.View`
  flex-direction: column;
`;

export const ContainerInput = styled.View`
  position: relative;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  padding: 0 16px;
  height: 56px;
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

export const InputField = styled.TextInput`
  flex: 1;
  font-size: 14px;
  font-family: ${({ theme }: ITheme) => theme.fonts.redHatDisplayRegular};
  color: ${({ theme }: ITheme) => theme.colors.textPrimary};
`;

export const ButtonForgot = styled.TouchableOpacity.attrs({
  activeOpacity: 0.85,
})``;

export const ButtonForgotText = styled.Text`
  font-size: 14px;
  font-family: ${({ theme }: ITheme) => theme.fonts.redHatDisplayMedium};
  color: ${({ theme }: ITheme) => theme.colors.highlight};
  text-align: right;
  text-decoration: underline;
  width: 100%;
  margin-top: 8px;
`;
