import express from "express"
import freelancerController from "../controllers/freelancerController.js"

import ratingRoutes from "./ratingRoutes.js"
import protect from "../middleware/authMiddleware.js"

const router = express.Router({ mergeParams: true })

router.get("/", freelancerController.getFreelancers)
router.get("/:fid", freelancerController.getFreelancer)

router.post("/add-me", protect.forAuthUsers, freelancerController.becomeFreelancer)

router.get("/project", freelancerController.getMyPreviousProjects)
router.post("/project/:pid", freelancerController.applyForProject)
router.put("/project/:pid", freelancerController.submitProject)

router.get("/my-work", freelancerController.getMyWork)
router.post("/my-work", freelancerController.addMyWork)
router.put("/my-work/:wid", freelancerController.udpateMyWork)
router.delete("/my-work/:wid", freelancerController.removeMyWork)

router.put("/profile", freelancerController.updateProfile)


router.use("/:fid/ratings", ratingRoutes)



export default router