import { User, LockSimple } from 'phosphor-react'
import LogoWhite from '../../assets/logo_white.png'

import './styles.scss'

export function LoginPage() {
  return(
    <div id="LoginPage">
      <div className="left-section">
        <div className="text">
          <h1>Não possui uma conta?</h1>
          <p>Utilize os botões abaixo para cadastrar uma nova conta ou voltar ao início.</p>
          <div className="button-group">
            <button>Cadastre</button>
            <button>Voltar</button>
          </div>
        </div>
        <img src={LogoWhite} alt="" />
      </div>

      <div className="right-section">
        <div className="content">
          <h1>Faça seu login!</h1>
          <div className="input-group">
            <div className="input">
              <User size={30} weight="fill" />
              <input type="text" placeholder='E-mail'/>
            </div>
            <div className="input">
              <LockSimple size={30} weight="fill" />
              <input type="text" placeholder='Senha'/>
            </div>
          </div>
          <div className="link">
            <a href="/">Esqueceu sua senha?</a>
          </div>
          <button>Login</button>
        </div>
      </div>
    </div>
  )
}