import React, { useState } from 'react'
import { Link } from 'react-router-dom';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCaretUp } from '@fortawesome/free-solid-svg-icons';

import './GameMenu.css';



const GameMenu = ({
   title, cover, release_date, developer, game_type, game_mode, average_rating
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
        {isOpen && 
            <div className='arrow__info'>
                <Link className='arrow__check'>
                  <Link to='/game/list/detail'>Check</Link>
                </Link>
                <div className='arrowinfo__content'>
                  <p>Release: {release_date}</p>
                  <p>Developer: {developer}</p>
                  <p>Type: {game_type}</p>
                  <p>Game mode: {game_mode}</p>
                </div>
                <div className='raiting'>{average_rating}/10</div>
            </div>
        }
        <FontAwesomeIcon className='arrow__icon' icon={faCaretUp} size='lg' />
        <h2 className='arrow__title'>{title}</h2>
        
      </div>
    </div>
  )
}

export default GameMenu