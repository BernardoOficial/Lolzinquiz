import styled from 'styled-components';
import PropTypes from 'prop-types';

// function CriarTexto({ className, children }) {
//     return (
//         <p className={className}>
//             {children}
//         </p>
//     );
// }

// const Texto = styled(CriarTexto)`
//     font-size: ${(props) => props.size};
//     line-height: ${(props) => props.lineHeight};
//     color: ${(props) => props.color};
//     font-weight: ${(props) => props.weight};
// `;

const TextoBase = styled.p`
    font-size: ${(props) => props.size};
    line-height: ${(props) => props.lineHeight};
    color: ${(props) => props.color};
    font-weight: ${(props) => props.weight};
`;

function Texto({ className, children, ...props }) {
  return (
    <TextoBase
      className={className}
      {...props}
    >
      {children}
    </TextoBase>
  );
}

// Texto.defaultProps = {

// };

Texto.prototype = {
  className: PropTypes.string.isRequired,
  children: PropTypes.string.isRequired,
  size: PropTypes.string.isRequired,
  lineHeight: PropTypes.string.isRequired,
  color: PropTypes.string.isRequired,
  weight: PropTypes.string.isRequired,
};

export default Texto;
