import { createAsyncThunk, createSlice } from "@reduxjs/toolkit"
import axios from "axios"

import { DEV_URL, AKI } from '../../../apiConfig'


export const GameDetail = createAsyncThunk(
    'gameDetail/gameDetail',
    async (slug) => {
        try {
            const response = await axios.get(`${DEV_URL}games/detail/${slug}/`)
            console.log('elo')
            console.log(response.data)
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
            .addCase(GameDetail.pending, (state) => {
                state.status = 'loading'
            })
            .addCase(GameDetail.fulfilled, (state, action) => {
                state.status = 'succeeded'
                state.game = action.payload
            })
            .addCase(GameDetail.rejected, (state, action) => {
                state.status = 'failed'
                state.error = action.error.message
            })
    }
})

export default gameDetailSlice.reducer
