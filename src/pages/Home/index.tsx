import React, { useState } from "react";

import { Container } from "@mui/material";

const Home: React.FC = () => {
  const [isLoading] = useState(false);

  const title = "TEIA DO TEA";
  const subtitle =
    "Site e app feito por autistas para autistas - mapeamento de sintomas (não é um diagnóstico)";
  const description = "NOME";
  const funcionatilies = "Descrição das funcionalidades";
  const wordButton = "TEIA";
  const introButton = "INTRODUÇÃO";
  const futureButton = "Fiz a minha teia e agora?";
  const lastUpdates = "Ultimas atualizações:";
  const goals = "Ferramenta criada por pessoas autistas para pessoas autistas.";

  return isLoading ? (
    <>...Carregando</>
  ) : (
    <>
      <Container>
        <h1>{title}</h1>
        <p>{subtitle}</p>
        <br />
        <br />
        <div>
          <h2>{description}</h2>
          <p>{funcionatilies}</p>
          <br />
          <button>{wordButton}</button>
          <br />
          <button>{introButton}</button>
          <br />
          <button>{futureButton}</button>
          <br />

          <br />
          <p>{lastUpdates}</p>
          <br />
          <p>{goals}</p>
        </div>
      </Container>
    </>
  );
};

export default Home;
