import User from "../models/userModel.js"

const getAllUsers = async (req, res) => {

    const allUsers = await User.find()

    if (!allUsers) {
        res.status(404)
        throw new Error("Users Not Found!")
    }

    res.status(200).json(allUsers)

}

const updateUser = async (req, res) => {

    let updatedUser = await User.findByIdAndUpdate(req.params.uid, req.body, { new: true })

    if (!updatedUser) {
        res.status(409)
        throw new Error("User Can't Be Updated!")
    }

    res.status(200).json(updatedUser)

}





const adminController = { getAllUsers, updateUser }

export default adminController
