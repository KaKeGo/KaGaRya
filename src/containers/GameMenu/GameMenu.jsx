import React from 'react'

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCaretUp } from '@fortawesome/free-solid-svg-icons';

import './GameMenu.css';



const GameMenu = ({
   title
  }) => {
  
  return (
    <div className='arrow__container'>
      <FontAwesomeIcon icon={faCaretUp} size='lg' />
      <div></div>
    </div>
  )
}

export default GameMenu