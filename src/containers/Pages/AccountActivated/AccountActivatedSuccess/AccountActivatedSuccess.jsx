import React from 'react'


import './AccountActivatedSuccess.css'


const AccountActivatedSuccess = () => {

    return (
    <div className='mess__success__container'>
      <div className='mess__success__content'>

        <div className='mess__success__title'>
          <h2>Account activated</h2>
        </div>

        <div className='mess__success__body'>
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

export default AccountActivatedSuccess