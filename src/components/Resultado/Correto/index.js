import React from 'react';
import styled from 'styled-components';

const Wrapper = styled.div`
    width: 100%;
    text-align: center;
    margin-top: 20px;
`;

const SVGWrapper = styled.svg`
  fill: ${({ theme }) => theme.colors.success};
  color: ${({ theme }) => theme.colors.contrastText};
  cursor: pointer;
  animation: 400ms ease-in scale-svg;

  @keyframes scale-svg{
      from {
          transform: scale(0);
      }
      to {
          transform: scale(1);
      }
  }

  @media (max-width:500px){
  }

`;

export default function Correto() {
  return (
    <Wrapper>
      <SVGWrapper width="35" height="35" viewBox="0 0 35 35" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M17.4999 0.961548C8.40373 0.961548 0.961426 8.40385 0.961426 17.5C0.961426 26.5962 8.40373 34.0385 17.4999 34.0385C26.596 34.0385 34.0383 26.5962 34.0383 17.5C34.0383 8.40385 26.596 0.961548 17.4999 0.961548ZM24.446 14.6885L16.5076 22.6269C15.846 23.2885 14.8537 23.2885 14.1922 22.6269L10.5537 18.9885C9.89219 18.3269 9.89219 17.3346 10.5537 16.6731C11.2153 16.0115 12.2076 16.0115 12.8691 16.6731L15.3499 19.1539L22.1307 12.3731C22.7922 11.7115 23.7845 11.7115 24.446 12.3731C25.1076 13.0346 25.1076 14.0269 24.446 14.6885Z" fill="#4CAF50" />
      </SVGWrapper>
    </Wrapper>
  );
}
