import express from "express"

import ratingController from "../controllers/ratingController.js"

const router = express.Router()

router.get("/", ratingController.getRatings)
router.post("/", ratingController.addRating)


export default router