import { useState } from "react"
import { StyledLetterButton } from "./index.style"


export enum AccuracyEnum {
    correct,
    wrongPosition,
    doesNotExist,
    None
}

export const accuracyColorMap = new Map<AccuracyEnum, string>(
    [
      [AccuracyEnum.correct, '#6CA965'],
      [AccuracyEnum.wrongPosition, '#C8B653'],
      [AccuracyEnum.None, 'black'],
      [AccuracyEnum.doesNotExist, '#787C7F']
    ]
  )    


export interface ILetterProps {
    position: number
    value: string
    accuracy: AccuracyEnum
}



export const Letter = ({position, value, accuracy}:ILetterProps) => {
   const [letterPosition, setLetterPosition] = useState(position)
   const [letterValue, setLetterValue] = useState(value)
   const [letterAccuracy, setLetterAccuracy] = useState(accuracy)

   return (
     <StyledLetterButton accuracy={letterAccuracy}>
         {letterValue}
     </StyledLetterButton>
   )
}

export default Letter
