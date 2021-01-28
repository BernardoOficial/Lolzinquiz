import styled from 'styled-components';
import db from '../../../../db.json';

const Label = styled.label`
    position: relative;
    top: 0;
    left: 0;
    width: 100%;
    padding: 10px;
    font-size: 1.4rem;
    line-height: 2rem;
    letter-spacing: 1px;
    font-weight: bold;
    cursor: pointer;
    transition: 0.2s ease-in;

    &:hover {
        color: ${db.theme.colors.colorText};
        background-color: ${db.theme.colors.primary};
    }
`;

export default Label;