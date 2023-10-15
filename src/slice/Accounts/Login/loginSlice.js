import { createSlice, createAsyncThunk } from "@reduxjs/toolkit"
import axios from 'axios'
import Cookie from "js-cookie"



export const Login = createAsyncThunk(
    'user/login',
    async (userCredentials) => {
        
        const csrftoken = Cookie.get('csrftoken')

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
                `http://localhost:8000/accounts/profile/login/`,
                userCredentials,
                config,
            )
            return response.data
        } catch (error) {
            throw new Error('Cant login: ' + error.message)
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
