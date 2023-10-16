import React from 'react'

import './Home.css'
import RecentlyAddedGames from '../../GamesList/RecentlyAddedGames/RecentlyAddedGames'

const Home = () => {
  return (
    <div className='home__container'>
      <div className='home__box'>

        <div className='home__tables'>

          <div>
            <RecentlyAddedGames />
          </div>

        </div>

      </div>
    </div>
  )
}

export default Home