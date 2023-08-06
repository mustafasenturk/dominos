import { Colors } from "./colors";

export interface ITheme {
  light: {
    theme: string;
    color: string;
    background: string;
    shadow: string;
  },
  dark: {
    theme: string;
    color: string;
    background: string;
    shadow: string;
  }
}

const theme: ITheme = {
  light: {
    theme: 'light',
    color: Colors.DARK_GRAY,
    background: Colors.WHITE,
    shadow: Colors.BLACK,
  },
  dark: {
    theme: 'dark',
    color: Colors.WHITE,
    background: Colors.DARK_GRAY,
    shadow: Colors.WHITE,
  },
};

export default theme;