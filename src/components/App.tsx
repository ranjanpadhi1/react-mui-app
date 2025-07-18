import { Routes, Route } from 'react-router-dom';
import type { } from '@mui/x-date-pickers/themeAugmentation';
import type { } from '@mui/x-charts/themeAugmentation';
import type { } from '@mui/x-tree-view/themeAugmentation';
import { alpha } from '@mui/material/styles';
import CssBaseline from '@mui/material/CssBaseline';
import Box from '@mui/material/Box';
import Stack from '@mui/material/Stack';

import AppNavbar from './common/AppNavbar';
import Header from './common/Header';
import SideMenu from './common/SideMenu';
import AppTheme from '../theme/AppTheme';

import ChatWindow from './chat/ChatWindow';
import {mainListItems} from './common/MenuContent';

export default function App(props: { disableCustomTheme?: boolean }) {
  return (
    <AppTheme {...props} mode="dark">
      <CssBaseline enableColorScheme />
      <Box sx={{ display: 'flex' }}>
        <SideMenu />
        <AppNavbar />
        <ChatWindow />
        <Box
          component="main"
          sx={(theme) => ({
            flexGrow: 1,
            backgroundColor: theme.vars
              ? `rgba(${theme.vars.palette.background.defaultChannel} / 1)`
              : alpha(theme.palette.background.default, 1),
            overflow: 'auto',
          })}
        >
          <Stack
            spacing={2}
            sx={{
              alignItems: 'center',
              mx: 3,
              pb: 5,
              mt: { xs: 8, md: 0 },
            }}
          >
            <Header />
            <Routes>
              {mainListItems.map((item) => (
                <Route
                  key={item.text}
                  path={item.path}
                  element={item.component}
                />
              ))}
            </Routes>
          </Stack>
        </Box>
      </Box>
    </AppTheme>
  );
}
