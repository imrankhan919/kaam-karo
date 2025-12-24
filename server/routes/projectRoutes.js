import express from "express"
import projectController from "../controllers/projectController.js"
import protect from "../middleware/authMiddleware.js"


const router = express.Router()

router.get("/", projectController.getListedProjects)
router.post("/add", protect.forAuthUsers, projectController.listProject)
router.post("/:bid", protect.forAuthUsers, projectController.acceptProjectRequest)
router.put("/:pid", protect.forAuthUsers, projectController.updateProjectStatus)
router.get("/:pid", protect.forAuthUsers, projectController.checkProjectApplications)



export default router