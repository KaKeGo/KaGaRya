import React, { useEffect, useState } from 'react'
import axios from 'axios'
import Cookies from 'js-cookie'

const CSRFToken = () => {
  const [csrftoken, setCsrfToken] = useState('')

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get(`http://localhost:8000/accounts/csrftoken/`)
        const csrfTokenResponse = response.data.CSRFToken
        setCsrfToken(csrfTokenResponse)
        Cookies.set('csrftoklen', csrfTokenResponse)
        console.log('CSRFToken: ', csrfTokenResponse)
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