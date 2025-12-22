import Project from "../models/projectModel.js"

const listProject = async (req, res) => {

    let userId = req.user._id

    const { title, description, budget, technology, category, duration } = req.body

    if (!title || !description || !budget || !technology || !category || !duration) {
        res.status(409)
        throw new Error("Please Fill All Details!")
    }

    let project = new Project({
        user: userId,
        title,
        description,
        budget,
        technology,
        category,
        duration,
        freelancer: null
    })

    await project.save()
    await project.populate('user')


    if (!project) {
        res.status(401)
        throw new Error("Project Not Listed!")
    }

    res.status(201).json(project)


}


const getListedProjects = async (req, res) => {

    const projects = await Project.find()

    if (!projects) {
        res.status(404)
        throw new Error("Projectd Not Found")
    }

    res.status(200).json(projects)


}


const checkProjectApplications = async (req, res) => {
    res.send("All project applications here...")
}

const acceptProjectRequest = async (req, res) => {
    res.send("project request accepted!")
}


const updateProjectStatus = async (req, res) => {
    res.send("Project Status Updated")
}



const projectController = { getListedProjects, listProject, acceptProjectRequest, updateProjectStatus, checkProjectApplications }


export default projectController

