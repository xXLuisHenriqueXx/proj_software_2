import "styled-components";

declare module "styled-components" {
  export interface DefaultTheme {
    colors: {
      highlight: string;
      textPrimary: string;
      textSecondary: string;
      textContrast: string;
      backgroundPrimary: string;
      backgroundSecondary: string;
      backgroundTertiary: string;
      cancel: string;
      alert: string;
    };
  }
}
