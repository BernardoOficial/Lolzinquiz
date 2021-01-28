import styled from 'styled-components';
import db from '../../../db.json';

const ItemResultadosAlternativa = styled.li`
    width: 100%;
    margin: 8px 0;
    padding: 8px 0px;
    text-align: center;

    font-size: 1.4rem;
    line-height: 2rem;
    font-weight: bold;
    letter-spacing: 1px;
    color: ${db.theme.colors.colorText};

    border: 1px solid #ffffff66;
    border-radius: ${db.theme.borderRadius};

    &[data-status="erro"] {
        background-color: ${({ theme }) => theme.colors.wrong};
    }
    &[data-status="correto"] {
        background-color: ${({ theme }) => theme.colors.success};
    }

    background-color: ${db.theme.colors.contrastText};
`;

export default ItemResultadosAlternativa;
