import axios from "axios"

const fetchAllUsers = async (token) => {

    let options = {
        headers: {
            authorization: `Bearer ${token}`
        }
    }

    const response = await axios.get('/api/admin/users', options)
    return response.data



}

const updateCredits = async (token, userDetails) => {

    let options = {
        headers: {
            authorization: `Bearer ${token}`
        }
    }

    const response = await axios.put('/api/admin/users/' + userDetails._id, userDetails, options)
    return response.data



}


const adminService = { fetchAllUsers, updateCredits }

export default adminService