import styled from 'styled-components';
import PropTypes from 'prop-types';

const TituloBase = styled.p`
    font-size: ${(props) => props.size};
    line-height: ${(props) => props.lineHeight};
    color: ${(props) => props.color};
    font-weight: ${(props) => props.weight};
`;

function Titulo({ className, children, ...props }) {
  return (
    <TituloBase
      className={className}
      {...props}
    >
      {children}
    </TituloBase>
  );
}

// Titulo.defaultProps = {
// Valores iniciais que uma props deve iniciar.
// };

Titulo.prototype = {
  className: PropTypes.string.isRequired,
  children: PropTypes.string.isRequired,
  size: PropTypes.string.isRequired,
  lineHeight: PropTypes.string.isRequired,
  color: PropTypes.string.isRequired,
  weight: PropTypes.string.isRequired,
};

export default Titulo;
