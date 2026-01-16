import axios from "axios"

const fetchProjects = async () => {

    const response = await axios.get("/api/project")
    return response.data

}

const createProject = async (formData, token) => {

    let options = {
        headers: {
            authorization: `Bearer ${token}`
        }
    }


    const response = await axios.post("/api/project/add", formData, options)
    return response.data

}


const checkBids = async (projectId, token) => {
    let options = {
        headers: {
            authorization: `Bearer ${token}`
        }
    }
    const response = await axios.get("/api/project/" + projectId, options)
    return response.data

}



const projectService = { fetchProjects, createProject, checkBids }

export default projectService