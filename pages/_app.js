import { createGlobalStyle, ThemeProvider } from 'styled-components'
import db from "../db.json";

const GlobalStyle = createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }
  html {
    font-size: 10px;
    line-height: 16px;
  }
  body {
    min-height: 100vh;

    font-family: 'Poppins', sans-serif;
    color: ${({ theme }) => theme.colors.contrastText};
  }
`

const theme = db.theme;

export default function App({ Component, pageProps }) {
  return (
    <>
      <ThemeProvider theme={theme}>
        <GlobalStyle />
        <Component {...pageProps} />
      </ThemeProvider>
    </>
  )
}
