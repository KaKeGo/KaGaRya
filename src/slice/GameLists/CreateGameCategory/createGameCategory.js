import { createAsyncThunk, createSlice } from "@reduxjs/toolkit"
import axios from "axios"
import Cookies from "js-cookie"

import { DEV_URL, AKI } from "../../../apiConfig"


export const CreateCategory = createAsyncThunk(
    'category/create',
    async (categoryName, { rejectWithValue }) => {
        const csrftoken = Cookies.get('csrftoken')

        const config = {
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json',
                'X-CSRFToken': csrftoken,
            },
            withCredentials: true
        }

        try {
            const response = await axios.post(
                `${DEV_URL}games/category/create/`,
                { name: categoryName },
                config,
            )
            return response.data
        } catch (err) {
            return rejectWithValue(err.response.data)
        }
    }
)


const initialState = {
    category: {},
    status: 'idle',
    error: null,
}

const categoryCreateSlice = createSlice({
    name: 'gameCategoryCreate',
    initialState: initialState,
    reducers: {},
    extraReducers: (builder) => {
        builder
            .addCase(CreateCategory.pending, (state) => {
                state.status = 'loading'
            })
            .addCase(CreateCategory.fulfilled, (state, action) => {
                state.status = 'succeeded'
                state.category = action.payload
            })
            .addCase(CreateCategory.rejected, (state, action) => {
                state.status = 'failed'
                state.error = action.error.message
            })
    }
})

export default categoryCreateSlice.reducer
