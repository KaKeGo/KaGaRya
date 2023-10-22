import { createAsyncThunk, createSlice } from "@reduxjs/toolkit"
import axios from "axios"
import Cookies from "js-cookie"

import { DEV_URL, AKI } from "../../../apiConfig"


export const Logout = createAsyncThunk(
    'user/logout',
    async (_, { rejectWithValue }) => {
        const csrftoken = Cookies.get('kejki')

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
                'https://aki.kagarya.com/accounts/profile/logout/',
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
            })
            .addCase(Logout.rejected, (state, action) => {
                state.status = 'failed'
                state.error = action.payload
            })
    }
})

export default logoutSlice.reducer
