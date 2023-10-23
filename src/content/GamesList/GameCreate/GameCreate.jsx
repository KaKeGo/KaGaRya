import React from 'react'

import './GameCreate.css'



const GameCreate = () => {
  return (
    <div className='game__create'>
      <div className='columnt__title'>
        <h2>Add game idea</h2>
      </div>
      <div className='columnt__box'>
        <div className='input__box '>
          <input placeholder='Title' className=''/>
        </div>
      </div>
    </div>
  )
}

export default GameCreate