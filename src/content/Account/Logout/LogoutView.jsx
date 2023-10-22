import React from 'react'
import { useDispatch } from 'react-redux'

import { Logout } from '../../../slice/Accounts/Logout/logoutSlice'

import './Logout.css'

const LogoutView = ({ children }) => {
    const dispatch = useDispatch()

    const handleLogout = async () => {
        await dispatch(Logout())

        let allCookies = document.cookie.split(';');

        for (let i = 0; i < allCookies.length; i++) {
            document.cookie = allCookies[i] + "=;expires=Thu, 01 Jan 1970 00:00:00 UTC; path=/;";
        }

        // window.location.reload()
    }

    return (
        <button onClick={handleLogout}>
            {children}
        </button>
    )
}

export default LogoutView