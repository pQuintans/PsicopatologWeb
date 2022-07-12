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
                <div id="contact-name-section">
                  <User size={24} />
                  <label htmlFor='name'>Nome:<span id="asterisk">*</span></label>
                  <input type="text" placeholder="Obrigatório*" id="input-contact-name" required/>
                </div>
                <div id="contact-email-section">
                  <At size={24} />
                  <label htmlFor='email'>E-mail:<span id="asterisk">*</span></label>
                  <input type="email" placeholder="Obrigatório*" id="input-contact-email" required/>
                </div>
                <div id="contact-phone-section">
                  <Phone size={24} />
                  <label htmlFor='phone'>Telefone:<span id="asterisk">*</span></label>
                  <input type="number" placeholder="Obrigatório*" id="input-contact-phone" required/>
                </div>
                <div id="contact-subject-section">
                  <ChatText size={24} />
                  <label htmlFor='subject'>Assunto:<span id="asterisk">*</span></label>
                  <input type="text" placeholder="Obrigatório*" id="input-contact-subject" required/>
                </div>
                <div id="contact-message-section">
                  <Envelope size={24} />
                  <label htmlFor='message'>Mensagem:<span id="asterisk">*</span></label>
                  <textarea placeholder="Obrigatório*" id="textarea-contact-message" required></textarea>
                </div>
              </form>
            </div>

          </main>

      <Footer />
    </div>
  )
}