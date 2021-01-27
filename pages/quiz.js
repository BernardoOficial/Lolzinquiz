import React from 'react';
import db from '../db.json';

import QuizBackground from '../src/components/QuizBackground';
import Wrapper from '../src/components/Wrapper';
import Widget from '../src/components/Widget';
import Footer from '../src/components/Footer';
import GitHubCorner from '../src/components/GitHubCorner';
import CampoNome from '../src/components/CampoNome';
import Button from '../src/components/Button';
import QuizLogo from '../src/components/QuizLogo';
import ThumbQuestao from '../src/components/ThumbQuestao';
import Texto from '../src/components/Texto';
import Titulo from '../src/components/Titulo';

function Quiz() {

  function getDataURL() {
    console.log(window.location.href);
  }

  function LoadingWidget() {
    return (
      <Widget>
        <Widget.Header>
          <Titulo
            size="1.6rem"
            weight="bold"
          >
            Carregando...
          </Titulo>
        </Widget.Header>

        <Widget.Content>
          <Texto
            size="1.2rem"
          >
            Carregando...
          </Texto>
        </Widget.Content>
      </Widget>
    );
  }

  return (
    <QuizBackground backgroundImage={db.bg.secondary}>
      <Wrapper>

        <QuizLogo />

        <LoadingWidget />

        <Widget>

          <Widget.Header>
            <h1>
              Pergunta 1 de
              {db.questions.length}
            </h1>
            <ThumbQuestao backgroundImage={db.questions[0].image} />
          </Widget.Header>

          <Widget.Content>
            <Texto
              size="1.6rem"
              lineHeight="2.2rem"
            >
              {db.questions[0].title}
            </Texto>
            <Texto
              size="1.2rem"
              lineHeight="2rem"
            >
              {db.questions[0].description}
            </Texto>
            <CampoNome placeholder="Diz aí seu nome pra jogar :)" />
            <Button>Confirmar</Button>
          </Widget.Content>

        </Widget>

        <Footer />

        <GitHubCorner projectUrl="https://github.com/BernardoOficial" />
      </Wrapper>
    </QuizBackground>
  );
}

export default Quiz;
