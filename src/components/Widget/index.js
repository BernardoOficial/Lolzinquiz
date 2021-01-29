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
    display: inline-block;
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

Widget.Topics = styled.ul`

  list-style: none;
  width: 100%;

  & > li > a {
    width: 100%;
    display: block;
    padding: 8px 0;
    border-radius: ${db.theme.borderRadius};
    margin-top: 20px;
    background-color: ${db.theme.colors.mainBg};

    color: ${db.theme.colors.primary};
    font-size: 1.4rem;
    line-height: 2rem;
    text-align: center;
    font-weight: bold;
    letter-spacing: 2px;
    font-style: italic;
    text-decoration: none;
    transition: 0.3s ease-in;

    &:hover {
        transform: scale(1.03);
        box-shadow: 0 0 10px #ffffff11;        
    }
  }

a > a {
    text-decoration: none;
  }

`;

export default Widget;
