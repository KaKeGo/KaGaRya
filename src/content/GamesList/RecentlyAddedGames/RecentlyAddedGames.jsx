import React from 'react'

import './RecentlyAddedGames.css'


const RecentlyAddedGames = () => {
  return (
    <div className='recently__games_comp'>
        <div className='column__1'>

            <div className='recently__games__title'>
                <h2>Last added games</h2>
            </div>

            <div className='recently__games__container'>
                <div className='recently__games__box'>
                    <div className='recently__games__content'></div>
                </div>
                <div className='recently__games__box'>
                    <div className='recently__games__content'></div>
                </div>
                <div className='recently__games__box'>
                    <div className='recently__games__content'></div>
                </div>
                <div className='recently__games__box'>
                    <div className='recently__games__content'></div>
                </div>
                <div className='recently__games__box'>
                    <div className='recently__games__content'></div>
                </div>
            </div>

        </div>

        <div className='column__2'>
            <div className='recently__games__title'>
                <h2>News</h2>
            </div>
        </div>

    </div>
  )
}

export default RecentlyAddedGames