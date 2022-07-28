import { NavBar } from '../../components/NavBar'
import { Footer } from '../../components/Footer'

import { User } from 'phosphor-react'
import { Envelope } from 'phosphor-react'
import { Phone } from 'phosphor-react'
import { At } from 'phosphor-react'
import { ChatText } from 'phosphor-react'

import './styles.scss'

export function ContactPage() {
  return (
    <div id="ContactPage">
      <NavBar />
      <main>
        <div id="title-section">
          <div id="title">
            Fale Conosco!
          </div>
          <div id="subtitle">
            Entre em contato conosco através do formulário
          </div>
        </div>
        <div id="contact-section">
          <form>
            <div className="section">
              <div id="input-section">
                <label htmlFor='name'>
                  <User size={24} id="icon" />
                  Nome:
                </label>
                <input type="text" placeholder="Obrigatório*" required />
              </div>
              <div id="input-section">
                <label htmlFor='email'>
                  <At size={24} id="icon" />
                  E-mail:
                </label>
                <input type="email" placeholder="Obrigatório*" required />
              </div>
            </div>
            <div className="section">
              <div id="input-section">
                <label htmlFor='phone'>
                  <Phone size={24} id="icon" />
                  Telefone:
                </label>
                <input type="text" />
              </div>
              <div id="input-section">
                <label htmlFor='subject'>
                  <ChatText size={24} id="icon" />
                  Assunto:
                </label>
                <input type="text" placeholder="Obrigatório*" required />
              </div>
            </div>            
            <div className="section">
              <div id="input-section" className="text-area-section">
                <label htmlFor='message'>
                  <Envelope size={24} id="icon" />
                  Mensagem:
                </label>
                <textarea placeholder="Obrigatório*" required></textarea>
              </div>
            </div>
            <div id="button-container">
              <button type="submit">Enviar</button>
            </div>
          </form>
        </div>

      </main>

      <Footer />
    </div>
  )
}