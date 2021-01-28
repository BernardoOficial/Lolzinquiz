import styled from 'styled-components';
import db from '../../../db.json';

const Button = styled.button`
    margin-top: 30px;
    display: block;
    outline: none;
    border: none;
    background-color: ${db.theme.colors.secondary};
    border-radius: ${db.theme.borderRadius};

    padding: 8px 20px;

    width: 100%;

    font-size: 1.2rem;
    line-height: 2rem;
    color: ${db.theme.colors.contrastText};
    letter-spacing: 4px;
    font-weight: 600;
    text-transform: uppercase;
    cursor: pointer;
    transition: 0.3s ease-in;

    &:hover {
        transition: 0.3s ease-in;
        letter-spacing: 1px;
        background-color: ${db.theme.colors.secondary}cc;
    }
    &:disabled {
        opacity: 0.6;
    }
`;

export default Button;
