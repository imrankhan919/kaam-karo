import express from "express"
import freelancerController from "../controllers/freelancerController.js"

import ratingRoutes from "./ratingRoutes.js"
import protect from "../middleware/authMiddleware.js"
import upload from "../middleware/imageUploadMiddleware.js"

const router = express.Router({ mergeParams: true })

router.get("/", freelancerController.getFreelancers)
router.get("/profile/:fid", freelancerController.getFreelancer)

router.post("/add-me", protect.forAuthUsers, freelancerController.becomeFreelancer)

router.get("/project", freelancerController.getMyPreviousProjects)
router.post("/project/:pid", protect.forAuthUsers, freelancerController.applyForProject)
router.put("/project/:pid", freelancerController.submitProject)

router.get("/my-work", protect.forAuthUsers, freelancerController.getMyWork)
router.post("/my-work", protect.forAuthUsers, upload.single('projectImage'), freelancerController.addMyWork)
router.put("/my-work/:wid", protect.forAuthUsers, freelancerController.udpateMyWork)
router.delete("/my-work/:wid", protect.forAuthUsers, freelancerController.removeMyWork)

router.put("/profile", protect.forAuthUsers, freelancerController.updateProfile)


router.use("/:fid/ratings", ratingRoutes)



export default router