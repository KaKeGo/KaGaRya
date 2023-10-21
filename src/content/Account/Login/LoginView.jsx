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
  const [emailError, setEmailError] = useState(null)
  const [passwordError, setPasswordError] = useState(null)

  const dispatch = useDispatch()
  const navigate = useNavigate()

  const handleSubmit = async (e) => {
    e.preventDefault()
    const resultAction = await dispatch(Login({ email, password }))
    if (Login.fulfilled.match(resultAction)) {
      navigate('/')
      window.location.reload()
    } else {
      if (resultAction.payload) {
        if (resultAction.payload.error === 'Invalid credentials') {
          setEmailError('Invalid email')
          setPasswordError('Invalid password')
        }
      } else {
        setEmailError(resultAction.error.message)
        setPasswordError(resultAction.error.message)
      }
    }
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
                {emailError && <div className='error__message'>{emailError}</div>}
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
                {passwordError && <div className='error__message'>{passwordError}</div>}
              </label>
            </div>

            <div>
              <button className='login__button' type='submit'>Login</button>
            </div>

          </form>
        </div>

      </div>
    </div>
    </FadeIn>
  )
}

export default LoginView