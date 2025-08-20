import styled from "styled-components/native";
import Constants from "expo-constants";
import { ThemeType } from "@src/stores/ThemeStore";

interface ITheme {
  theme: ThemeType;
}

const statusBarHeight = Constants.statusBarHeight;

export const Container = styled.View`
  position: relative;
  flex: 1;
  flex-direction: column;
  align-items: center;
  background-color: ${({ theme }: ITheme) => theme.colors.backgroundPrimary};
  padding: 0 16px;
  padding-top: ${statusBarHeight};
`;

export const ContainerHeader = styled.View`
  flex-direction: row;
  align-items: center;
  width: 100%;
  column-gap: 16px;
  padding: 16px 0;
  margin-bottom: 48px;
`;

export const ButtonBack = styled.TouchableOpacity.attrs({
  activeOpacity: 0.85,
})``;

export const Title = styled.Text`
  font-size: 22px;
  font-family: ${({ theme }: ITheme) => theme.fonts.redHatDisplaySemiBold};
  color: ${({ theme }: ITheme) => theme.colors.textPrimary};
`;

export const ContainerFields = styled.View`
  flex-direction: column;
  width: 100%;
  row-gap: 24px;
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
`;

export const ButtonLogin = styled.TouchableOpacity.attrs({
  activeOpacity: 0.85,
})`
  position: absolute;
  bottom: 16px;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  width: 100%;
  height: 50px;
  background-color: ${({ theme }: ITheme) => theme.colors.highlight};
  border-radius: 12px;
`;

export const ButtonLoginText = styled.Text`
  font-size: 16px;
  font-family: ${({ theme }: ITheme) => theme.fonts.redHatDisplayMedium};
  color: ${({ theme }: ITheme) => theme.colors.textContrast};
`;
