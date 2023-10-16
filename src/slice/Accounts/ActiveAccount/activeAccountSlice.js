import { createAsyncThunk, createSlice } from "@reduxjs/toolkit"
import axios from "axios"


export const ActiceAccount = createAsyncThunk(
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


const initialState = {
    status: 'idle',
    error: null,
}

const activateAccountSlice = createSlice({
    name: 'activeAccount',
    initialState: initialState,
    reducers: {},
    extraReducers: (builder) => {
        builder
            .addCase(ActiceAccount.pending, (state) => {
                state.status = 'loading'
            })
            .addCase(ActiceAccount.fulfilled, (state) => {
                state.status = 'succeeded'
            })
            .addCase(ActiceAccount.rejected, (state, action) =>{
                state.status = 'failed'
                state.error = action.error.message
            })
    }
})

export default activateAccountSlice.reducer
