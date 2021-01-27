import styled from 'styled-components';
import db from '../../../db.json';

const Widget = styled.section`
  max-width: 350px;
  border: 1px solid ${db.theme.colors.primary};
  border-radius: ${db.theme.borderRadius};

  background-color: ${db.theme.colors.primary};
  padding: 0 3px 3px 3px;
  margin-bottom: 25px;
  overflow: hidden;

  h1, h2, h3 {
    font-size: 1.6rem;
    line-height: 1.6rem;
    font-weight: bold;
  }

  @media screen and (max-width: 590px) {
        width: 100%;
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
