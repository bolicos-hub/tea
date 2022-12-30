import React from 'react';
import { HelmetProvider } from 'react-helmet-async';
import { BrowserRouter, Route, Routes as Pages } from 'react-router-dom';

import Home from '#/pages/Home';
import Introduction from '#/pages/Introduction';
import NextSteps from '#/pages/NextSteps';
import NotFound from '#/pages/NotFound';
import Web from '#/pages/Web';
import DefaultThemeProvider from '#/theme/Default';
import i18next from 'i18next';
import { I18nextProvider } from 'react-i18next';

// TRANSLATIONS ---------------------------------------------------
// English
import common_en from '#/translations/en/common.json';
import home_en from '#/translations/en/home.json';
import introduction_en from '#/translations/en/introduction.json';
import web_en from '#/translations/en/web.json';
// Portuguese
import common_pt from '#/translations/pt/common.json';
import home_pt from '#/translations/pt/home.json';
import introduction_pt from '#/translations/pt/introduction.json';
import web_pt from '#/translations/pt/web.json';
// ---------------------------------------------------

export const PAGES = {
  HOME: '/',
  WEB: '/teia',
  INTRODUCTION: '/introducao',
  NEXT_STEPS: '/proximos-passos',
  NOT_FOUND: '*',
};

const App: React.FC = () => {
  i18next.init({
    interpolation: { escapeValue: false },
    lng: 'pt',
    resources: {
      en: {
        common: common_en,
        home: home_en,
        introduction: introduction_en,
        web: web_en,
      },
      pt: {
        common: common_pt,
        home: home_pt,
        introduction: introduction_pt,
        web: web_pt,
      },
    },
  });

  return (
    <I18nextProvider i18n={i18next}>
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
    </I18nextProvider>
  );
};

export default App;
