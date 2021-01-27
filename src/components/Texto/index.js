import styled from 'styled-components';

function CriarTexto({ className, children, size, lineHeight, weight, color, }) {
    return (
        <p className={className}>
            {children}
        </p>
    );
}

const Texto = styled(CriarTexto)`
    font-size: ${(props) => props.size};
    line-height: ${(props) => props.lineHeight};
    color: ${(props) => props.color};
    font-weight: ${(props) => props.weight};
`;

export default Texto;
