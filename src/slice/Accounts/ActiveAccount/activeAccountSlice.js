import { createAsyncThunk, createSlice } from "@reduxjs/toolkit"
import axios from "axios"


export const acticeAccount = createAsyncThunk(
    'user/activate',
    async ({ uidb64, token }, { rejectWithValue }) => {
        try {
            const response = await axios.get(
                `http://localhost:8000/accounts/activate/${uidb64}/${token}/`
            )
            return response.data
        } catch (err) {
            return rejectWithValue(err.response.data)
        }
    }
)
