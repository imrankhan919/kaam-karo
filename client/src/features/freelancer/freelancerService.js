import axios from "axios"

const fetchFreelancers = async () => {

    const response = await axios.get("/api/freelancer")
    return response.data

}

const fetchFreelancer = async (id) => {

    const response = await axios.get("/api/freelancer/profile/" + id)
    return response.data

}


const addProject = async (formData, token) => {

    let options = {
        headers: {
            authorization: `Bearer ${token}`
        }
    }

    const response = await axios.post('/api/freelancer/my-work', formData, options)
    return response.data

}

const addRating = async (formData, token) => {

    console.log(formData, token)

    let options = {
        headers: {
            authorization: `Bearer ${token}`
        }
    }

    const response = await axios.post(`/api/freelancer/${formData.id}/ratings`, formData, options)
    return response.data

}

const fetchRatings = async (id) => {
    const response = await axios.get(`/api/freelancer/${id}/ratings`)
    return response.data

}

const bidToProject = async (formData, token) => {

    let options = {
        headers: {
            authorization: `Bearer ${token}`
        }
    }

    const response = await axios.post('/api/freelancer/project/' + formData.projectId, formData, options)
    return response.data

}


const freelancerService = { fetchFreelancers, fetchFreelancer, addProject, bidToProject, addRating, fetchRatings }

export default freelancerService