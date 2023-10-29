import React from 'react'

import CommingSoon from '../../../containers/CommingSoon/CommingSoon'

import './GameDetailView.css'

const GameDetailView = () => {
  return (
    <div className='gamedetail__container containers'>
        <div className='gamedetail__box b'>
          <CommingSoon />

            <div className='gamedetail__column1'>
                <div className='gamedetail__cover'>
                    <img />
                </div>
            </div>
            
            <div className='gamedetail__column2'></div>

            <div className='gamedetail__column3'></div>

        </div>
    </div>
  )
}

export default GameDetailView