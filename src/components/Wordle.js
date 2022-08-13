//ui

import React, { useEffect, useState } from 'react'
import useWordle from '../hooks/useWordle'
import Grid from './Grid'
import Keyboard from './Keyboard'
import Modal from './Modal'


export default function Wordle({ solution}) {
    
  const { currentGuess, handleKeyUp, guesses, isCorrect, turn, usedKeys } = useWordle(solution)

  const[showModal, setShowModal] = useState(false)

  useEffect(() => {
    window.addEventListener('keyup', handleKeyUp)

          

    if(isCorrect){
        setTimeout(() => {
            setShowModal(true)
        }, 2000);
        window.removeEventListener('keyup', handleKeyUp)
    }

    if(turn>5){
        setTimeout(() => {
            setShowModal(true)
        }, 2000);
        window.removeEventListener('keyup', handleKeyUp)
    }

    return () => window.removeEventListener('keyup', handleKeyUp)
  }, [handleKeyUp, isCorrect, turn ])

  useEffect(()=>{
    console.log(guesses, turn , isCorrect);
  },[guesses, turn , isCorrect])

  return (
    <div>
      <div>solution - {solution}</div>
      <div>Current Guess - {currentGuess}</div>
      <Grid currentGuess={currentGuess} guesses={guesses} turn={turn}/>
      <Keyboard usedKeys={usedKeys} handleKeyUp={handleKeyUp}/>
      {showModal && <Modal isCorrect={isCorrect} turn={turn} solution={solution} />}
    </div>
  )
}