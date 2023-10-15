import React from 'react'
import { useDispatch } from 'react-redux'

import { Logout } from '../../../slice/Accounts/Logout/logoutSlice'

import './Logout.css'

const LogoutView = () => {
    const dispatch = useDispatch()

    const handleLogout = () => {
        dispatch(Logout())
    }

    return (
        <button onClick={handleLogout}>
            Logout
        </button>
    )
}

export default LogoutView