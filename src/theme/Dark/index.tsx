import React, { useMemo } from 'react';

// @mui
import { CssBaseline, Theme, ThemeOptions } from '@mui/material';
import { createTheme, StyledEngineProvider, ThemeProvider as MUIThemeProvider } from '@mui/material/styles';

//
import GlobalStyles from './globalStyles';
// import componentsOverride from './overrides';
import palette from './palette';
import shadows from './shadows';
import typography from './typography';

type Props = {
  children: React.ReactNode;
};

export default function ThemeProvider({ children }: Props) {
  const themeOptions: ThemeOptions = useMemo(
    () => ({
      palette,
      shape: { borderRadius: 6 },
      typography,
      shadows: shadows(),
    }),
    []
  );

  const theme: Theme = createTheme(themeOptions);
  //   theme.components = componentsOverride(theme);

  return (
    <StyledEngineProvider injectFirst>
      <MUIThemeProvider theme={theme}>
        <CssBaseline />
        <GlobalStyles />
        {children}
      </MUIThemeProvider>
    </StyledEngineProvider>
  );
}
