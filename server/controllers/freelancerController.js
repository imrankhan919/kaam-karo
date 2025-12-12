const becomeFreelancer = async (req, res) => {
    res.send("You have become freelancer")
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
    res.send("All Freelancers")
}

const getFreelancer = async (req, res) => {
    res.send("Single Freelancer")
}




const freelancerController = { becomeFreelancer, applyForProject, submitProject, getMyPreviousProjects, getMyWork, addMyWork, updateProfile, udpateMyWork, removeMyWork, getFreelancers, getFreelancer }


export default freelancerController