import axios from "axios"

const fetchFreelancers = async () => {

    const response = await axios.get("/api/freelancer")
    console.log(response.data)
    return response.data

}


const freelancerService = { fetchFreelancers }

export default freelancerService