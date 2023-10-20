import React from 'react'

import './AccountActivatedError.css'

const AccountActivatedError = () => {
  return (
    <div className='mess__error__container'>
      <div className='mess__error__content'>

        <div className='mess__error__title'>
          <h2>Account activated error</h2>
        </div>

        <div className='mess__error__body'>
          <p>
            Something went wrong with activated your account. Please contact with
            support. We try to help you.
          </p>
        </div>

      </div>
    </div>
  )
}

export default AccountActivatedError