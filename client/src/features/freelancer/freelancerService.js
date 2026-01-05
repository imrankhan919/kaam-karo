import axios from "axios"

const fetchFreelancers = async () => {

    const response = await axios.get("/api/freelancer")
    return response.data

}

const fetchFreelancer = async (id) => {

    const response = await axios.get("/api/freelancer/profile/" + id)
    console.log(response.data)
    return response.data

}


const freelancerService = { fetchFreelancers, fetchFreelancer }

export default freelancerService