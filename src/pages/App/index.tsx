import React from 'react';
import { BrowserRouter, Route, Routes as Switch } from 'react-router-dom';

import { Box, CssBaseline, ThemeProvider } from '@mui/material';

import HomePage from '#/pages/Home';
import NotFoundPage from '#/pages/NotFound';
import Theme from '#/Theme';

const PAGES = {
  HOME: () => '/',
  NOT_FOUND: () => '*',
};

const App: React.FC = () => {
  return (
    <ThemeProvider theme={Theme}>
      <Box sx={{ display: 'flex' }}>
        <CssBaseline />
        <BrowserRouter>
          <Switch>
            <Route path={PAGES.HOME()} element={<HomePage />} />
            <Route path={PAGES.NOT_FOUND()} element={<NotFoundPage />} />
          </Switch>
        </BrowserRouter>
      </Box>
    </ThemeProvider>
  );
};

export default App;
