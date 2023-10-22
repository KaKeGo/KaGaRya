import { createAsyncThunk, createSlice } from "@reduxjs/toolkit"
import axios from "axios"
import Cookies from "js-cookie"

import { DEV_URL, AKI } from "../../../apiConfig"


export const Logout = createAsyncThunk(
    'user/logout',
    async (_, { rejectWithValue }) => {

        const csrftoken = Cookies.get('csrftoken')

        const config = {
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json',
                'X-CSRFToken': csrftoken
            },
            withCredentials: true
        }

        try {
            const response = await axios.post(
                `${AKI}accounts/profile/logout/`,
                {},
                config,
            )
            console.log('logout: ', response.data)
            return response.data
        } catch (err) {
            return rejectWithValue(err.response.data)
        }
    }
)


const initialState = {
    status: 'idle',
    error: null,
    isAuthenticated: false,
}

export const logoutSlice = createSlice({
    name: 'logout',
    initialState, initialState,
    reducers: {},
    extraReducers: (builder) => {
        builder
            .addCase(Logout.pending, (state) => {
                state.status = 'loading'
            })
            .addCase(Logout.fulfilled, (state) => {
                state.status = 'succeeded'
                state.isAuthenticated = false
            })
            .addCase(Logout.rejected, (state, action) => {
                state.status = 'failed'
                state.error = action.error.message
                state.isAuthenticated = false
            })
    }
})

export default logoutSlice.reducer
