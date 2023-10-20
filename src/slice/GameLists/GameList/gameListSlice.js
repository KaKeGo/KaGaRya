import { createSlice, createAsyncThunk } from "@reduxjs/toolkit"
import axios from "axios"

import { DEV_URL, AKI } from '../../../apiConfig'

export const GameList = createAsyncThunk(
    'games/gamesList',
    async (url, { rejectWithValue }) => {
        try {
            const response = await axios.get(
                url || `${AKI}games/`,
            )
            return response.data
        } catch (err) {
            return rejectWithValue(err.response.data)
        }
    }
)


const initialState = {
    games: [],
    status: 'idle',
    error: null,
}

export const gameListSlice = createSlice({
    name: 'gameList',
    initialState: initialState,
    reducers: {},
    extraReducers: (builder) => {
        builder
            .addCase(GameList.pending, (state) => {
                state.status = 'loading'
            })
            .addCase(GameList.fulfilled, (state, action) => {
                state.status = 'succeeded'
                state.games = action.payload
            })
            .addCase(GameList.rejected, (state, action) => {
                state.status = 'failed'
                state.error = action.error.message
            })
    }
})

export default gameListSlice.reducer
