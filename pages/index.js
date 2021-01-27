import React, { useState } from 'react';
import { useRouter } from 'next/router';
import db from '../db.json';

import QuizBackground from '../src/components/QuizBackground';
import Wrapper from '../src/components/Wrapper';
import Widget from '../src/components/Widget';
import Footer from '../src/components/Footer';
import GitHubCorner from '../src/components/GitHubCorner';
import CampoNome from '../src/components/CampoNome';
import Button from '../src/components/Button';
import QuizLogo from '../src/components/QuizLogo';
import Texto from '../src/components/Texto';
import Titulo from '../src/components/Titulo';

function Home() {
  const router = useRouter();
  const [nome, setNome] = useState('');

  const buttonIsDisable = nome.length === 0;

  function handleFormSubmit(evento) {
    evento.preventDefault();
    router.push(`/quiz?name=${nome}`);
  }

  function handleInputChange(evento) {
    setNome(evento.target.value);
  }

  return (
    <QuizBackground backgroundImage={db.bg.primary}>
      <Wrapper>

        <QuizLogo />

        <Widget>

          <Widget.Header>
            <Titulo
              size="1.6rem"
              lineHeight="1.8rem"
              weight="bold"
            >
              {db.title}
            </Titulo>
          </Widget.Header>

          <Widget.Content>
            <Texto
              size="1.4rem"
              lineHeight="2rem"
            >
              {db.description}
            </Texto>
            <form onSubmit={handleFormSubmit}>
              <CampoNome
                onChange={handleInputChange}
                placeholder="Diz aí seu nome pra jogar :)"
                value={nome}
              />
              <Button
                type="submit"
                disabled={buttonIsDisable}
              >
                Jogar
              </Button>
            </form>
          </Widget.Content>

        </Widget>

        <Widget>

          <Widget.Header>
            <Titulo
              size="1.6rem"
              lineHeight="1.8rem"
              weight="bold"
            >
              Quizes da galera
            </Titulo>
          </Widget.Header>

          <Widget.Content>
            <Texto
              size="1.4rem"
              lineHeight="2rem"
            >
              Dá uma olhada nesses quizes incríveis que o pessoal da Imersão Alguma coisa fez:
            </Texto>
          </Widget.Content>

        </Widget>

        <Footer />

        <GitHubCorner projectUrl="https://github.com/BernardoOficial" />

      </Wrapper>
    </QuizBackground>
  );
}

export default Home;
