import { createAsyncThunk, createSlice } from "@reduxjs/toolkit"
import axios from "axios"

import { DEV_URL, AKI } from '../../../apiConfig'


export const fetchGameDetail = createAsyncThunk(
    'gameDetail/fetchGameDetail',
    async (slug) => {
        try {
            const response = await axios.get(`${DEV_URL}games/detail/${slug}`)
            return response.data
        } catch (err) {
            return rejectWithValue(err.response.data)
        }
    }
)


const initialState = {
    game: [],
    status: 'idle',
    error: null,
}

export const gameDetailSlice = createSlice({
    name: 'gameDetail',
    initialState: initialState,
    reducers: {},
    extraReducers: (builder) => {
        builder
            .addCase(fetchGameDetail.pending, (state) => {
                state.status = 'loading'
            })
            .addCase(fetchGameDetail.fulfilled, (state, action) => {
                state.status = 'succeeded'
                state.game = action.payload
            })
            .addCase(fetchGameDetail.rejected, (state, action) => {
                state.status = 'failed'
                state.error = action.error.message
            })
    }
})

export default gameDetailSlice.reducer
