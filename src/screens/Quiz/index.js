import React, { useEffect, useState } from 'react';

import QuizBackground from '../../components/QuizBackground';
import Wrapper from '../../components/Wrapper';
import Widget from '../../components/Widget';
import Footer from '../../components/Footer';
import GitHubCorner from '../../components/GitHubCorner';
import QuizLogo from '../../components/QuizLogo';
import ThumbQuestao from '../../components/ThumbQuestao';
import Texto from '../../components/Texto';
import Titulo from '../../components/Titulo';
import Form from '../../components/FormAlternativas/Form';
import Button from '../../components/Button';
import Link from '../../components/Link';
import Correto from '../../components/Resultado/Correto';
import Erro from '../../components/Resultado/Erro';
import ItemResultadosAlternativa from '../../components/ItemResultadoAlternativa';
import ListaResultadosAlternativa from '../../components/ListaResultadoAlternativa';
import BackLinkArrow from '../../components/BackLinkArrow';

function getNomeJogadorUrl() {
  const url = window.location.href;

  const regex = new RegExp('name=(.+)', 'g');
  const match = regex.exec(url);

  return match[1];
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

function QuestionWidget({
  questionIndex, questionsLength, question, onSubmit, addResultados,
}) {
  const [selectedAlternative, setSelectedAlternative] = useState(undefined);
  const [isQuestionSubmited, setIsQuestionSubmited] = useState(false);
  const isCorrect = question.answer === selectedAlternative && selectedAlternative !== undefined;
  const hasAlternativeSelected = selectedAlternative !== undefined;

  return (
    <Widget>

      <Widget.Header>
        <BackLinkArrow href="/" />
        <h1>
          {`Pergunta ${questionIndex + 1} de ${questionsLength}`}
        </h1>
        <ThumbQuestao backgroundImage={question.image} />
      </Widget.Header>

      <Widget.Content>
        <Texto
          size="1.6rem"
          lineHeight="2.2rem"
        >
          {question.title}
        </Texto>
        <Texto
          size="1.2rem"
          lineHeight="2rem"
        >
          {question.description}
        </Texto>

        <Form
          question={question}
          onSubmit={onSubmit}
          isQuestionSubmited={isQuestionSubmited}
          selectedAlternative={selectedAlternative}
          setIsQuestionSubmited={setIsQuestionSubmited}
          setSelectedAlternative={setSelectedAlternative}
          hasAlternativeSelected={hasAlternativeSelected}
          isCorrect={isCorrect}
          addResultados={addResultados}
        />

        {isQuestionSubmited && isCorrect && <Correto />}
        {isQuestionSubmited && !isCorrect && <Erro />}

      </Widget.Content>

    </Widget>
  );
}

function Resultado({ resultados, dbExterno }) {
  const totalDePontos = resultados
    .reduce((totalDePontos, resultado) => (resultado ? totalDePontos += resultado * 100 : totalDePontos), 0);

  return (
    <Widget>

      <Widget.Header>
        <h1>
          Resultado
        </h1>
      </Widget.Header>

      <Widget.Content>
        <Texto
          size="1.6rem"
          lineHeight="2.2rem"
        >
          {`Mandou bem, ${getNomeJogadorUrl()}!`}
        </Texto>
        <Texto
          size="1.6rem"
          lineHeight="2.4rem"
        >
          {`Você fez ${totalDePontos} pontos, parabéns!`}
        </Texto>

        <ListaResultadosAlternativa>
          {resultados.map((resultado, resultadoIndex) => (
            <ItemResultadosAlternativa key={resultadoIndex} data-status={resultado ? 'correto' : 'erro'}>
              {`${resultadoIndex + 1}ª Questão: ${resultado ? 'você acertou' : 'você errou'}`}
            </ItemResultadosAlternativa>
          ))}

        </ListaResultadosAlternativa>

        <Button
          bgColor={dbExterno.theme.colors.wrong}
          fontSize="1.4rem"
        >
          ADICIONAR AO MEU PROJETO
        </Button>

        <Link
          href="/"
        >
          Voltar para o início
        </Link>

      </Widget.Content>

    </Widget>
  );
}

const statesScreen = {
  loading: 'loading',
  quiz: 'quiz',
  resultado: 'resultado',
};

function Quiz({ dbExterno }) {
  const [stateScreen, setStateScren] = useState(statesScreen.loading);
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const questionIndex = currentQuestion;
  const questionsLength = dbExterno.questions.length;
  const question = dbExterno.questions[questionIndex];
  const [resultados, setResultados] = useState([]);

  useEffect(() => {
    setTimeout(() => {
      setStateScren(statesScreen.quiz);
    }, 1000);
  }, []);

  function formSubmitQuiz() {
    const nextQuestion = questionIndex + 1;
    if (nextQuestion < questionsLength) {
      setCurrentQuestion(questionIndex + 1);
    } else {
      setStateScren(statesScreen.resultado);
    }
  }

  function addResultados(resultado) {
    setResultados([
      ...resultados,
      resultado,
    ]);
  }

  return (
    <QuizBackground backgroundImage={dbExterno.bg}>
      <Wrapper>
        <QuizLogo />

        {stateScreen === 'loading' && <LoadingWidget />}

        {stateScreen === 'quiz' && (
        <QuestionWidget
          questionIndex={questionIndex}
          questionsLength={questionsLength}
          question={question}
          onSubmit={formSubmitQuiz}
          resultados={resultados}
          setResultados={setResultados}
          addResultados={addResultados}
        />
        )}

        {stateScreen === 'resultado' && <Resultado resultados={resultados} dbExterno={dbExterno} />}

        <Footer />
        <GitHubCorner projectUrl="https://github.com/BernardoOficial" />
      </Wrapper>
    </QuizBackground>
  );
}

export default Quiz;
