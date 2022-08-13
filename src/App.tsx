import React from 'react'
import logo from './logo.svg'
import './App.css'
import Letter, { AccuracyEnum } from './component/Letter'

function App() {
  return (
    <div>
      <Letter accuracy={AccuracyEnum.correct} position={0} value='R' />
      <Letter accuracy={AccuracyEnum.doesNotExist} position={1} value='E' />
      <Letter accuracy={AccuracyEnum.wrongPosition} position={2} value='A' />
      <Letter accuracy={AccuracyEnum.wrongPosition} position={2} value='C' />
      <Letter accuracy={AccuracyEnum.correct} position={2} value='T' />
    </div>
  )
}

export default App
