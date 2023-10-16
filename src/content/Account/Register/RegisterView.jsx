import React, { useState } from 'react'
import { useDispatch } from 'react-redux'
import { useNavigate } from 'react-router-dom'
import { unwrapResult } from '@reduxjs/toolkit'

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

  const handleSubmit = async (e) => {
    e.preventDefault()

    if (password !== confirmPassword) {
      alert('Passwords do not match')
      return
    }

    try {
      await dispatch(Register({ 
        username, email, password, confirm_password: confirmPassword 
      }))
      navigate('/register/completed')
    } catch (rejectedValueOrSerializedError) {
      console.log(rejectedValueOrSerializedError)
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

export default RegisterView