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
    console.log(response)
    return response.data

}


const freelancerService = { fetchFreelancers, fetchFreelancer, addProject }

export default freelancerService