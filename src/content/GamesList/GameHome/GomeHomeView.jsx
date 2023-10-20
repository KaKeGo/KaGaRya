import React from 'react'

import './GomeHomeView.css'

import GameListView from '../GameList/GameListView'
import RecentlyAddedGames from '../RecentlyAddedGames/RecentlyAddedGames'
import CommingSoonView from '../../../containers/CommingSoon/CommingSoon'


const GomeHomeView = () => {
  return (
    <div className='containers gamehome__container'>

      <div className='gamehome__column1 b'>
        <div className='gamelist__column1'>

          <div className='headline__title'>
            <h2>Last added games</h2>
          </div>
          <div className='recently__games__comp'>
            <RecentlyAddedGames />
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

      <div className='gamehome__column2 b'>
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