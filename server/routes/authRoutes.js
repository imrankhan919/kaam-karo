import express from "express"
import authController from "../controllers/authController.js"
import upload from "../middleware/imageUploadMiddleware.js"

const router = express.Router()


router.post("/register", upload.single("profilePic"), authController.registerUser)
router.post("/login", authController.loginUser)


export default router