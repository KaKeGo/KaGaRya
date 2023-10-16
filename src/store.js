import { configureStore } from '@reduxjs/toolkit'

// User
import registerReducer from './slice/Accounts/Register/registerSlice'
import loginReducer from './slice/Accounts/Login/loginSlice'
import logoutReducer from './slice/Accounts/Logout/logoutSlice'
import authUserCheckReducer from './slice/Accounts/AuthUserCheck/authUserCheck'


const store = configureStore({
    reducer: {
        // User
        authCheck: authUserCheckReducer,
        register: registerReducer,
        login: loginReducer,
        logout: logoutReducer,
    }
})

export default store
