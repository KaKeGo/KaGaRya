import { createAsyncThunk, createSlice } from "@reduxjs/toolkit"
import axios from "axios"

import { DEV_URL, AKI } from "../../../apiConfig"

import { Login } from "../Login/loginSlice"
import { Logout } from '../Logout/logoutSlice'


export const checkAuth = createAsyncThunk(
    'user/checkAuth',
    async (_, { rejectWithValue }) => {
        try {
            const response = await axios.get(
                `${AKI}accounts/authcheck/`,
            )
            return response.data
        } catch (err) {
            return rejectWithValue(err.response.data)
        }
    }
)


const initialState = {
    user: null,
    status: 'idle',
    error: null,
    isAuthenticated: false,
}

export const authCheckSlice = createSlice({
    name: 'authCheck',
    initialState: initialState,
    reducers: {},
    extraReducers: (builder) => {
        builder
            .addCase(checkAuth.pending, (state) => {
                state.status = 'loading'
            })
            .addCase(checkAuth.fulfilled, (state, action) => {
                if (action.payload.is_authenticated) {
                    state.status = 'succeeded'
                    state.isAuthenticated = true
                    state.user = action.payload.user
                } else {
                    state.status = 'failed'
                    state.error = 'User not logged in'
                    state.isAuthenticated = false
                    state.user = null
                }
            })
            .addCase(checkAuth.rejected, (state, action) => {
                state.status = 'failed'
                state.error = action.payload
                state.isAuthenticated = false
            })
            .addCase(Login.fulfilled, (state, action) => {
                if (action.payload) {
                    state.status = 'succeeded'
                    state.isAuthenticated = true
                }
            })
            .addCase(Logout.fulfilled, (state, action) => {
                if (action.payload === false) {
                    state.status = 'idle'
                    state.isAuthenticated = false
                }
            })
    }
})

export default authCheckSlice.reducer
