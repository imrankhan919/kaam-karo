import { createAsyncThunk, createSlice } from '@reduxjs/toolkit'
import projectService from './projectService';

const initialState = {
    listedProjects: [],
    project: {},
    projectLoading: false,
    projectError: false,
    projectSuccess: false,
    projectErrorMessage: ""
}

const projectSlice = createSlice({
    name: "project",
    initialState,
    reducers: {},
    extraReducers: (builder) => {
        builder
            .addCase(getProjects.pending, (state, action) => {
                state.projectLoading = true
                state.projectSuccess = false
                state.projectError = false
            })
            .addCase(getProjects.fulfilled, (state, action) => {
                state.projectLoading = false
                state.projectSuccess = true
                state.listedProjects = action.payload
                state.projectError = false
            })
            .addCase(getProjects.rejected, (state, action) => {
                state.projectLoading = false
                state.projectSuccess = false
                state.projectError = true
                state.projectErrorMessage = action.payload
            })
    }
});

export const { } = projectSlice.actions

export default projectSlice.reducer



// Get Projects
export const getProjects = createAsyncThunk("FETCH/PROJECTS", async (_, thunkAPI) => {

    try {
        return await projectService.fetchProjects()
    } catch (error) {
        let message = error.response.data.message
        return thunkAPI.rejectWithValue(message)
    }

})