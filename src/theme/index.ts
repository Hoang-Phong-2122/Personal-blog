import type { Direction, Theme } from '@mui/material';
import { createTheme as createMuiTheme, responsiveFontSizes } from '@mui/material/styles';
import { baseThemeOptions } from './base-theme-options';
import { lightThemeOptions } from './light-theme-options';

interface Neutral {
  100: string;
  200: string;
  300: string;
  400: string;
  500: string;
  600: string;
  700: string;
  800: string;
  900: string;
}

interface Gradient {
  main: string;
}

interface SidebarColor {
  main: string;
  active: string;
}

interface Status {
  statusBG: string,
  statusTXT: string,
}

declare module '@mui/material/styles' {
  interface Palette {
    neutral?: Neutral;
    gradient?: Gradient;
    sidebarColor?: SidebarColor;
    statusSuccess?: Status;
    statusWaiting?: Status;
  }

  interface PaletteOptions {
    neutral?: Neutral;
    gradient?: Gradient;
    sidebarColor?: SidebarColor;
    statusSuccess?: Status;
    statusWaiting?: Status;
  }
}

interface ThemeConfig {
  direction?: Direction;
  responsiveFontSizes?: boolean;
  mode: 'light' | 'dark';
}

export const createTheme = (config: ThemeConfig): Theme => {
  let theme = createMuiTheme(baseThemeOptions, config.mode === 'dark' ? {} : lightThemeOptions, {
    direction: config.direction,
    typography: {
      fontSize: 12,
    },
  });

  if (config.responsiveFontSizes) {
    theme = responsiveFontSizes(theme);
  }

  return theme;
};
