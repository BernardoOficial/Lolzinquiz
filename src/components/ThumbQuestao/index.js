import styled from 'styled-components';

const ThumbQuestao = styled.div`
  margin-top: 20px;
  width: 100%;
  min-height: 180px;
  border-radius: 6px;
  background-size: cover;
  background-position: center;
  background-image: url(${({ backgroundImage }) => backgroundImage});
  background-color: ${({ theme }) => theme.colors.mainBg};
`;

export default ThumbQuestao;