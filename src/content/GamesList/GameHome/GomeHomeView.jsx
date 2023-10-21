import React, { useState } from 'react'
import { Link } from 'react-router-dom'

import './GomeHomeView.css'

import GameListView from '../GameList/GameListView'
import RecentlyAddedGames from '../RecentlyAddedGames/RecentlyAddedGames'
import CommingSoonView from '../../../containers/CommingSoon/CommingSoon'


const GomeHomeView = () => {
  const [showMoreButton, setShowMoreButton] = useState(false)

  const handleShowMoreButtonChange = (newShowMoreButton) => {
    setShowMoreButton(newShowMoreButton);
  }

  return (
    <div className='containers gamehome__container'>

      <div className='gamehome__column1'>
        <div className='gamelist__column1'>

          <div className='headline__title'>
            <h2>Last added games</h2>
            {showMoreButton && <Link to='/recentlyadded/more'>Check more...</Link>}
          </div>
          <div className='recently__games__comp'>
            <RecentlyAddedGames onShowMoreButtonChange={handleShowMoreButtonChange} />
          </div>
        </div>
        <div className='gamelist__column2'>

          <div className='headline__title'>
            <h2>Premieres</h2>
          </div>

          <div className='premieres__column'>
            <CommingSoonView />
          </div>

        </div>
      </div>

      <div className='gamehome__column2'>
        <div className='gamelist__column1'>

          <div className='headline__title'>
            <h2>All games</h2>
          </div>

          <div className='gamelist__container'>
            <GameListView />
          </div>

        </div>
      </div>

    </div>
  )
}

export default GomeHomeView