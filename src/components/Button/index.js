import styled from 'styled-components';
import db from '../../../db.json';

const Button = styled.button`
    margin-top: 30px;
    outline: none;
    border: none;
    background-color: ${db.theme.colors.secondary};
    border-radius: ${db.theme.borderRadius};
    width: 100%;
    padding: 10px;

    font-size: 1.4rem;
    line-height: 2rem;
    color: ${db.theme.colors.contrastText};
    letter-spacing: 1px;
    font-weight: 600;
    text-transform: uppercase;
    cursor: pointer;
    transition: 0.3s ease-in;

    &:hover {
        transition: 0.3s ease-in;
        letter-spacing: 5px;
        background-color: ${db.theme.colors.secondary}cc;
    }
`;

export default Button;
