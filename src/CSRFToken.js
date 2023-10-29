import React, { useEffect, useState } from 'react'
import axios from 'axios'
import Cookies from 'js-cookie'

import { DEV_URL, AKI } from './apiConfig'


const CSRFToken = () => {
  const [csrftoken, setCsrfToken] = useState('')

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get(`${AKI}accounts/csrftoken/`)
        const csrfTokenResponse = response.data.CSRFToken
        setCsrfToken(csrfTokenResponse)
        Cookies.set('csrftoken', csrfTokenResponse)
      } catch (error) {
        console.log('Failed to fetch CSRFToken: ', error.message)
      }
    }

    fetchData()
  }, [])

  return (
    <input type='hidden' name='csrfmiddlewaretoken' value={csrftoken} />
  )
}

export default CSRFToken
