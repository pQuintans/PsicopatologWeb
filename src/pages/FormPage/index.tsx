import React, { useEffect, useRef, useState } from 'react'
import { NavBar } from '../../components/NavBar'
import { Footer } from '../../components/Footer'

import './styles.scss'
import toast, { Toaster } from 'react-hot-toast'
import Countdown from 'react-countdown'

export interface Question {
    question: string
    answer?: string
}

export function FormPage() {
    const [formIsStarted, setFormIsStarted] = useState(false)
    const [actualQuestion, setActualQuestion] = useState(0)
    const [couldBeAnswered, setCouldBeAnswered] = useState(false)

    const positiveAnswer = useRef<HTMLInputElement>(null)
    const negativeAnswer = useRef<HTMLInputElement>(null)

    const [questionsArray, setQuestionsArray] = useState<Question[]>([
        {question: 'Você tem dores de cabeça frequente?'},
        {question: 'Tem falta de apetite?'},
        {question: 'Dorme mal?'},
        {question: 'Assusta-se com facilidade?'},
        {question: 'Tem tremores nas mãos?'},
        {question: 'Sente-se nervoso(a), tenso(a) ou preocupado(a)?'},
        {question: 'Tem má digestão?'},
        {question: 'Tem dificuldades de pensar com clareza?'},
        {question: 'Tem se sentido triste ultimamente?'},
        {question: 'Tem chorado mais do que de costume?'},
        {question: 'Encontra dificuldades para realizar com satisfação suas atividades diárias? '},
        {question: 'Tem dificuldades para tomar decisões?'},
        {question: 'Tem dificuldades no serviço (seu trabalho é penoso, causa-lhe sofrimento? '},
        {question: 'É incapaz de desempenhar um papel útil em sua vida?'},
        {question: 'Tem perdido o interesse pelas coisas?'},
        {question: 'Você se sente uma pessoa inútil, sem préstimo?'},
        {question: 'Tem tido ideia de acabar com a vida? '},
        {question: 'Sente-se cansado(a) o tempo todo?'},
        {question: 'Você se cansa com facilidade?'},
        {question: 'Tem sensações desagradáveis no estômago?'}
    ]) 

    function handleQuestionSubmit() {
        if (actualQuestion < questionsArray.length) {
            if(positiveAnswer.current!.checked || negativeAnswer.current!.checked) {
                let tempArray = [...questionsArray]
                tempArray[actualQuestion].answer = positiveAnswer.current!.checked ? 'Yes' : 'No'

                setQuestionsArray(tempArray)
                setActualQuestion(actualState => actualState + 1)
                positiveAnswer.current!.checked = false
                negativeAnswer.current!.checked = false
            } else {
                toast.error("Você deve selecionar uma resposta antes de continuar")
                return
            }
        }
    }

    useEffect(() => {
        setCouldBeAnswered(false)

        setTimeout(() => {
            setCouldBeAnswered(true)
        }, 21000)

        if (actualQuestion == questionsArray.length) {
            console.log(questionsArray)
        }
        
    }, [actualQuestion, formIsStarted])

    return (
        <div id="FormPage">
            <Toaster/>
            <NavBar />
            <main>
            <div id="title-section">
              <div id="title">
                  Questionário SRQ-20
              </div>
              <div id="subtitle">
                  Siga as instruções abaixo e preencha o questionário
              </div>
            </div>
            
            <div id="form-section">
                {
                    !formIsStarted ?
                    (
                        <div className="form-start-page">
                            <span className="text-container">
                                <p>Olá, nome do usuário! Aqui iniciaremos o formulário SRQ-20.</p>
                                <p>Desenvolvido pela Organização Mundial da Saúde, ele atuará em conjunto à inteligência artificial.</p>
                                <p>Você verá duas opções de alternativa, contendo "Sim" ou "Não" como resposta, marque aquela que mais se adeque durante um período de 30 dias.</p>
                                <p>É importante ressaltar que, mesmo que não seja possível sua visualização, estamos usando a câmera do seu dispositivo para a inteligência artificial.</p>
                                <p>Ao final, clique em finalizar para receber o e-mail com seu resultado. A equipe PsicopatoLog te deseja um bom teste!</p>
                            </span>
                            <button onClick={() => setFormIsStarted(true)}>Iniciar</button>
                        </div>
                    ) : actualQuestion == questionsArray.length ? (
                        <div className="form-end-page">
                            <h1>Agradecemos sua participação!</h1>
                            <p>Você completou com sucesso o formulário e estamos processando suas informações.</p>
                            <p>Por favor, utilize o botão abaixo para realizar o envio de um e-mail contendo a mensagem de acordo com seu resultado.</p>
                            <p>Lembre-se que você pode consultar o que for necessário em seu perfil.</p>
                        </div>
                    ) : (
                        <>
                            <p id="text">{questionsArray[actualQuestion].question}</p>
                            <div id="answers">
                                <label>
                                    <input type="radio" value="Yes" name="answers" ref={positiveAnswer}/>
                                    Sim
                                </label>
                                <label>
                                    <input type="radio" value="No" name="answers" ref={negativeAnswer}/>
                                    Não
                                </label>
                            </div>
                            <button onClick={handleQuestionSubmit} disabled={!couldBeAnswered}>
                                {couldBeAnswered ? (
                                    actualQuestion == questionsArray.length - 1 ? 'Continuar' : 'Enviar'
                                ) : (
                                    <Countdown key={actualQuestion} date={Date.now() + 20000}/>
                                )}
                            </button>
                            
                            
                        </>
                    )
                }
                
            </div>
            </main>

            <Footer />
        </div>
    )
}