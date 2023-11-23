import React, { useState } from 'react'
import { useDispatch } from 'react-redux'

import { CreateGame } from '../../../slice/GameLists/CreateGame/CreateGameSlice'

import CSRFToken from '../../../CSRFToken'
import FadeIn from '../../../animations/FadeIn/FadeIn'
import './GameCreate.css'



const GameCreate = () => {
  const dispatch = useDispatch()
  const [title, setTitle] = useState('')

  const [titleError, setTitleError] = useState(null)
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [addedTitle, setAddedTitle] = useState('')

  const handleSubmit = async (e) => {
    e.preventDefault()

    setTitleError(null)
    setIsSubmitting(true)

    const resultAction = await dispatch(CreateGame(title))
    if (CreateGame.fulfilled.match(resultAction)) {
      setAddedTitle(title)
      setTitle('')
      setTimeout(() => {
        setIsSubmitting(false)
      }, 2000)
    } else {
      if (resultAction.payload) {
        setTitleError(resultAction.payload.title ? resultAction.payload.title[0] : null)
      } else {
        setTitleError(resultAction)
      }
    }
  }

  return (
    <FadeIn>
    <div className='game__create'>

      <div className='columnt__title'>
        <h2>Add game idea</h2>
      </div>

      {isSubmitting ? (
        <div className='input__box '>
          <p className='completed__created'>
            Your idea for this game: "<s>{addedTitle}</s>" has 
            been added and is awaiting approval. Thanks for help!
          </p>
        </div>
      ) : (
      <>
      <form className='columnt__box' onSubmit={handleSubmit}>

          <div className='input__box '>
            <input 
              placeholder='Title' 
              value={title}
              onChange={(e) => setTitle(e.target.value)}
            />
            
            {titleError && <div className='error__message'>{titleError}</div>}
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
      </>
      )}

    </div>
    </FadeIn>
  )
}

export default GameCreate
