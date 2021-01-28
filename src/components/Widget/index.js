import styled from 'styled-components';
import db from '../../../db.json';

const Widget = styled.section`
  width: 100%;
  max-width: 400px;
  border: 1px solid ${db.theme.colors.primary};
  border-radius: ${db.theme.borderRadius};

  background-color: ${db.theme.colors.primary};
  padding: 0 3px 3px 3px;
  margin-bottom: 25px;
  overflow: hidden;
  animation: 0.5s ease-in forwards scaleWidget;

  @keyframes scaleWidget {
    from {
      opacity: 0;
      transform: scale(0.5);
    }
    to {
      opacity: 1;
      transform: scale(1);
    }
  }

  h1, h2, h3 {
    font-size: 1.6rem;
    line-height: 1.6rem;
    font-weight: bold;
  }

  @media screen and (max-width: 590px) {
        max-width: initial;
  }

`;

Widget.Header = styled.article`
  background-color: ${db.theme.colors.primary};
  padding: 20px 30px;
`;

Widget.Content = styled.article`
  border-radius: ${db.theme.borderRadius};
  background-color: ${db.theme.colors.mainBg};
  padding: 20px 30px;
`;

export default Widget;
