import React from 'react';
import { Helmet } from 'react-helmet-async';
import { useTranslation } from 'react-i18next';
import { useNavigate } from 'react-router-dom';

import { Button, Container, Stack, Typography } from '@mui/material';

import ChangeLanguage from '#/components/ChangeLanguage';
import { ButtonParameters, StackParameters, TypographyParameters } from '#/models';
import { PAGES } from '../App';

const NextSteps: React.FC = () => {
  const navigate = useNavigate();
  const { t } = useTranslation('next_steps');

  const buttonDefaultProps = (to: string) =>
    ({
      variant: 'contained',
      fullWidth: true,
      onClick: () => navigate(to),
    } as ButtonParameters);

  const typographyDefaultProps = (variant = 'h4') =>
    ({
      variant: variant,
      gutterBottom: true,
      textAlign: { xs: 'center', sm: 'center', md: 'center' },
    } as TypographyParameters);

  const stackDefaultProps = {
    direction: 'column',
    alignItems: 'center',
    justifyContent: 'space-between',
    mb: 6,
  } as StackParameters;

  const stackButtonProps = {
    ...stackDefaultProps,
    direction: { md: 'row', lg: 'row', xl: 'row' },
    spacing: { xs: 2, sm: 2, md: 4, lg: 5, xl: 6 },
    mx: { xs: 2, sm: 9, md: 12, lg: 15, xl: 19 },
  } as StackParameters;

  return (
    <>
      <Helmet>
        <title>{t('helmet')}</title>
      </Helmet>

      <Container>
        <ChangeLanguage />

        <Stack {...stackDefaultProps}>
          <Typography {...typographyDefaultProps('h1')}>{t('title')}</Typography>
          <Typography {...typographyDefaultProps('h3')}>{t('subtitle')}</Typography>
        </Stack>

        <Stack {...stackButtonProps}>
          <Button {...buttonDefaultProps(PAGES.HOME)}>{t('buttons.back')}</Button>
        </Stack>
      </Container>
    </>
  );
};

export default NextSteps;
