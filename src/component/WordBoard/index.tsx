import { useEffect, useState } from "react"
import { Word } from "../Word"
import { StyledWordBoard } from "./index.style"

interface IWordBoardProps {
    guess : string
    currentPosition: number,
}

interface IGuess {
    guessedWord: string,
    evaluated: boolean
}

export const WordBoard = ({guess, currentPosition}:IWordBoardProps) => {

    const initialGuessState : IGuess[] = [
        { guessedWord: '', evaluated: false },
        { guessedWord: '', evaluated: false },
        { guessedWord: '', evaluated: false },
        { guessedWord: '', evaluated: false },
        { guessedWord: '', evaluated: false },
        { guessedWord: '', evaluated: false }
    ]
    const [wordGuesses, setWordGuesses] = useState<IGuess[]>(initialGuessState)

    const [currentWordIndex, setCurrentWordIndex] = useState(0)

    useEffect(() => {
        if (currentWordIndex > 5) return
        const currentGuess: IGuess = {guessedWord: guess, evaluated: false}
        const updatedGuesses: IGuess[] =  [...wordGuesses.slice(0, currentWordIndex), currentGuess, ...wordGuesses.slice(currentWordIndex + 1)]
        setWordGuesses(updatedGuesses)
    }, [guess])

    useEffect(() => 
    {
        if (currentWordIndex > 5) return  // too many guesses
        if (guess.length < 5) return  // guess is not finished

        const currentGuess: IGuess = {guessedWord: guess, evaluated: true}
        const updatedGuesses: IGuess[] =  [...wordGuesses.slice(0, currentWordIndex), currentGuess, ...wordGuesses.slice(currentWordIndex + 1)]
        console.log('updating guesses...')
        setWordGuesses(updatedGuesses)
        setCurrentWordIndex(currentPosition)
    }
    , [currentPosition])

    return (
        <StyledWordBoard>
        {
             wordGuesses.map((wordGuess: IGuess, index: number) => {
                return <Word key={`guesses_${index}`} isWordEvaluated={wordGuess.evaluated} guessWordValue={wordGuess.guessedWord}  />
             })

        }
        </StyledWordBoard>
    )

}