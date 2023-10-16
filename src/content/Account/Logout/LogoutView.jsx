import React from 'react'
import { useDispatch } from 'react-redux'
import { useNavigate } from 'react-router-dom'

import { Logout } from '../../../slice/Accounts/Logout/logoutSlice'

import './Logout.css'

const LogoutView = () => {
    const dispatch = useDispatch()
    const navigate = useNavigate()

    const handleLogout = () => {
        dispatch(Logout())
        window.location.reload()
    }

    return (
        <button onClick={handleLogout}>
            Logout
        </button>
    )
}

export default LogoutView