import React from 'react'

import './Home.css'

import FadeInAnimation from '../../../animations/FadeIn/FadeIn'
import CommingSoonView from '../../../containers/CommingSoon/CommingSoon'


const Home = () => {
  return (
    <FadeInAnimation>
    <div className='home__container containers'>
      <div className='home__box'>

        <CommingSoonView />

      </div>
    </div>
    </FadeInAnimation>
  )
}

export default Home