import { createSlice, createAsyncThunk } from "@reduxjs/toolkit"
import axios from "axios"

import { DEV_URL } from '../../../apiConfig'

export const GamesList = createAsyncThunk(
    'games/gamesList',
    async (gamesCredentials, { rejectWithValue }) => {
        try {
            const response = await axios.get(
                `${DEV_URL}games/`,
                gamesCredentials,
            )
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
            .addCase(GamesList.pending, (state) => {
                state.status = 'loading'
            })
            .addCase(GamesList.fulfilled, (state, action) => {
                state.status = succeeded
                state.games = action.payload
            })
            .addCase(GamesList.rejected, (state, action) => {
                state.status = 'failed'
                state.error = action.error.message
            })
    }
})

export default gameListSlice.reducer
