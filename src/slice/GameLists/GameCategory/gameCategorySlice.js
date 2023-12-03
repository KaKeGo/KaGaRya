import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

import { DEV_URL, AKI } from "../../../apiConfig";

export const GameCategory = createAsyncThunk(
    'game/gameCategory',
    async (_, { rejectWithValue }) => {
        try {
            const response = await axios.get(`${DEV_URL}games/category/`)
            return response.data
        } catch (err) {
            return rejectWithValue(err.response.data)
        }
    }
)


const initialState = {
    categories: [],
    status: 'idle',
    error: null,
}

export const gameCategorySlice = createSlice({
    name: 'gameCategory',
    initialState: initialState,
    reducers: {},
    extraReducers: (builder) => {
        builder
            .addCase(GameCategory.pending, (state) => {
                state.status = 'loading'
            })
            .addCase(GameCategory.fulfilled, (state, action) => {
                state.status = 'succeeded'
                state.categories = action.payload
            })
            .addCase(GameCategory.rejected, (state, action) => {
                state.status = 'failed'
                state.error = action.error.message
            })
    }
})

export default gameCategorySlice.reducer
