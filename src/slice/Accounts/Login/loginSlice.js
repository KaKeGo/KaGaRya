import { createSlice, createAsyncThunk } from "@reduxjs/toolkit"
import axios from 'axios'
import Cookies from "js-cookie"

import { DEV_URL } from "../../../apiConfig"


export const Login = createAsyncThunk(
    'user/login',
    async (userCredentials, { rejectWithValue }) => {
        
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
                `${DEV_URL}accounts/profile/login/`,
                userCredentials,
                config,
            )
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

const loginSlice = createSlice({
    name: 'login',
    initialState: initialState,
    reducers: {},
    extraReducers: (builder) => {
        builder
            .addCase(Login.pending, (state) => {
                state.status = 'loading'
            })
            .addCase(Login.fulfilled, (state, action) => {
                state.status = 'succeeded'
                state.isAuthenticated = true
            })
            .addCase(Login.rejected, (state, action) => {
                state.status = 'failed'
                state.error = action.error.message
                state.isAuthenticated = false
            })
    }
})


export default loginSlice.reducer
