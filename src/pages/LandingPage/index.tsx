import { NavBar } from '../../components/NavBar'
import { TitleBar } from '../../components/TitleBar'
import { Footer } from '../../components/Footer'

import './styles.scss'

export function LandingPage() {
  return (
    <div id="LandingPage">
      <NavBar />
      <main>
        <TitleBar />
        <div className="content">
          <h1>Nossa Proposta</h1>
          <p>A associação de Inteligência Artificial, instrumento psicométrico com base no questionário QSR-20 e software para armazenamento e processamento desses dados é capaz de pré-diagnosticar transtornos depressivos em estudantes do Ensino Médio? O presente trabalho tem por objetivo o desenvolvimento de um instrumento para o rastreamento de sintomas depressivos em adolescentes no ensino médio. Para isso, busca-se viabilizar o uso de uma inteligência artificial para a identificação de expressões faciais, somando-se a isso o conceito de psicometria aplicada por meio de entrevistas dirigidas. Os resultados obtidos nos processos anteriores, serão processados em software desenvolvido capaz de detectar indícios da necessidade de um tratamento psicológico mais profissional.</p>
        </div>
      </main>

      <Footer />
    </div>
  )
}