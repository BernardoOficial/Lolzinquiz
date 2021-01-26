import React, { useState } from 'react';
import db from '../db.json';
import { useRouter } from 'next/router';

import QuizBackground from '../src/components/QuizBackground';
import Wrapper from '../src/components/Wrapper';
import Widget from '../src/components/Widget';
import Footer from '../src/components/Footer';
import GitHubCorner from '../src/components/GitHubCorner';
import CampoNome from '../src/components/CampoNome';
import Button from '../src/components/Button';
import QuizLogo from '../src/components/QuizLogo';

function Home() {

  const router = useRouter();
  const [nome, setNome] = useState('');

  return (
    <QuizBackground backgroundImage={db.bg}>
      <Wrapper>
        <QuizLogo />
        <Widget>
          <Widget.Header>
            <h1>{db.title}</h1>
          </Widget.Header>
          <Widget.Content>
            <p>{db.description}</p>
            <form onSubmit={(evento) => {
              evento.preventDefault();
              router.push(`/quiz?name=${nome}`);
            }}>
              <CampoNome
                onChange={(evento) => {
                  setNome(evento.target.value);
                }}
                placeholder="Diz aí seu nome pra jogar :)"
                value={nome}
              />
              <Button
                type="submit"
                disabled={nome.length === 0}
              >
                Jogar
              </Button>
            </form>
          </Widget.Content>
        </Widget>
        <Widget>
          <Widget.Header>
            <h1>Quizes da galera</h1>
          </Widget.Header>
          <Widget.Content>
            <p>Dá uma olhada nesses quizes incríveis que o pessoal da Imersão Alguma coisa fez:</p>
          </Widget.Content>
        </Widget>
        <Footer />
        <GitHubCorner projectUrl="https://github.com/BernardoOficial" />
      </Wrapper>
    </QuizBackground>
  );
}

export default Home;
