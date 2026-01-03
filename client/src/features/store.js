import { configureStore } from '@reduxjs/toolkit'
import auth from "./auth/authSlice"
import admin from "./admin/adminSlice"
import freelancer from "./freelancer/freelancerSlice"

const store = configureStore({
    reducer: { auth, admin, freelancer }
})


export default store