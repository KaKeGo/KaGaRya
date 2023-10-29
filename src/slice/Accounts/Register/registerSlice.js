import { createAsyncThunk, createSlice } from "@reduxjs/toolkit"
import axios from "axios"
import Cookies from "js-cookie"

import { DEV_URL, AKI } from "../../../apiConfig"


export const Register = createAsyncThunk(
    'user/register',
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
                `${AKI}accounts/profile/create/`,
                userCredentials,
                config,
            )
            return response.data
        } catch (err) {
            console.log(err.response.data)
            return rejectWithValue(err.response.data)
        }
    }
)


const initialState = {
    user: {},
    status: 'idle',
    error: null,
}

const registerSlice = createSlice({
    name: 'register',
    initialState: initialState,
    reducers: {},
    extraReducers: (builder) => {
        builder
            .addCase(Register.pending, (state) => {
                state.status = 'loading'
            })
            .addCase(Register.fulfilled, (state, action) => {
                state.status = 'succeeded'
                state.user = action.payload
            })
            .addCase(Register.rejected, (state, action) => {
                state.status = 'failed'
                state.error = action.error.message
            })
    }
})

export default registerSlice.reducer
