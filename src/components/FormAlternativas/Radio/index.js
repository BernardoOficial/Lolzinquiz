import styled from 'styled-components';
import db from '../../../../db.json';

const Radio = styled.input`
    position: absolute;
    visibility: hidden;

    &:checked ~ label {
        color: ${db.theme.colors.colorText};
        background-color: ${db.theme.colors.primary};
    }

    &:checked {
        display: none;
    }
`;

export default Radio;
