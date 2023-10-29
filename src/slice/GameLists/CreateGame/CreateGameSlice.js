import { createAsyncThunk, createSlice } from "@reduxjs/toolkit"
import axios from "axios"
import Cookies from "js-cookie"

import { DEV_URL, AKI } from '../../../apiConfig'



export const CreateGame = createAsyncThunk(
    'game/create',
    async (gameTitle, { rejectWithValue }) => {
        const csrftoken = Cookies.get('csrftoken')

        const config = {
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json',
                'X-CSRFToken': csrftoken
            },
            withCredentials: true
        }

        try {
            const response = await axios.post(
                `${AKI}games/create/`,
                { title: gameTitle },
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

const gameCreateSlice = createSlice({
    name: 'gameCreate',
    initialState: initialState,
    reducers: {},
    extraReducers: (builder) => {
        builder
            .addCase(CreateGame.pending, (state) => {
                state.status = 'loading'
            })
            .addCase(CreateGame.fulfilled, (state, action) => {
                state.status = 'succeeded'
                state.game = action.payload
            })
            .addCase(CreateGame.rejected, (state, action) => {
                state.status = 'failed'
                state.error = action.error.message
            })
    }
})

export default gameCreateSlice.reducer
