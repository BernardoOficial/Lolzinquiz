import React from 'react';
import Widget from '../src/components/Widget';
import db from '../db.json';
import CampoNome from '../src/components/CampoNome';
import Button from '../src/components/Button';
import Footer from '../src/components/Footer';
import GitHubCorner from '../src/components/GitHubCorner';
import QuizBackground from '../src/components/QuizBackground';

function Questions() {
  return (
    <QuizBackground backgroundImage={db.bg}>
      <Widget>
        <Widget.Header>
          <h1>{db.title}</h1>
        </Widget.Header>
        <Widget.Content>
          <p>{db.description}</p>
          <CampoNome placeholder="Diz aí seu nome pra jogar :)" />
          <Button>Confirmar</Button>
        </Widget.Content>
      </Widget>
      <Footer />
      <GitHubCorner projectUrl="https://github.com/BernardoOficial" />
    </QuizBackground>
  );
}

export default Questions;
