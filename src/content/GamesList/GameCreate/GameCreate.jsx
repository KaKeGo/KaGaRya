import React, { useState } from 'react'
import { useDispatch } from 'react-redux'

import { CreateGame } from '../../../slice/GameLists/CreateGame/CreateGameSlice'

import CSRFToken from '../../../CSRFToken'
import FadeIn from '../../../animations/FadeIn/FadeIn'
import './GameCreate.css'



const GameCreate = () => {
  const dispatch = useDispatch()
  const [title, setTitle] = useState('')

  const handleSubmit = (e) => {
    e.preventDefault()
    dispatch(CreateGame(title))
  }

  return (
    <FadeIn>
    <div className='game__create'>

      <div className='columnt__title'>
        <h2>Add game idea</h2>
      </div>

      <form className='columnt__box' onSubmit={handleSubmit}>

          <div className='input__box '>
            <input 
              placeholder='Title' 
              value={title}
              onChange={(e) => setTitle(e.target.value)}
            />
          </div>

          <button type='Submit' className='gamecreate__button'>Send</button>

      </form>
      

      <p className='gamecreate__info'>
        You can also add the title of a game 
        not yet available on our website here
      </p>
      <p className='gamecreate__info'>
        The title of the game will be sent for checking by the staff, 
        if the game exists it will be added
      </p>

    </div>
    </FadeIn>
  )
}

export default GameCreate