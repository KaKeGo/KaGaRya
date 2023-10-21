import React, { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { useNavigate } from 'react-router-dom'

import FadeIn from '../../../animations/FadeIn/FadeIn'

import './Register.css'

import CSRFToken from '../../../CSRFToken'
import { Register } from '../../../slice/Accounts/Register/registerSlice'



const RegisterView = () => {
  const dispatch = useDispatch()
  const navigate = useNavigate()

  const [username, setUsername] = useState('')
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')

  const [confirmPassword, setConfirmPassword] = useState('')
  const [usernameError, setUsernameError] = useState(null)
  const [emailError, setEmailError] = useState(null)
  const [passwordError, setPasswordError] = useState(null)
  const [confirmPasswordError, setConfirmPasswordError] = useState(null)

  const handleSubmit = async (e) => {
    e.preventDefault()

    setUsernameError(null)
    setEmailError(null)
    setPasswordError(null)
    setConfirmPasswordError(null)

    if (password !== confirmPassword) {
      setConfirmPasswordError('Passwords do not match')
      return
    }
      const resultAction = await dispatch(Register({ 
        username, email, password, confirm_password: confirmPassword 
      }))
      if (Register.fulfilled.match(resultAction)) {
        navigate('/register/completed')
      } else {
        if (resultAction.payload) {
          setUsernameError(resultAction.payload.username ? resultAction.payload.username[0] : null)
          setEmailError(resultAction.payload.email ? resultAction.payload.email[0] : null)
          setPasswordError(resultAction.payload.password ? resultAction.payload.password[0] : null)
        } else {
          setUsernameError(resultAction.error.message)
          setEmailError(resultAction.error.message)
          setConfirmPassword(resultAction.error.message)
          setConfirmPasswordError(resultAction.error.message)
        }
      }
  }

  return (
    <FadeIn>
    <div className='register__page'>
      <div className='register__box'>

        <div className='register__title'>
          <h2>Register</h2>
        </div>

        <div>
          <form onSubmit={handleSubmit}>
          <CSRFToken />


          <div>
            <label className='input__label'>
              Username
              <input
                className='input__field'
                type='text'
                placeholder='Username'
                required
                value={username}
                onChange={(e) => setUsername(e.target.value)}
              />
              {usernameError && <div className='error__message'>{usernameError}</div>}
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
                value={email}
                onChange={(e) => setEmail(e.target.value)}
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
                required
                value={password}
                onChange={(e) => setPassword(e.target.value)}
              />
              {passwordError && <div className='error__message'>{passwordError}</div>}
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
                value={confirmPassword}
                onChange={(e) => setConfirmPassword(e.target.value)}
              />
              {confirmPasswordError && <div className='error__message'>{confirmPasswordError}</div>}
           </label>
          </div>

          <div>
            <button className='register__button' type='submit'>Register</button>
         </div>

          </form>
        </div>

      </div>
    </div>
    </FadeIn>
  )
}

export default RegisterView