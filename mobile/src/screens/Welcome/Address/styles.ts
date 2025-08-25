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
  padding-top: ${statusBarHeight}px;
`;

export const ContainerHeader = styled.View`
  flex-direction: row;
  align-items: center;
  width: 100%;
  column-gap: 16px;
  padding: 16px 0;
`;

export const ButtonBack = styled.TouchableOpacity.attrs({
  activeOpacity: 0.85,
})``;

export const Title = styled.Text`
  font-size: 22px;
  font-family: ${({ theme }: ITheme) => theme.fonts.redHatDisplaySemiBold};
  color: ${({ theme }: ITheme) => theme.colors.textPrimary};
`;

export const ButtonRegister = styled.TouchableOpacity.attrs({
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

export const RegisterText = styled.Text`
  font-size: 16px;
  font-family: ${({ theme }: ITheme) => theme.fonts.redHatDisplayMedium};
  color: ${({ theme }: ITheme) => theme.colors.textContrast};
`;
