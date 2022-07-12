import { NavBar } from '../../components/NavBar'
import { TitleBar } from '../../components/TitleBar'
import { Footer } from '../../components/Footer'

import EnzosPicture from '../../assets/enzo.jpg'
import KarensPicture from '../../assets/karen.jpg'
import ViniciusPicture from '../../assets/vinicius.jpg'
import PedrosMPicture from '../../assets/pedroM.png'
import PedrosAPicture from '../../assets/PedroA.jpeg'
import PedrosLPicture from '../../assets/pedroL.jpg'

import './styles.scss'

export function AboutUsPage(){
  return(
    <div id="AboutUs">
      <NavBar />
      <main>
        <TitleBar />

        <div className='content'>
          <p className='p1'>Quem somos</p>
          <p className='p2'>Somos um grupo de seis estudantes do Colégio Técnico de Limeira (COTIL). Estamos cursando o curso de informática concomitante ao ensino médio desde 2020, e decidimos participar do programa de iniciação científica</p>
          <div className='images'>
            <div>
              <p className='p3'>Enzo</p>
              <img src={EnzosPicture} alt="" />
            </div>
            <div>
              <p className='p3'>Karen</p>
              <img src={KarensPicture} alt="" />
            </div>
            <div>
              <p className='p3'>Vinícius</p>
              <img src={ViniciusPicture} alt="" />
            </div>
            <div>
              <p className='p3'>Pedro Marchi</p>
              <img src={PedrosMPicture} alt="teste" id="center" />
            </div>
            <div>
              <p className='p3'>Pedro Augusto</p>
              <img src={PedrosAPicture} alt="" />
            </div>
            <div>
              <p className='p3'>Pedro Losso</p>
              <img src={PedrosLPicture} alt="" />
            </div>
          </div>
        </div>

      </main>

      <Footer />
    </div>
  )
}