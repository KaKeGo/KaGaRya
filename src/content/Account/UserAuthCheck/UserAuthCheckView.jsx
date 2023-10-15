import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { checkAuth } from '../../../slice/Accounts/AuthUserCheck/authUserCheck'


const UserAuthCheckView = () => {
    const dispatch = useDispatch()

    const isAuthenticated = useSelector((state) => state.authCheck.isAuthenticated)


    useEffect(() => {
        dispatch(checkAuth())
    }, [dispatch])

    return (<></>)
}

export default UserAuthCheckView
