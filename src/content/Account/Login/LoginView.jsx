import React, { useState } from 'react'
import { useDispatch } from 'react-redux'
import { useNavigate } from 'react-router-dom'

import FadeIn from '../../../animations/FadeIn/FadeIn'

import './Login.css'

import CSRFToken from '../../../CSRFToken'
import { Login } from '../../../slice/Accounts/Login/loginSlice'



const LoginView = () => {
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')

  const dispatch = useDispatch()
  const navigate = useNavigate()

  const handleSubmit = async (e) => {
    e.preventDefault()
    await dispatch(Login({ email, password }))
    navigate('/')
    window.location.reload()
  }

  return (
    <FadeIn>
    <div className='login__page'>
      <div className='login__box'>
        
        <div className='login__title'>
          <h2>Login</h2>
        </div>

        <div>
          <form onSubmit={handleSubmit}>
            <CSRFToken />

            <div>
              <label className='input__label'>
                Email
                <input
                  className='input__field'
                  type='email'
                  placeholder='mail@example.com'
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
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
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
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
    </FadeIn>
  )
}

export default LoginView