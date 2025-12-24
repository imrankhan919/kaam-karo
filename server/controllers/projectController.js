import Bid from "../models/bidModel.js"
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

    const projects = await Project.find().populate('user')

    if (!projects) {
        res.status(404)
        throw new Error("Projectd Not Found")
    }

    res.status(200).json(projects)


}


const checkProjectApplications = async (req, res) => {
    const projectId = req.params.pid

    // Check if project exists
    const project = await Project.findById(projectId)

    if (!project) {
        res.status(404)
        throw new Error("Project Not Found")
    }

    // Check if biddings exist
    let biddings = await Bid.find({ project: projectId }).populate('project').populate('freelancer')

    if (!biddings) {
        res.status(404)
        throw new Error('No Biddings Found!')
    }

    res.status(200).json(biddings)
}

const acceptProjectRequest = async (req, res) => {

    const { status } = req.body

    if (!status) {
        res.status(409)
        throw new Error("Please Send Status")
    }

    const userId = req.user._id
    const bidId = req.params.bid

    const bid = await Bid.findById(bidId).populate('freelancer').populate('project')

    if (!bid) {
        res.status(404)
        throw new Error("Bid Not Found")
    }

    // Check if user id and project user is is same
    if (bid.project.user.toString() !== userId.toString()) {
        res.status(409)
        throw new Error("You are not rightfull owner of this project...")
    }


    const updatedBid = await Bid.findByIdAndUpdate(bidId, { status: status }, { new: true })

    if (!updatedBid) {
        res.status(401)
        throw new Error("Bid Not Updated!")
    }


    if (updatedBid.status === "accepted") {
        // Assign Freelancer to project
        const updatedProject = await Project.findByIdAndUpdate(bid.project._id, { freelancer: bid.freelancer._id }, { new: true }).populate("freelancer")
        res.status(200).json({
            project: updatedProject,
            bid: updatedBid
        })
    } else {
        res.status(200).json(updatedBid)
    }





}


const updateProjectStatus = async (req, res) => {

    const { status } = req.body
    if (!status) {
        res.status(409)
        throw new Error("Please Send Status")
    }


    const projectId = req.params.pid


    const project = await Project.findByIdAndUpdate(projectId, { status: status }, { new: true }).populate('user').populate('freelancer')

    if (!project) {
        res.status(409)
        throw new Error("Work Progress Not Exist")
    }

    res.status(200).json(project)

}



const projectController = { getListedProjects, listProject, acceptProjectRequest, updateProjectStatus, checkProjectApplications }


export default projectController

