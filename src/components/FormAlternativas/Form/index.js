import React from 'react';
import styled from 'styled-components';
import db from '../../../../db.json';

import Label from '../Label/Label';
import Radio from '../Radio';
import Button from '../../Button';

function Formulario({
  question, className, onSubmit, setSelectedAlternative, setIsQuestionSubmited, hasAlternativeSelected, isCorrect, resultados, setResultados,
}) {
  return (
    <form
      className={className}
      onSubmit={(evento) => {
        evento.preventDefault();
        setIsQuestionSubmited(true);

        const arrayStateResultados = [...resultados, isCorrect];
        setResultados(arrayStateResultados);

        setTimeout(() => {
          onSubmit();
          setIsQuestionSubmited(false);
          setSelectedAlternative(undefined);
        }, 2000);
      }}
    >
      {question.alternatives.map((alternativa, alternativaIndex) => (
        <div className="wrapper" key={alternativaIndex}>
          <Radio
            id={alternativaIndex}
            name="alternativa"
            type="radio"
            value={alternativaIndex}
            defaultChecked={false}
            onChange={() => setSelectedAlternative(alternativaIndex)}
          />
          <Label
            htmlFor={alternativaIndex}
          >
            {alternativa}
          </Label>
        </div>

      ))}

      <Button
        type="submit"
        disabled={!hasAlternativeSelected}
      >
        Confirmar
      </Button>
    </form>
  );
}

const Form = styled(Formulario)`
    margin-top: 20px;
    .wrapper {
        position: relative;
        display: flex;
        justify-content: flex-start;
        align-items: center;
        overflow: hidden;

        background-color: ${db.theme.colors.secondaryBg};
        margin-top: 10px;
        border-radius: ${db.theme.borderRadius};
    }
`;

export default Form;
