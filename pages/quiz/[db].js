import React from 'react';
import { ThemeProvider } from 'styled-components';
import Quiz from '../../src/screens/Quiz';

export default function QuizDaGaleraPage({ dbExterno }) {
  return (
    <ThemeProvider theme={dbExterno.theme}>
      <Quiz dbExterno={dbExterno} />
    </ThemeProvider>
  );
}

export async function getServerSideProps(context) {
  try {
    const [nomeProjeto, gitHubUser] = context.query.db.split('___');
    const dbExterno = await fetch(`https://${nomeProjeto}.${gitHubUser}.vercel.app/api/db`)
      .then((resposta) => {
        if (resposta.ok) { return resposta.json(); }
        throw new Error('Falha em pegar os dados');
      })
      .then((dadosExternos) => dadosExternos);
    // console.log(dbExterno);
    return {
      props: {
        dbExterno,
      },
    };
  } catch (error) {
    context.req.redirect('http://lolzinquiz-git-main.bernardooficial.vercel.app/');
    console.error(error);
  }
}
