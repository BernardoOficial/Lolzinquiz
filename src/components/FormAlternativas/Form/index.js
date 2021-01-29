import React from 'react';
import styled from 'styled-components';
import db from '../../../../db.json';

import Label from '../Label/Label';
import Radio from '../Radio';
import Button from '../../Button';

function Formulario({
  question, className, onSubmit, isQuestionSubmited, selectedAlternative, setSelectedAlternative, setIsQuestionSubmited, hasAlternativeSelected, isCorrect, addResultados,
}) {
  return (
    <form
      className={className}
      onSubmit={(evento) => {
        evento.preventDefault();
        setIsQuestionSubmited(true);
        addResultados(isCorrect);

        setTimeout(() => {
          onSubmit();
          setIsQuestionSubmited(false);
          setSelectedAlternative(undefined);
        }, 2000);
      }}
    >
      {question.alternatives.map((alternativa, alternativaIndex) => {
        const selected = selectedAlternative === alternativaIndex;
        const alternativaStatus = isCorrect ? 'correto' : 'erro';

        return (
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
              data-selected={isQuestionSubmited && selected}
              data-status={alternativaStatus}
            >
              {alternativa}
            </Label>
          </div>

        );
      })}

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

        background-color: ${db.theme.colors.secondary};
        margin-top: 10px;
        border-radius: ${db.theme.borderRadius};
    }
`;

export default Form;
