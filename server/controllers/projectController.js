const listProject = async (req, res) => {
    res.send("List Project!")
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



const projectController = { listProject, acceptProjectRequest, updateProjectStatus, checkProjectApplications }


export default projectController

