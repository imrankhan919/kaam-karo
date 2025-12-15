import bcrypt from "bcryptjs";

import User from "../models/userModel.js"

const registerUser = async (req, res) => {

    // Check if all fields are coming
    const { name, email, phone, password } = req.body

    if (!name || !email || !password || !phone) {
        res.status(409)
        throw new Error("Please Fill All Details!")
    }

    // Check if user exists
    const phoneExist = await User.findOne({ phone: phone })
    const emailExist = await User.findOne({ email: email })

    if (phoneExist || emailExist) {
        res.status(401)
        throw new Error("User Already Exists!")
    }

    // Hash Password
    const salt = bcrypt.genSaltSync(10);
    const hashedPassword = bcrypt.hashSync(password, salt);


    const user = await User.create({
        name, email, phone, password: hashedPassword, profilePic: req.file.path
    })


    if (!user) {
        res.status(409)
        throw new Error("User Not Registered")
    }

    res.status(201).json(user)

}

const loginUser = async (req, res) => {
    // Check if all fields are coming
    const { email, password } = req.body

    if (!email || !password) {
        res.status(409)
        throw new Error("Please Fill All Details!")
    }

    let user = await User.findOne({ email: email })

    if (user && bcrypt.compareSync(password, user.password)) {
        res.status(200).json(user)
    } else {
        res.status(400)
        throw new Error("Invalid Credentials")
    }


}

const authController = { registerUser, loginUser }

export default authController