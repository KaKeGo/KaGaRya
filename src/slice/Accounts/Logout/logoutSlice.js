import { createAsyncThunk, createSlice } from "@reduxjs/toolkit"
import axios from "axios"
import Cookies from "js-cookie"


export const Logout = createAsyncThunk(
    'user/logout',
    async (_, { rejectWithValue }) => {
        try {
            const csrftoken = Cookies.get('csrftoken')

            const response = await axios.post(
                `http://localhost:8000/accounts/profile/logout/`,
                {},
                {
                    headers: {
                        'X-CSRFToken': csrftoken,
                    },
                    withCredentials: true,
                }
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