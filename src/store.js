import { configureStore } from '@reduxjs/toolkit'

import loginReducer from './slice/Accounts/Login/loginSlice'
import logoutReducer from './slice/Accounts/Logout/logoutSlice'


const store = configureStore({
    reducer: {
        // User
        login: loginReducer,
        logout: logoutReducer,
    }
})

export default store
