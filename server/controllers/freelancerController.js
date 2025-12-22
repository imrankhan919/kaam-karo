import Freelancer from "../models/freelancerModel.js"
import PreviousWork from "../models/previousWorks.js"
import Project from "../models/projectModel.js"
import User from "../models/userModel.js"



// Become Freelancer
const becomeFreelancer = async (req, res) => {

    let userId = req.user._id

    const { description, skills, category, experience } = req.body

    if (!description || !skills || !category || !experience) {
        res.status(409)
        throw new Error("Please Fill All Details")
    }

    let freelancer = new Freelancer({
        user: userId,
        description,
        skills,
        category,
        experience
    })


    await freelancer.save()

    const udpatedUser = await User.findByIdAndUpdate(req.user._id, { isFreelancer: true }, { new: true })

    if (!udpatedUser) {
        res.status(409)
        throw new Error("User Cannot Be Updated!")
    }

    res.status(201).json({
        user: udpatedUser,
        freelancer: freelancer
    })

}


// Apply For Project
const applyForProject = async (req, res) => {

    let projectId = req.params.pid

    // Check if project exists
    const project = await Project.findById(projectId)

    if (!project) {
        res.status(404)
        throw new Error("Project Not Found!")
    }

    // Create Bid



    res.send("Applied For Project")
}

// Submit Project Status
const submitProject = async (req, res) => {
    res.send("Project Upated!")
}

// Previous Projects : (Given By Clients)
const getMyPreviousProjects = async (req, res) => {
    res.send("All Previous Projects Here")
}

// Previous Work : (Before Portal)
const getMyWork = async (req, res) => {

    let userId = req.user._id

    // Check Freelancer
    let freelancer = await Freelancer.findOne({ user: userId })

    if (!freelancer) {
        res.status(404)
        throw new Error("Freelancer Not Found!")
    }

    let myWorks = await PreviousWork.find({ freelancer: freelancer._id }).populate("freelancer")

    if (!myWorks) {
        res.status(404)
        throw new Error("No Previous Work Found!")
    }

    res.status(200).json(myWorks)
}


// Add Work : (Outside Portal)
const addMyWork = async (req, res) => {

    let userId = req.user._id

    const { projectLink, projectDescription } = req.body

    // Check Freelancer
    let freelancer = await Freelancer.findOne({ user: userId })

    if (!freelancer) {
        res.status(404)
        throw new Error("Freelancer Not Found!")
    }



    const work = await PreviousWork.create({

        freelancer: freelancer._id,
        projectLink,
        projectDescription,
        projectImage: req.file.path

    })

    await work.populate("freelancer")



    if (!work) {
        res.status(401)
        throw new Error("Work Not Added!")
    }

    res.status(201).json(work)


}




// Update Work : (Outside Work)
const udpateMyWork = async (req, res) => {

    let userId = req.user._id
    let workId = req.params.wid


    // Check Freelancer
    let freelancer = await Freelancer.findOne({ user: userId })

    if (!freelancer) {
        res.status(404)
        throw new Error("Freelancer Not Found!")
    }

    // Update Work
    const updatedWork = await PreviousWork.findByIdAndUpdate(workId, req.body, { new: true })

    if (!updatedWork) {
        res.status(409)
        throw new Error("Work Not Updated")
    }

    res.status(200).json(updatedWork)
}


// Remove Work : (Outside Portal)
const removeMyWork = async (req, res) => {
    let userId = req.user._id
    let workId = req.params.wid


    // Check Freelancer
    let freelancer = await Freelancer.findOne({ user: userId })

    if (!freelancer) {
        res.status(404)
        throw new Error("Freelancer Not Found!")
    }

    await PreviousWork.findByIdAndDelete(workId)

    res.status(200).json({
        success: true,
        workId: workId,
        message: "Work Removed!"
    })



}

// Upadte Profile
const updateProfile = async (req, res) => {

    let userId = req.user._id

    // Update Profile
    const updatedProfile = await User.findByIdAndUpdate(userId, req.body, { new: true }).select("-password")


    if (!updatedProfile) {
        res.status(409)
        throw new Error("Profile Not Updated")
    }

    res.status(200).json(updatedProfile)

}


// Get All Freelancers
const getFreelancers = async (req, res) => {
    const freelancers = await Freelancer.find().populate('user')

    if (!freelancers) {
        res.status(404)
        throw new Error("Freelancers Not Found!")
    }

    res.status(200).json(freelancers)

}


// Get Freelancer
const getFreelancer = async (req, res) => {
    const freelancer = await Freelancer.findById(req.params.fid).populate('user')

    if (!freelancer) {
        res.status(404)
        throw new Error("Freelancer Not Found!")
    }

    res.status(200).json(freelancer)
}




const freelancerController = { becomeFreelancer, applyForProject, submitProject, getMyPreviousProjects, getMyWork, addMyWork, updateProfile, udpateMyWork, removeMyWork, getFreelancers, getFreelancer }


export default freelancerController