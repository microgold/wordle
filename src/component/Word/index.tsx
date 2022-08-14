import { useEffect, useState } from 'react'
import Letter, { AccuracyEnum } from '../Letter'

interface IWordProps {
    isWordEvaluated: boolean
    guessWordValue: string
}



export const Word = ({isWordEvaluated, guessWordValue}: IWordProps) => {
  const [isEvaluated, setIsEvaluated] = useState(isWordEvaluated)
  const [guessValue, setGuessValue] = useState(guessWordValue)

  useEffect(() => {
    setGuessValue(guessWordValue)},
    [guessWordValue]
) 

  return (
      // letter rendering goes here
      <>
          {
             guessValue.toUpperCase().split('').map( (nextLetter, letterIndex) => {
              return <Letter key = {'letter_' + letterIndex} value = {nextLetter} 
                            accuracy={AccuracyEnum.none} position={letterIndex} />
          })}
      </>
  );
}
