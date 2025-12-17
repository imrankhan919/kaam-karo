import Freelancer from "../models/freelancerModel.js"
import User from "../models/userModel.js"

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

const applyForProject = async (req, res) => {
    res.send("Applied For Project")
}

const submitProject = async (req, res) => {
    res.send("Project Upated!")
}


const getMyPreviousProjects = async (req, res) => {
    res.send("All Previous Projects Here")
}

const getMyWork = async (req, res) => {
    res.send("All Work Here")
}

const addMyWork = async (req, res) => {
    res.send("Work Added")
}

const udpateMyWork = async (req, res) => {
    res.send("Work Updated")
}

const removeMyWork = async (req, res) => {
    res.send("Work Removed")
}

const updateProfile = async (req, res) => {
    res.send("Profile Updated")
}

const getFreelancers = async (req, res) => {
    const freelancers = await Freelancer.find().populate('user')

    if (!freelancers) {
        res.status(404)
        throw new Error("Freelancers Not Found!")
    }

    res.status(200).json(freelancers)

}

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