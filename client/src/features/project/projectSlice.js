import { createAsyncThunk, createSlice } from '@reduxjs/toolkit'
import projectService from './projectService';

const initialState = {
    listedProjects: [],
    project: {},
    bids: null,
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
            .addCase(addProject.pending, (state, action) => {
                state.projectLoading = true
                state.projectSuccess = false
                state.projectError = false
            })
            .addCase(addProject.fulfilled, (state, action) => {
                state.projectLoading = false
                state.projectSuccess = true
                state.listedProjects = [action.payload, ...state.listedProjects]
                state.projectError = false
            })
            .addCase(addProject.rejected, (state, action) => {
                state.projectLoading = false
                state.projectSuccess = false
                state.projectError = true
                state.projectErrorMessage = action.payload
            })
            .addCase(getBids.pending, (state, action) => {
                state.projectLoading = true
                state.projectSuccess = false
                state.projectError = false
            })
            .addCase(getBids.fulfilled, (state, action) => {
                state.projectLoading = false
                state.projectSuccess = true
                state.bids = action.payload
                state.projectError = false
            })
            .addCase(getBids.rejected, (state, action) => {
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

// Add Project
export const addProject = createAsyncThunk("ADD/PROJECT", async (formData, thunkAPI) => {

    let token = thunkAPI.getState().auth.user.token

    try {
        return await projectService.createProject(formData, token)
    } catch (error) {
        let message = error.response.data.message
        return thunkAPI.rejectWithValue(message)
    }

})


// Add Project
export const getBids = createAsyncThunk("FETCH/BIDS", async (projectId, thunkAPI) => {

    let token = thunkAPI.getState().auth.user.token

    try {
        return await projectService.checkBids(projectId, token)
    } catch (error) {
        let message = error.response.data.message
        return thunkAPI.rejectWithValue(message)
    }

})