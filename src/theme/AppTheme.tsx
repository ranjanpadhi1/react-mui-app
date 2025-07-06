import * as React from 'react';
import { ThemeProvider, createTheme } from '@mui/material/styles';
import type { ThemeOptions } from '@mui/material/styles';

import { inputsCustomizations } from './customizations/inputs';
import { dataDisplayCustomizations } from './customizations/dataDisplay';
import { feedbackCustomizations } from './customizations/feedback';
import { navigationCustomizations } from './customizations/navigation';
import { surfacesCustomizations } from './customizations/surfaces';

import {
  colorSchemes,
  typography,
  shadows,
  shape,
} from './themePrimitives';

interface AppThemeProps {
  children: React.ReactNode;
  disableCustomTheme?: boolean;
  themeComponents?: ThemeOptions['components'];
  mode?: 'light' | 'dark'; // ✅ Added to support light/dark mode
}

export default function AppTheme(props: AppThemeProps) {
  const { children, disableCustomTheme, themeComponents, mode = 'light' } = props;

  const theme = React.useMemo(() => {
    if (disableCustomTheme) {
      return {};
    }

    return createTheme({
      // Enables CSS variables via MUI v6
      cssVariables: {
        colorSchemeSelector: 'data-mui-color-scheme',
        cssVarPrefix: 'template',
      },
      colorSchemes: {
        light: colorSchemes.light,
        dark: colorSchemes.dark,
      },
      palette: {
        mode, // ✅ Use the mode prop ('light' or 'dark')
      },
      typography,
      shadows,
      shape,
      components: {
        ...inputsCustomizations,
        ...dataDisplayCustomizations,
        ...feedbackCustomizations,
        ...navigationCustomizations,
        ...surfacesCustomizations,
        ...themeComponents,
      },
    });
  }, [disableCustomTheme, themeComponents, mode]);

  if (disableCustomTheme) {
    return <>{children}</>;
  }

  return (
    <ThemeProvider theme={theme} disableTransitionOnChange>
      {children}
    </ThemeProvider>
  );
}
