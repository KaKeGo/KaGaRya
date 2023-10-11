import React from 'react'

import FadeIn from '../../../animations/FadeIn/FadeIn'

import './Register.css'


const Register = () => {
  return (
    <FadeIn>
    <div className='register__page'>
      <div className='register__box'>

        <div className='register__title'>
          <h2>Register</h2>
        </div>

        <div>
          <form>

          <div>
            <label className='input__label'>
              Username
              <input
                className='input__field'
                type='text'
                placeholder='Username'
                required
              />
            </label>
          </div>

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

          <div>
            <label className='input__label'>
              Confirm password
              <input 
                className='input__field'
                type='password'
                placeholder='Confirm password'
                required
              />
            </label>
          </div>

          <div className='register__button'>
            <button type='submit'>Register</button>
          </div>


          </form>
        </div>

      </div>
    </div>
    </FadeIn>
  )
}

export default Register