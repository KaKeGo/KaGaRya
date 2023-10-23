import React, { useState } from 'react'

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCirclePlus, faCircleXmark  } from '@fortawesome/free-solid-svg-icons';

import GameCreate from '../../content/GamesList/GameCreate/GameCreate'

import './CreateGameButton.css'



const CreateGameButton = () => {
  const [isPopupOpen, setIsPopupOpen] = useState(false)

  const handleClick = () => {
    setIsPopupOpen(!isPopupOpen)
  }

  return (
    <>
      <button onClick={handleClick}>

        <div className='create__button'>
            <FontAwesomeIcon 
                className="icon-up"
                icon={faCirclePlus} 
                size="lg" 
            />
        </div>

    </button>
    {isPopupOpen && (
      <>
      <div className='popup__background'></div>
      <div className='create__button2'>
          <FontAwesomeIcon 
              className="icon-up"
              icon={faCircleXmark} 
              onClick={handleClick}
              size="lg" 
          />
      </div>
      <div className='popup'>
        <GameCreate />
      </div>
      </>
    )}
  </>
  )
}

export default CreateGameButton