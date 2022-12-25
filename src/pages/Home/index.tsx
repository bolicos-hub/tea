import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

import { Button, Container, Stack, Typography } from '@mui/material';
import { Helmet } from 'react-helmet-async';
import { PAGES } from '../App';

const Home: React.FC = () => {
  const [isLoading] = useState(false);
  const navigate = useNavigate();

  const helmet = 'Teia do TEA';
  const title = 'TEIA DO TEA';
  const subtitle = 'Site e app feito por autistas para autistas - mapeamento de sintomas (não é um diagnóstico)';
  const description = 'NOME';
  const funcionatilies = 'Descrição das funcionalidades';
  const wordButton = 'TEIA';
  const introButton = 'INTRODUÇÃO';
  const futureButton = 'Fiz a minha teia e agora?';
  const lastUpdates = 'Ultimas atualizações:';
  const goals = 'Ferramenta criada por pessoas autistas para pessoas autistas.';

  return isLoading ? (
    <>...Carregando</>
  ) : (
    <>
      <Helmet>
        <title>{helmet}</title>
      </Helmet>

      <Container>
        <Stack direction="column" alignItems="center" justifyContent="space-between" mb={5}>
          <Typography variant="h1" gutterBottom>
            {title}
          </Typography>

          <Typography variant="h3" gutterBottom>
            {subtitle}
          </Typography>
        </Stack>

        <Stack direction="column" alignItems="center" justifyContent="space-between" mb={5}>
          <Typography variant="h4" gutterBottom>
            {description}
          </Typography>

          <Typography variant="h4" gutterBottom>
            {funcionatilies}
          </Typography>
        </Stack>

        <Stack mb={5} direction="column" alignItems="center" justifyContent="space-between">
          <Button onClick={() => navigate(PAGES.WEB)}>{wordButton}</Button>
          <Button onClick={() => navigate(PAGES.INTRODUCTION)}>{introButton}</Button>
          <Button onClick={() => navigate(PAGES.NEXT_STEPS)}>{futureButton}</Button>
        </Stack>

        <Stack direction="column" alignItems="center" justifyContent="space-between" mb={5}>
          <Typography variant="h4" gutterBottom>
            {lastUpdates}
          </Typography>

          <Typography variant="h4" gutterBottom>
            {goals}
          </Typography>
        </Stack>
      </Container>
    </>
  );
};

export default Home;
