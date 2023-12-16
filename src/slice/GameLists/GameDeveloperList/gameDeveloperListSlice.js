import { createSlice, createAsyncThunk } from "@reduxjs/toolkit"
import axios from "axios"

import { DEV_URL, AKI } from "../../../apiConfig"


export const GameDeveloperList = createAsyncThunk(
    'game/gameDeveloperList',
    async (_, { rejectWithValue }) => {
        try {
            const response = await axios.get(
                `${DEV_URL}games/developer/list/`
            )
            return response.data
        } catch (err) {
            return rejectWithValue(err.response.data)
        }
    }
)


const initialState = {
    developers: [],
    status: 'idle',
    error: null,
}

export const gameDeveloperListSlice = createSlice({
    name: 'gameDeveloperList',
    initialState: initialState,
    reducers: {},
    extraReducers: (builder) => {
        builder
            .addCase(GameDeveloperList.pending, (state) => {
                state.status = 'loading'
            })
            .addCase(GameDeveloperList.fulfilled, (state, action) => {
                state.status = 'succeeded'
                state.developers = action.payload
            })
            .addCase(GameDeveloperList.rejected, (state, action) => {
                state.status = 'failed'
                state.error = action.error.message
            })
    }
})

export default gameDeveloperListSlice.reducer
