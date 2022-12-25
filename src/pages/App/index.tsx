import React from 'react';
import { HelmetProvider } from 'react-helmet-async';
import { BrowserRouter, Route, Routes as Pages } from 'react-router-dom';

import Home from '#/pages/Home';
import Introduction from '#/pages/Introduction';
import NextSteps from '#/pages/NextSteps';
import NotFound from '#/pages/NotFound';
import Web from '#/pages/Web';
import DefaultThemeProvider from '#/theme/Default';

export const PAGES = {
  HOME: '/',
  WEB: '/teia',
  INTRODUCTION: '/introducao',
  NEXT_STEPS: '/proximos-passos',
  NOT_FOUND: '*',
};

const App: React.FC = () => {
  return (
    <HelmetProvider>
      <DefaultThemeProvider>
        <BrowserRouter>
          <Pages>
            <Route path={PAGES.HOME} element={<Home />} />
            <Route path={PAGES.WEB} element={<Web />} />
            <Route path={PAGES.INTRODUCTION} element={<Introduction />} />
            <Route path={PAGES.NEXT_STEPS} element={<NextSteps />} />
            <Route path={PAGES.NOT_FOUND} element={<NotFound />} />
          </Pages>
        </BrowserRouter>
      </DefaultThemeProvider>
    </HelmetProvider>
  );
};

export default App;
