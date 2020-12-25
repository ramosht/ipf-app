export type ThemeProps = {
  colors: {
    primary: string;
    secondary: string;
    black: string;
    white: string;
    grey: string;
    midGrey: string;
    lightGrey: string;
  };
};

export const theme: ThemeProps = {
  colors: {
    primary: '#0B7786',
    secondary: '#A60C00',
    black: '#1F1F1F',
    white: '#FFFFFF',
    grey: '#383838',
    midGrey: '#525252',
    lightGrey: '#9F9F9F',
  },
};

export default theme;
