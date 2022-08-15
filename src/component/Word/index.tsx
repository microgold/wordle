import { useEffect, useState } from 'react'
import { evaluateWordScore } from '../../utilities/Evaluation'
import Letter, { AccuracyEnum } from '../Letter'

interface IWordProps {
    isWordEvaluated: boolean
    guessWordValue: string,
}

const retrieveAnswer = ():string => { return 'react'}



export const Word = ({isWordEvaluated, guessWordValue}: IWordProps) => {

  const inititalAccuracyArray = [AccuracyEnum.none, AccuracyEnum.none, AccuracyEnum.none, AccuracyEnum.none, AccuracyEnum.none]

  const [isEvaluated, setIsEvaluated] = useState(false)
  const [guessValue, setGuessValue] = useState('')
  const [evaluatedResults, setEvaluatedResults] = useState<AccuracyEnum[]>(inititalAccuracyArray)

useEffect(() => {

  const results = evaluateWordScore(guessValue, retrieveAnswer().toUpperCase())
  setEvaluatedResults(results)
  setIsEvaluated(true)
}, [isWordEvaluated])

useEffect(() => {
    setGuessValue(guessWordValue.padEnd(5,'.'))},
    [guessWordValue]
) 

useEffect(() => {
    setIsEvaluated(isWordEvaluated)},
    [isWordEvaluated]
) 

  return (
      // letter rendering goes here
      <div style={{ marginLeft: '15px' }}>
          {
             guessValue.toUpperCase().split('').map( (nextLetter, letterIndex) => {
              return <Letter key = {'letter_' + letterIndex} value = {nextLetter} 
                            accuracy={isEvaluated ? evaluatedResults[letterIndex] : AccuracyEnum.none} position={letterIndex} />
          })}
      </div>
  );
}
