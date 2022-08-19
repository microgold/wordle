import React, { useEffect, useState } from 'react'
import './App.css'
import { WordBoard } from './component/WordBoard'
import { WordEntry } from './component/WordEntry'
import { StyledBlock } from './component/WordEntry/index.style'
import { retrieveAnswer } from './utilities/answerRetriever'

function App() {

  const [wordGuess, setWordGuess] = useState('')
  const [nextGuessPosition, setNextGuessPosition] = useState(0)
  const [winning, setWinning] = useState<boolean | null>(null)
  const [gameOver, setGameOver] = useState(false)
  const [gameOverText, setGameOverText] = useState('')

  const handleGuessCompletion = (guess: string): void => {
    // check to see if we won
    if (wordGuess === retrieveAnswer().toUpperCase()) {
      setWinning(true)
      return
    }

    setNextGuessPosition(nextGuessPosition + 1)   
  }


  useEffect(() => {
    if (winning != null){    
    setNextGuessPosition(0) // force it to evaluate the current word
    setGameOver(true)
   }
  
    if (winning) {
      setGameOverText('You Won!!')      
    }
    else if (winning === false) {
      setGameOverText(`Word: ${retrieveAnswer().toUpperCase()}`) // game is over
    }
  }, [winning])

  useEffect (() => {
    if (nextGuessPosition === 6) {
      setWinning(false)
    }
  }, [nextGuessPosition])
 
  return (
    <div className='App-board'>
      { gameOver ? <StyledBlock>{gameOverText}</StyledBlock> :
      <WordEntry onGuessEntered={(guess) => setWordGuess(guess)} 
              onGuessComplete={() => handleGuessCompletion(wordGuess)}  />
      }
      <WordBoard guess={wordGuess} currentPosition={nextGuessPosition}  />
    </div>
  )
}

export default App


