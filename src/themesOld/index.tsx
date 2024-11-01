import React from "react";
// material
import { CssBaseline, Palette } from "@mui/material";
import {
  ThemeProvider,
  createTheme,
  StyledEngineProvider,
  PaletteOptions,
} from "@mui/material/styles";
//
import palette from "./palette";
import typography from "./typography";
import componentsOverride from "./overrides";
import shadows, { customShadows } from "./shadows";
import { Shadows } from "@mui/material/styles/shadows";
import { TypographyOptions } from "@mui/material/styles/createTypography";
import { enUS, frFR, ruRU } from "@mui/material/locale";
import { useLanguageValue } from "../context/LanguageContext";
declare module "@mui/material/styles" {
  interface Theme {
    type: string;
    shadows: typeof shadows;
    customShadows: typeof customShadows;
    typography: typeof typography;
  }
  // allow configuration using `createTheme`
  interface ThemeOptions {
    type?: string;
    shadows?: Shadows;
    typography?: TypographyOptions | ((palette: Palette) => TypographyOptions);
    customShadows?: typeof customShadows;
  }
}

const getLocale = (language: string) => {
  switch (language) {
    case "ru":
      return ruRU;
    case "en":
      return enUS;
    case "fr":
      return frFR;
  }
  return ruRU;
};

// ----------------------------------------------------------------------
const AppThemeProvider = ({
  children,
}: {
  children: React.ReactNode;
}): JSX.Element => {
  const { languageState } = useLanguageValue();

  const themeWithLocale = React.useMemo(() => {
    const locale = getLocale(languageState.language);
    const theme = createTheme(
      {
        palette: palette as PaletteOptions,
        customShadows,
      },
      locale
    );
    theme.components = { ...theme.components, ...componentsOverride(theme) };
    return theme;
  }, [languageState.language]);

  return (
    <StyledEngineProvider injectFirst>
      <ThemeProvider theme={themeWithLocale}>
        <CssBaseline />
        {children}
      </ThemeProvider>
    </StyledEngineProvider>
  );
};

export default AppThemeProvider;
