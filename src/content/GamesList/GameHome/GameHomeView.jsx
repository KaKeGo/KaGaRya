import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import { useSelector } from 'react-redux'

import './GameHomeView.css'

import GameListView from '../GameList/GameListView'
import RecentlyAddedGames from '../RecentlyAddedGames/RecentlyAddedGames'
import CommingSoonView from '../../../containers/CommingSoon/CommingSoon'

import SwitchStatusButton from '../../../components/SwitchStatusButton/SwitchStatusButton'
import CreateGameButton from '../../../components/CreateGameButton/CreateGameButton'

const GameHomeView = () => {
  const [showMoreButton, setShowMoreButton] = useState(false)

  const { user, isAuthenticated } = useSelector((state) => state.authCheck)

  const handleShowMoreButtonChange = (newShowMoreButton) => {
    setShowMoreButton(newShowMoreButton);
  }

  return (
    <div className='containers gamehome__container'>
      <div className='switchStatusButton'>
        {user && user.roles.includes('GameCreator') && <SwitchStatusButton />}
        {isAuthenticated && <CreateGameButton />}
      </div>

      <div className='gamehome__column1'>
        <div className='recentlygames__column1'>

          <div className='headline__title'>
            <h2>Last added games</h2>
            {showMoreButton && <Link to='/recentlyadded/more'>Check more...</Link>}
          </div>
          <div className='recently__games__comp'>
            <RecentlyAddedGames onShowMoreButtonChange={handleShowMoreButtonChange} />
          </div>
        </div>
        <div className='recentlygames__column2'>

          <div className='headline__title'>
            <h2>Premieres</h2>
            <Link to='/premiers/more'>Check more...</Link>
          </div>

          <div className='premieres__column bord'>
            <CommingSoonView />
          </div>

        </div>
      </div>

      <div className='gamehome__column2'>

        <div className='gameevent__column'>

          <div className='headline__title'>
              <h2>Upcoming</h2>
              <Link to='/upcoming/more'>Check more...</Link>
          </div>
          <div className='upcoming__column bord'>
            <CommingSoonView />
          </div>
          
        </div>
        <div className='gameevent__column'>

          <div className='headline__title'>
              <h2>Relesed today</h2>
              <Link to='/relesed/more'>Check more...</Link>
          </div>
          <div className='relesetoday__column bord'>
            <CommingSoonView />
          </div>

        </div>
        <div className='gameevent__column'>

          <div className='headline__title '>
              <h2>Recently relesed</h2>
              <Link to='/recentlyrelesed/more'>Check more...</Link>
          </div>
          <div className='recentlyrelesed__column bord'>
            <CommingSoonView />
          </div>

        </div>
        <div className='gameevent__column'>

          <div className='headline__title'>
              <h2>Top games</h2>
              <Link to='/topgames/more'>Check more...</Link>
          </div>
          <div className='ranking__column bord'>
            <CommingSoonView />
          </div>

        </div>

      </div>

      <div className='gamehome__column3'>
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

export default GameHomeView