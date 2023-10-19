import React from 'react'

import './CommingSoon.css'

import cms from '../../resorces/commingSoon/cms.gif'


const CommingSoonView = () => {
  return (
    <div className='commingsoon__container'>

        <div>
            <h2>Comming soon...</h2>
            <img src={cms} />
        </div>

    </div>
  )
}

export default CommingSoonView