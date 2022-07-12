import './styles.scss'

import { MapTrifold, Phone, EnvelopeSimple } from 'phosphor-react'

export function Footer(){
    return(
    <footer id="Footer">
        <div id="informations">
            <div>
                <MapTrifold size={32} color="white" />
                <div id="title">Endereço</div>
                <div>Rua Pascal Marmo, 1888, Jardim Nova Itália,</div>
                <div>CEP 13484-332</div>
            </div>
            <div>
                <Phone size={32} color="white" />
                <div id="title">Telefone</div>
                <div>(19) 99421 - 4649</div>
                <div>(19) 99421 - 4649</div>
            </div>
            <div>
                <EnvelopeSimple size={32} color="white" />
                <div id="title">E-mail</div>
                <div>contato@psicopatolog.com</div>
            </div>
        </div>
        <hr />
        <div id="copyright">
            &copy; PSICOPATOLOG. Todos os direitos reservados.
        </div>
    </footer>
    )
}