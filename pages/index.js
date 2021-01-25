import Widget from '../src/components/Widget'
import db from "../db.json";
import CampoNome from '../src/components/CampoNome';
import Button from '../src/components/Button';
import Footer from '../src/components/Footer';
import GitHubCorner from '../src/components/GitHubCorner';
import QuizBackground from '../src/components/QuizBackground';

export default function Home() {
  return (
    <QuizBackground backgroundImage={db.bg} >
      <Widget>
        <Widget.Header>
          <h1>{db.title}</h1>
        </Widget.Header>
        <Widget.Content>
          <p>{db.description}</p>
          <CampoNome placeholder="Diz aí seu nome pra jogar :)" />
          <Button>Jogar</Button>
        </Widget.Content>
      </Widget>
      <Widget>
        <Widget.Header>
          <h1>Quizes da galera</h1>
        </Widget.Header>
        <Widget.Content>
          <p>Dá uma olhada nesses quizes incríveis que o pessoal da Imersão Alguma coisa fez:</p>
        </Widget.Content>
      </Widget>
      <Footer />
      <GitHubCorner projectUrl="https://github.com/BernardoOficial" />
    </QuizBackground>
  )
}
