import { AccuracyEnum } from "../component/Letter";

const replaceAt = (source: string, index: number, replacement: string) : string => {
    if (index >= source.length) {
        return source.valueOf()
    }
 
    return source.substring(0, index) + replacement + source.substring(index + 1)
}
 

export const evaluateWordScore = (guess: string, answer: string) : AccuracyEnum[] => {
  
    // declare a mask to use record when a letter position is accounted for. initially its equal to the answer string
    let mask = answer
    let result = [AccuracyEnum.doesNotExist, AccuracyEnum.doesNotExist, AccuracyEnum.doesNotExist, AccuracyEnum.doesNotExist, AccuracyEnum.doesNotExist]
    // first go through each letter in the guess and compare to see if its in the letter is in the      

    // correct position, if it is, add it to its appropriate result position, and mark it complete in the mask

    guess.split('').forEach((guessLetter, index) => {
        if (guessLetter === mask[index] ) {
          result[index] = AccuracyEnum.correct
          mask = replaceAt(mask, index, '_')
        }
    })


    // next go through each letter in the mask that is left and see if it is contained.  If it is, 
    // add it to the proper result index in the 
    // array and update the mask to account for the first position it found
    // else
    // if its not contained,  add the index to the result as doesNotExist
    guess.split('').forEach((guessLetter, index) => {

        if (mask.split('').includes(guessLetter)) {
          result[index] = AccuracyEnum.wrongPosition
          const firstPositionInAnswer = mask.indexOf(guessLetter)
          mask = replaceAt(mask, firstPositionInAnswer, '_')
        } 
    })    

    return result
}