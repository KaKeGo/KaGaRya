import { createAsyncThunk, createSlice } from "@reduxjs/toolkit"
import axios from "axios"

import { DEV_URL, AKI } from '../../../apiConfig'


export const RecentlyGames = createAsyncThunk(
    'games/recentlyGames',
    async (_, { rejectWithValue }) => {
        try {
            const response = await axios.get(
                `${DEV_URL}games/recentlygames/`
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

const recentlyGamesSlice = createSlice({
    name: 'recentlyGames',
    initialState: initialState,
    reducers: {},
    extraReducers: (builder) => {
        builder
            .addCase(RecentlyGames.pending, (state) => {
                state.status = 'loading'
            })
            .addCase(RecentlyGames.fulfilled, (state, action) => {
                state.status = 'succeeded'
                state.games = action.payload
            })
            .addCase(RecentlyGames.rejected, (state, action) => {
                state.status = 'failed'
                state.error = action.error.message
            })
    }
})

export default recentlyGamesSlice.reducer
