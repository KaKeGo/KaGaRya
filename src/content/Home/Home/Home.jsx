import React from 'react'

import './Home.css'

import FadeInAnimation from '../../../animations/FadeIn/FadeIn'
import CommingSoonView from '../../../containers/CommingSoon/CommingSoon'


const Home = () => {
  return (
    <FadeInAnimation>
    <div className='home__container'>
      <div className='home__box'>

        <div className='home__tables'>

          <div>
            <CommingSoonView />
          </div>

        </div>

      </div>
    </div>
    </FadeInAnimation>
  )
}

export default Home