import React, { useEffect, useState } from 'react'
import './App.css'
import { VirtualKeyboard } from './component/VirtualKeyboard'
import { WordBoard } from './component/WordBoard'
import { WordEntry } from './component/WordEntry'
import { StyledGameOverDisplay } from './component/WordEntry/index.style'
import { AccuracyEnum } from './utilities/accuracy.utils'
import { retrieveAnswer } from './utilities/answerRetriever'
import { calculateLetterAccuracyMap } from './utilities/Evaluation'
import { IGuess } from './utilities/guess.model'

function App() {

  const [wordGuess, setWordGuess] = useState('')
  const [wordGuesses, setWordGuesses] = useState<IGuess[]>([])
  const [nextGuessPosition, setNextGuessPosition] = useState(0)
  const [winning, setWinning] = useState<boolean | null>(null)
  const [gameOver, setGameOver] = useState(false)
  const [gameOverText, setGameOverText] = useState('')
  const [letterScoreMap, setLetterScoreMap] = useState<Map<string, AccuracyEnum>>(new Map<string, AccuracyEnum>())

  const handleGuessCompletion = (guess: string): void => {
    // check to see if we won
    if (wordGuess === retrieveAnswer().toUpperCase()) {
      setWinning(true)
      return
    }

    setNextGuessPosition(nextGuessPosition + 1)   
  }

  const handleWordGuesses = (guesses: IGuess[]) =>  {
    setWordGuesses(guesses)
  }



  const handleOnClickedKey = (key: string): void => {
    if (key.toLowerCase() === 'backspace') {
      if (wordGuess.length !== 0) {
        setWordGuess(wordGuess.substring(0, wordGuess.length - 1))
      }
    }
    else if (key.toLowerCase() === 'enter' && wordGuess.length === 5) {
      handleGuessCompletion(wordGuess)    
    } 
    else {
      if (wordGuess.length < 5) {
        setWordGuess(wordGuess + key)
      }

    }
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
      return
    }

    if (gameOver === true) return

    setWordGuess('')
  }, [nextGuessPosition])
 
  return (
    <div className='App-board'>
      { gameOver ? <StyledGameOverDisplay>{gameOverText}</StyledGameOverDisplay> :
      <WordEntry onGuessEntered={(guess) => setWordGuess(guess)} 
              onGuessComplete={() => handleGuessCompletion(wordGuess)}  />
      }
      <WordBoard guess={wordGuess} currentPosition={nextGuessPosition} wordGuessesCallback={handleWordGuesses}  />      
      <VirtualKeyboard onClickedKey={handleOnClickedKey} wordGuesses = {wordGuesses} />
    </div>
  )
}

export default App


