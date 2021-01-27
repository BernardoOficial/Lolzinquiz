import styled from 'styled-components';

function CriarTitulo({
    className, children, size, lineHeight, weight, color,
}) {
    return <h1 className={className}>{children}</h1>;
}

const Titulo = styled(CriarTitulo)`
    font-size: ${(props) => props.size};
    line-height: ${(props) => props.lineHeight};
    color: ${(props) => props.color};
    font-weight: ${(props) => props.weight};
`;

export default Titulo;