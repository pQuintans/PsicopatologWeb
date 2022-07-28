import { Question } from '../../pages/FormPage';

interface QuestionProps {
  questionsArray: Question[]
  actualQuestion: number
  selectedAnswer: string
  setSelectedAnswer: (selectedAnswer: string) => void
}

export function Questions({actualQuestion, questionsArray, selectedAnswer, setSelectedAnswer}: QuestionProps) {
  return (
    <>
      <p id="text">{questionsArray[actualQuestion].question}</p>
      <div id="answers">
          <label>
              <input type="radio" value="Yes" name="answers" onChange={() => setSelectedAnswer('Yes')} checked={selectedAnswer == 'Yes'}/>
              Sim
          </label>
          <label>
              <input type="radio" value="No" name="answers" onChange={() => setSelectedAnswer('No')} checked={selectedAnswer == 'No'}/>
              Não
          </label>
      </div>
    </>
  )
}