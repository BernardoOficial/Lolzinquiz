import styled from 'styled-components';
import db from "../../../db.json";

const CampoNome = styled.input`
    margin-top: 30px;
    outline: none;
    background-color: transparent;
    border-radius: ${db.theme.borderRadius};
    border: 1px solid ${db.theme.colors.contrastText}55;
    width: 100%;
    padding: 10px;

    font-size: 1.4rem;
    line-height: 2rem;
    color: ${db.theme.colors.contrastText}55;
`

export default CampoNome;