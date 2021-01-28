import React, { useEffect, useState } from 'react';
import db from '../db.json';

import QuizBackground from '../src/components/QuizBackground';
import Wrapper from '../src/components/Wrapper';
import Widget from '../src/components/Widget';
import Footer from '../src/components/Footer';
import GitHubCorner from '../src/components/GitHubCorner';
import QuizLogo from '../src/components/QuizLogo';
import ThumbQuestao from '../src/components/ThumbQuestao';
import Texto from '../src/components/Texto';
import Titulo from '../src/components/Titulo';
import Form from '../src/components/FormAlternativas/Form';
import Button from '../src/components/Button';
import Link from '../src/components/Link';

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
  questionIndex, questionsLength, question, onSubmit, resultados, setResultados
}) {

  const [selectedAlternative, setSelectedAlternative] = useState(undefined);
  const [isQuestionSubmited, setIsQuestionSubmited] = useState(false);
  const isCorrect = question.answer === selectedAlternative && selectedAlternative !== undefined;
  // const isWarning = question.answer !== selectedAlternative && selectedAlternative !== undefined;
  const hasAlternativeSelected = selectedAlternative !== undefined;

  return (
    <Widget>

      <Widget.Header>
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
          setIsQuestionSubmited={setIsQuestionSubmited}
          setSelectedAlternative={setSelectedAlternative}
          hasAlternativeSelected={hasAlternativeSelected}
          isCorrect={isCorrect}
          resultados={resultados}
          setResultados={setResultados}
        />

        {isQuestionSubmited && isCorrect && <p>Você acertou!</p>}
        {isQuestionSubmited && !isCorrect && <p>Você errou!</p>}

      </Widget.Content>

    </Widget>
  );
}

function Resultado() {
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
          {'Mandou bem, {Nome}!'}
        </Texto>
        <Texto
          size="1.6rem"
          lineHeight="2.4rem"
        >
          Você fez 100 pontos, parabéns!
        </Texto>

        <Button
          bgColor={db.theme.colors.wrong}
          fontSize="1.4rem"
        >
          ADICIONAR AO MEU PROJETO
        </Button>

        <Link
          href="/"
        >
          Voltar para a home
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

function Quiz() {
  const [stateScreen, setStateScren] = useState(statesScreen.loading);
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const questionIndex = currentQuestion;
  const questionsLength = db.questions.length;
  const question = db.questions[questionIndex];
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

  return (
    <QuizBackground backgroundImage={db.bg.secondary}>
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
        />
        )}

        {stateScreen === 'resultado' && <Resultado resultados={resultados} />}

        <Footer />
        <GitHubCorner projectUrl="https://github.com/BernardoOficial" />
      </Wrapper>
    </QuizBackground>
  );
}

export default Quiz;
