import React, { useEffect, useState } from 'react'
import axios from 'axios'
import Cookie from 'js-cookie'

const CSRFToken = () => {
  const [csrftoken, setCsrfToken] = useState('')

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get(`http://localhost:8000/accounts/csrftoken/`)
        const csrfTokenResponse = response.data.CSRFToken
        setCsrfToken(csrfTokenResponse)
        Cookie.set('csrftoken', csrfTokenResponse)
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
