import React from 'react'
import { useNavigate } from 'react-router-dom'

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCirclePlus } from '@fortawesome/free-solid-svg-icons';

import './CreateGameButton.css'

const CreateGameButton = () => {
  const navigate = useNavigate()

  return (
      <button>
        <div className='create__button'>
            <FontAwesomeIcon 
                className="icon-up"
                icon={faCirclePlus} 
                size="lg" 
            />
        </div>
    </button>
  )
}

export default CreateGameButton