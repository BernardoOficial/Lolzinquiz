import styled from 'styled-components';
import db from '../../../db.json';

const Link = styled.a`
    width: 100%;
    display: block;
    padding: 8px 0;
    border-radius: ${db.theme.borderRadius};
    margin-top: 20px;

    color: ${db.theme.colors.contrastText};
    font-size: 1.4rem;
    line-height: 2rem;
    text-align: center;
    font-weight: bold;
    letter-spacing: 1px;
    text-decoration: none;
    transition: 0.3s ease-in;

    &:hover {
        color: ${db.theme.colors.colorText};
        background-color: ${db.theme.colors.contrastText};
    }
`;

export default Link;