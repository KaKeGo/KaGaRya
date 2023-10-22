import React from 'react'
import { useDispatch } from 'react-redux'

import { Logout } from '../../../slice/Accounts/Logout/logoutSlice'

import './Logout.css'
import CSRFToken from '../../../CSRFToken'

const LogoutView = ({ children }) => {
    const dispatch = useDispatch()

    const handleLogout = async () => {
        await dispatch(Logout())
        window.location.reload()
    }

    return (
        <button onClick={handleLogout}>
            <CSRFToken />
            {children}
        </button>
    )
}

export default LogoutView