import { configureStore } from '@reduxjs/toolkit'

import loginReducer from './slice/Accounts/Login/loginSlice'


const store = configureStore({
    reducer: {
        // User
        login: loginReducer,
    }
})

export default store
