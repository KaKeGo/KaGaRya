import React, { useState } from 'react'

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCaretUp } from '@fortawesome/free-solid-svg-icons';

import './GameMenu.css';



const GameMenu = ({
   title, cover
  }) => {
  const [isOpen, setIsOpen] = useState(false)

  const toggleMenu = () => {
    setIsOpen(true)
  }

  const closeMenu = () => {
    setIsOpen(false)
  }
  
  return (
    <div className='arrow__container' onMouseEnter={toggleMenu} onMouseLeave={closeMenu}>
      <img className='arrow__cover' src={cover} />
      <div className={`arrow__menu ${isOpen ? 'open' : ''}`}>
        <FontAwesomeIcon className='arrow__icon' icon={faCaretUp} size='lg' />
        <h2 className='arrow__title'>{title}</h2>
      </div>
    </div>
  )
}

export default GameMenu