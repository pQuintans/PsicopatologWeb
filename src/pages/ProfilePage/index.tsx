import { useEffect, useRef, useState } from 'react'
import { NavBar } from '../../components/NavBar'
import { Footer } from '../../components/Footer'

import { PencilLine } from 'phosphor-react'

import './styles.scss'

interface InformationInterface {
    input: HTMLInputElement
    content: HTMLSpanElement
}

export function ProfilePage(){
    const nameInput = useRef<HTMLInputElement>(null)
    const nameContent = useRef<HTMLSpanElement>(null)
    const emailInput = useRef<HTMLInputElement>(null)
    const emailContent = useRef<HTMLSpanElement>(null)
    const passwordInput = useRef<HTMLInputElement>(null)
    const passwordContent = useRef<HTMLSpanElement>(null)
    const repeatPasswordInput = useRef<HTMLInputElement>(null)
    const repeatPasswordContent = useRef<HTMLSpanElement>(null)

    const [informationInputs, setInformationInputs] = useState<InformationInterface[]>([])

    useEffect(() => {
        setInformationInputs([
            {input: nameInput.current!, content: nameContent.current!}, 
            {input: emailInput.current!, content: emailContent.current!},
            {input: passwordInput.current!, content: passwordContent.current!},
            {input: repeatPasswordInput.current!, content: repeatPasswordContent.current!}
        ])
    }, [])

    function handleClick(index: number) {
        if(informationInputs[index].input.style.display != 'block') {
            informationInputs[index].input.style.display = 'block'
            informationInputs[index].input.focus()
            informationInputs[index].content.style.display = 'none'
        } else {
            informationInputs[index].input.style.display = 'none'
            informationInputs[index].content.style.display = 'block'
        }
    }

    return(
        <div id="ProfilePage">
            <NavBar />

            <main>
                <div id="title-section">
                    <div id="title">
                        Seu Perfil
                    </div>
                    <div id="subtitle">
                        Acesse e configure sua conta
                    </div>
                </div>
                
                <div id="profile-section">
                    <div id="title-profile">
                        Informações Pessoais
                    </div>
                    <div id="user-name-section">
                        <label htmlFor='name'>Nome:</label>
                        <span id='name' ref={nameContent}>testeeee</span>
                        <input type="text" name="" id="input-user-name" ref={nameInput}/>
                        <PencilLine size={27} id='pencil-line-icon' onClick={() => {handleClick(0)}}/>
                    </div>
                    <div id="user-email-section">
                        <label htmlFor="email">E-mail:</label>
                        <span id='email' ref={emailContent}>testeeee</span> 
                        <input type="email" name="" id="input-user-email" ref={emailInput}/>
                        <PencilLine size={27} id='pencil-line-icon' onClick={() => {handleClick(1)}}/>
                    </div>
                    <div id="user-password-section">
                        <label htmlFor="password">Senha:</label>
                        <span id='password' ref={passwordContent}>testeeee</span>
                        <input type="password" name="" id="input-user-password" ref={passwordInput}/>
                        <PencilLine size={27} id='pencil-line-icon' onClick={() => {handleClick(2)}}/>
                    </div>
                    <div id="user-repeat-password-section">
                        <label htmlFor="password">Senha:</label>
                        <span id='password' ref={repeatPasswordContent}>testeeee</span>
                        <input type="password" placeholder="Repita a senha" name="" id="input-user-repeat-password" ref={repeatPasswordInput}/>
                        <PencilLine size={27} id='pencil-line-icon' onClick={() => {handleClick(3)}}/>
                    </div>
                    <div id="submit-section">
                        <input type="submit" value="Alterar" id='button-submit'/>
                    </div>
                </div>

                <div id="form-section">
                    <div id="title-form">
                        Informações do Questionário
                    </div>
                    <div id="form-date-section">
                        <label htmlFor='date'>Data:</label>
                        <span id='date'>Data em que o teste foi feito</span>
                    </div>
                    <div id="form-time-section">
                        <label htmlFor="time">Horário:</label>
                        <span id='time'>Horário em que o teste foi feito</span> 
                    </div>
                    <div id="form-selected-section">
                        <label htmlFor="selected">Marcados:</label>
                        <span id='selected'>Você marcou 'quantidade' sim(s)</span>
                    </div>
                </div>

            </main>

            <Footer />
        </div>
    )
}