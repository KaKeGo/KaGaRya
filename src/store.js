import { configureStore } from '@reduxjs/toolkit'

import loginReducer from './slice/Accounts/Login/loginSlice'
import logoutReducer from './slice/Accounts/Logout/logoutSlice'
import authUserCheckReducer from './slice/Accounts/AuthUserCheck/authUserCheck'


const store = configureStore({
    reducer: {
        // User
        authCheck: authUserCheckReducer,
        login: loginReducer,
        logout: logoutReducer,
    }
})

export default store
