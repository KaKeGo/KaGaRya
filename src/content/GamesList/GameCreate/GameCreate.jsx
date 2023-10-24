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
        <button className='gamecreate__button'>Submit</button>
      </div>

      <p className='gamecreate__info'>
        You can also add the title of a game 
        not yet available on our website here
      </p>
      <p className='gamecreate__info'>
        The title of the game will be sent for checking by the staff, 
        if the game exists it will be added
      </p>

    </div>
  )
}

export default GameCreate