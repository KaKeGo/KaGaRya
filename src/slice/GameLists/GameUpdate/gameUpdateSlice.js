import { createAsyncThunk, createSlice } from "@reduxjs/toolkit"
import axios from "axios"
import Cookies from "js-cookie"

import { DEV_URL, AKI } from '../../../apiConfig'


export const UpdateGame = createAsyncThunk(
    'game/update',
    async ({ slug, updatedData }, { rejectWithValue }) => {
        const csrftoken = Cookies.get('csrftoken')

        const config = {
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json',
                'X-CSRFToken': csrftoken
            },
            withCredentials: true,
        }

        try {
            const response = await axios.put(
                `${DEV_URL}games/${slug}/update/`,
                updatedData,
                config,
            )
            return response.data
        } catch (err) {
            return rejectWithValue(err.response.data)
        }
    }
)


const initialState = {
    game: {},
    status: 'idle',
    error: null,
}

const gameUpdateSlice = createSlice({
    name: 'gameUpdate',
    initialState: initialState,
    reducers: {},
    extraReducers: (builder) => {
        builder
            .addCase(UpdateGame.pending, (state) => {
                state.status = 'loading'
            })
            .addCase(UpdateGame.fulfilled, (state, action) => {
                state.status = 'succeeded'
                state.game = action.payload
            })
            .addCase(UpdateGame.rejected, (state, action) => {
                state.status = 'failed'
                state.error = action.error.message
            })
    }
})

export default gameUpdateSlice.reducer
