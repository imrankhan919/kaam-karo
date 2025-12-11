import express from "express"
import freelancerController from "../controllers/freelancerController.js"


const router = express.Router()

router.post("/add-me", freelancerController.becomeFreelancer)

router.get("/project", freelancerController.getMyPreviousProjects)
router.post("/project/:pid", freelancerController.applyForProject)
router.put("/project/:pid", freelancerController.submitProject)

router.get("/my-work", freelancerController.getMyWork)
router.post("/my-work", freelancerController.addMyWork)
router.put("/my-work/:wid", freelancerController.udpateMyWork)
router.delete("/my-work/:wid", freelancerController.removeMyWork)

router.put("/profile", freelancerController.updateProfile)


export default router