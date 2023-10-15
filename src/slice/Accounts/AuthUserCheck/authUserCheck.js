import { createAsyncThunk, createSlice } from "@reduxjs/toolkit"
import axios from "axios"


export const checkAuth = createAsyncThunk(
    'user/checkAuth',
    async (_, { rejectWithValue }) => {
        try {
            const response = await axios.get(
                `http://localhost:8000/accounts/authcheck/`,
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
                state.status = 'succeeded'
                state.isAuthenticated = action.payload.isAuthenticated
            })
            .addCase(checkAuth.rejected, (state, action) => {
                state.status = 'failed'
                state.error = action.payload
            })
    }
})

export default authCheckSlice.reducer
