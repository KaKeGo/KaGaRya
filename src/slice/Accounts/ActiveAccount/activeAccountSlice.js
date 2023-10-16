import { createAsyncThunk, createSlice } from "@reduxjs/toolkit"
import axios from "axios"


export const ActivateAccount = createAsyncThunk(
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
            .addCase(ActivateAccount.pending, (state) => {
                state.status = 'loading'
            })
            .addCase(ActivateAccount.fulfilled, (state) => {
                state.status = 'succeeded'
            })
            .addCase(ActivateAccount.rejected, (state, action) =>{
                state.status = 'failed'
                state.error = action.error.message
            })
    }
})

export default activateAccountSlice.reducer
