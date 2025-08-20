import styled from "styled-components/native";
import { ThemeType } from "@src/stores/ThemeStore";

interface ITheme {
  theme: ThemeType;
}

export const ContainerField = styled.View`
  flex-direction: column;
  row-gap: 8px;
`;

export const Label = styled.Text`
  font-size: 14px;
  font-family: ${({ theme }: ITheme) => theme.fonts.redHatDisplayMedium};
  color: ${({ theme }: ITheme) => theme.colors.textPrimary};
`;

export const ContainerInput = styled.View`
  flex-direction: row;
  justify-content: center;
  align-items: center;
  column-gap: 8px;
  padding: 16px;
  background-color: ${({ theme }: ITheme) => theme.colors.backgroundSecondary};
  border: 1px solid ${({ theme }: ITheme) => theme.colors.highlight};
  border-radius: 12px;
`;

export const InputField = styled.TextInput`
  flex: 1;
  font-size: 14px;
  font-family: ${({ theme }: ITheme) => theme.fonts.redHatDisplayRegular};
  color: ${({ theme }: ITheme) => theme.colors.textPrimary};
`;
