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
  padding-top: ${statusBarHeight + 60}px;
`;

export const Logo = styled.Image.attrs({
  resizeMode: "cover",
})`
  width: 209px;
  height: 243px;
  margin-bottom: 110px;
`;

export const ContainerText = styled.View`
  flex-direction: column;
  align-items: center;
  row-gap: 8px;
  padding: 0 16px;
`;

export const Title = styled.Text`
  font-size: 18px;
  font-family: ${({ theme }: ITheme) => theme.fonts.redHatDisplaySemiBold};
  text-align: center;
`;

export const Subtitle = styled.Text`
  font-size: 14px;
  font-family: ${({ theme }: ITheme) => theme.fonts.redHatDisplayRegular};
  text-align: center;
`;

export const ContainerBottom = styled.View`
  position: absolute;
  bottom: 0;
  left: 0;
  right: 0;
  flex-direction: column;
  align-items: center;
  row-gap: 24px;
  padding: 32px 16px;
  background-color: ${({ theme }: ITheme) => theme.colors.textContrast};
  border-radius: 24px 24px 0 0;
`;

export const ButtonLogin = styled.TouchableOpacity.attrs({
  activeOpacity: 0.85,
})`
  flex-direction: row;
  align-items: center;
  justify-content: center;
  width: 100%;
  height: 50px;
  background-color: ${({ theme }: ITheme) => theme.colors.highlight};
  border-radius: 12px;
`;

export const ButtonRegister = styled(ButtonLogin)`
  background-color: transparent;
`;

export const LoginText = styled.Text`
  font-size: 16px;
  font-family: ${({ theme }: ITheme) => theme.fonts.redHatDisplayMedium};
  color: ${({ theme }: ITheme) => theme.colors.textContrast};
`;

export const RegisterText = styled(LoginText)`
  color: ${({ theme }: ITheme) => theme.colors.highlight};
`;
