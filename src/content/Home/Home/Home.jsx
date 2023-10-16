import React from 'react'

import './Home.css'
import RecentlyAddedGames from '../../GamesList/RecentlyAddedGames/RecentlyAddedGames'
import FadeInAnimation from '../../../animations/FadeIn/FadeIn'


const Home = () => {
  return (
    <FadeInAnimation>
    <div className='home__container'>
      <div className='home__box'>

        <div className='home__tables'>

          <div>
            <RecentlyAddedGames />
          </div>

        </div>

      </div>
    </div>
    </FadeInAnimation>
  )
}

export default Home