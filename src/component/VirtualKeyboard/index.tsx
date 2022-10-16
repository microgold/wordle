import { useState } from "react"
import { AccuracyEnum } from "../../utilities/accuracy.utils"
import VirtualKey from "../VirtualKey"
import { StyledKeyboardRow, StyleKeyboardContainer } from "./index.style"


export interface IVirtualKeyboardProps {
    onClickedKey(key: string) : void
}

interface IVirtualKey {
    name: string,
    accuracy: AccuracyEnum
}

export const VirtualKeyboard = ({onClickedKey}:IVirtualKeyboardProps) => {

    const InitialFirstRow: IVirtualKey[] = [
    {name: 'Q', accuracy: AccuracyEnum.none}, 
    {name: 'W', accuracy: AccuracyEnum.none}, 
    {name: 'E', accuracy: AccuracyEnum.none}, 
    {name: 'R', accuracy: AccuracyEnum.none}, 
    {name: 'T', accuracy: AccuracyEnum.none}, 
    {name: 'Y', accuracy: AccuracyEnum.none}, 
    {name: 'U', accuracy: AccuracyEnum.none}, 
    {name: 'I', accuracy: AccuracyEnum.none}, 
    {name: 'O', accuracy: AccuracyEnum.none}, 
    {name: 'P', accuracy: AccuracyEnum.none}, 
   ] 

   const InitialSecondRow: IVirtualKey[] = [
    {name: 'A', accuracy: AccuracyEnum.none}, 
    {name: 'S', accuracy: AccuracyEnum.none}, 
    {name: 'D', accuracy: AccuracyEnum.none}, 
    {name: 'F', accuracy: AccuracyEnum.none}, 
    {name: 'G', accuracy: AccuracyEnum.none}, 
    {name: 'H', accuracy: AccuracyEnum.none}, 
    {name: 'J', accuracy: AccuracyEnum.none}, 
    {name: 'K', accuracy: AccuracyEnum.none}, 
    {name: 'L', accuracy: AccuracyEnum.none}, 
   ] 

   const InitialThirdRow: IVirtualKey[] = [
    {name: 'BackSpace', accuracy: AccuracyEnum.none}, 
    {name: 'Z', accuracy: AccuracyEnum.none}, 
    {name: 'X', accuracy: AccuracyEnum.none}, 
    {name: 'C', accuracy: AccuracyEnum.none}, 
    {name: 'V', accuracy: AccuracyEnum.none}, 
    {name: 'B', accuracy: AccuracyEnum.none}, 
    {name: 'N', accuracy: AccuracyEnum.none}, 
    {name: 'M', accuracy: AccuracyEnum.none}, 
    {name: 'Enter', accuracy: AccuracyEnum.none}, 
   ] 

   const [firstRow, setFirstRow] =  useState<IVirtualKey[]>(InitialFirstRow)
   const [secondRow, setSecondRow] =  useState<IVirtualKey[]>(InitialSecondRow)
   const [thirdRow, setThirdRow] =  useState<IVirtualKey[]>(InitialThirdRow)  

    return (

    <StyleKeyboardContainer>
        <StyledKeyboardRow>
            {firstRow.map(virtualkey => {
            return (
            <VirtualKey value={virtualkey.name} accuracy={virtualkey.accuracy} onClickedKey={onClickedKey}></VirtualKey>)})}
        </StyledKeyboardRow>
        <StyledKeyboardRow>
            {secondRow.map(virtualkey => {
            return (
            <VirtualKey value={virtualkey.name} accuracy={virtualkey.accuracy} onClickedKey={onClickedKey}></VirtualKey>)})}
        </StyledKeyboardRow>
        <StyledKeyboardRow>
            {thirdRow.map(virtualkey => {
            return (
            <VirtualKey value={virtualkey.name} accuracy={virtualkey.accuracy} onClickedKey={onClickedKey}></VirtualKey>)})}
        </StyledKeyboardRow>
    </StyleKeyboardContainer>
  )

}