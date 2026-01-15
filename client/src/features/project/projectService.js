import axios from "axios"

const fetchProjects = async () => {

    const response = await axios.get("/api/project")
    return response.data

}


const projectService = { fetchProjects }

export default projectService