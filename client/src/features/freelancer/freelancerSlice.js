import { createAsyncThunk, createSlice } from '@reduxjs/toolkit'
import freelancerService from './freelancerService';

const initialState = {
    freelancers: [],
    freelancer: {},
    freelancerLoading: false,
    freelancerSuccess: false,
    freelancerError: false,
    freelancerErrorMessage: ""
}

const freelancerSlice = createSlice({
    name: 'freelancer',
    initialState,
    reducers: {},
    extraReducers: (builder) => {

        builder
            .addCase(getFreelancers.pending, (state, action) => {
                state.freelancerLoading = true
                state.freelancerSuccess = false
                state.freelancerError = false
            })
            .addCase(getFreelancers.fulfilled, (state, action) => {
                state.freelancerLoading = false
                state.freelancerSuccess = true
                state.freelancerError = false
                state.freelancers = action.payload
            })
            .addCase(getFreelancers.rejected, (state, action) => {
                state.freelancerLoading = false
                state.freelancerSuccess = false
                state.freelancerError = false
            })

    }
});

export const { } = freelancerSlice.actions

export default freelancerSlice.reducer


// GET FREELANCERS

export const getFreelancers = createAsyncThunk("FETCH/FREELANCERS", async (_, thunkAPI) => {
    try {
        return await freelancerService.fetchFreelancers()
    } catch (error) {
        let message = error.response.data.message
        return thunkAPI.rejectWithValue(message)
    }

})