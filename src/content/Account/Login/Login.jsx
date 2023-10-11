import React, { useState } from 'react'

import './Login.css'

const Login = () => {
  return (
    <div className='login__page'>
      <div className='login__box'>
        
        <div className='login__title'>
          <h2>Login</h2>
        </div>

        <div>
          <form>

            <div>
              <label className='input__label'>
                Email
                <input
                  className='input__field'
                  type='email'
                  placeholder='mail@example.com'
                  required
                />
              </label>
            </div>

            <div>
              <label className='input__label'>
                Password
                <input 
                  className='input__field'
                  type='password'
                  placeholder='Password'
                  required
                />
              </label>
            </div>

            <div className='login__button'>
              <button type='submit'>Login</button>
            </div>

          </form>
        </div>

      </div>
    </div>
  )
}

export default Login