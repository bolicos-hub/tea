import React, { useState } from 'react';
import { Helmet } from 'react-helmet-async';
import { useTranslation } from 'react-i18next';
import { useNavigate } from 'react-router-dom';

import { Button, Container, Stack, Typography } from '@mui/material';

import ChangeLanguage from '#/components/ChangeLanguage';
import { PAGES } from '#/pages/App';

const Home: React.FC = () => {
  const [isLoading] = useState(false);
  const navigate = useNavigate();
  const { t } = useTranslation('home');

  return isLoading ? (
    <>...Carregando</>
  ) : (
    <>
      <Helmet>
        <title>{t('helmet')}</title>
      </Helmet>

      <Container>
        <Stack direction="column" alignItems="center" justifyContent="space-between" mb={5}>
          <ChangeLanguage />
        </Stack>

        <Stack direction="column" alignItems="center" justifyContent="space-between" mb={5}>
          <Typography variant="h1" gutterBottom>
            {t('title')}
          </Typography>

          <Typography variant="h3" gutterBottom>
            {t('subtitle')}
          </Typography>
        </Stack>

        <Stack direction="column" alignItems="center" justifyContent="space-between" mb={5}>
          <Typography variant="h4" gutterBottom>
            {t('description')}
          </Typography>

          <Typography variant="h4" gutterBottom>
            {t('funcionatilies')}
          </Typography>
        </Stack>

        <Stack mb={5} direction="column" alignItems="center" justifyContent="space-between">
          <Button onClick={() => navigate(PAGES.WEB)}>{t('buttons.web')}</Button>
          <Button onClick={() => navigate(PAGES.INTRODUCTION)}>{t('buttons.introduction')}</Button>
          <Button onClick={() => navigate(PAGES.NEXT_STEPS)}>{t('buttons.next-steps')}</Button>
        </Stack>

        <Stack direction="column" alignItems="center" justifyContent="space-between" mb={5}>
          <Typography variant="h4" gutterBottom>
            {t('last-updates')}
          </Typography>

          <Typography variant="h4" gutterBottom>
            {t('goals')}
          </Typography>
        </Stack>
      </Container>
    </>
  );
};

export default Home;
