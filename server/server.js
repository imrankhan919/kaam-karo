import express from "express"
import colors from "colors"
import connectDB from "./config/dbConfig.js"

// Local Imports
import authRoutes from "./routes/authRoutes.js"
import adminRoutes from "./routes/adminRoutes.js"
import freelancerRoutes from "./routes/freelancerRoutes.js"
import projectRoutes from "./routes/projectRoutes.js"


const PORT = process.env.PORT || 8000
const app = express()

// DB CONNECTION
connectDB()

// Body-Parser
app.use(express.json())
app.use(express.urlencoded())


app.get("/", (req, res) => {
    res.json({
        message: "WELCOME TO KAAM KARO API 1.0"
    })
})


// Auth Routes
app.use("/api/auth", authRoutes)

// Admin Routes
app.use("/api/admin", adminRoutes)

// Freelancer Routes
app.use("/api/freelancer", freelancerRoutes)

// Project Routes
app.use("/api/project", projectRoutes)



app.listen(PORT, () => {
    console.log(`SERVER IS RUNNING AT PORT : ${PORT}`.bgBlue.black)
})