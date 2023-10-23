import React from 'react'
import { useNavigate, useParams } from 'react-router-dom'

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowUp } from '@fortawesome/free-solid-svg-icons';


import './SwitchStatusButton.css'


const SwitchStatusButton = () => {
    const navigate = useNavigate()
    const { gameStatus } = useParams()

    const handleSwitchStatus = () => {
        if (gameStatus === 'pending') {
            navigate('/game/list/public')
        } else {
            navigate('/game/list/pending')
        }
    }

    return (
        <button onClick={handleSwitchStatus}>
            <div className={`switch__status__button ${gameStatus}`}>
                <FontAwesomeIcon 
                    className="icon-up"
                    icon={faArrowUp} 
                    size="lg" 
                />
                <FontAwesomeIcon 
                    className="icon-down"
                    icon={faArrowUp} 
                    size="lg" 
                />
            </div>
        </button>
    )
}

export default SwitchStatusButton