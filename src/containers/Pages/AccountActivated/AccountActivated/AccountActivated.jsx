import React from 'react'

import './AccountActivated.css'

const AccountActivated = () => {
  return (
    <div className='mess__info__container'>
      <div className='mess__info__content'>

        <div className='mess__info__title'>
          <h2>Account already activated</h2>
        </div>

        <div className='mess__info__body'>
          <p>
            Account was activated. Try to 
              <a className='link'
                href='http://localhost:3000/login'> login </a> 
              now.
          </p>
        </div>

      </div>
    </div>
  )
}

export default AccountActivated