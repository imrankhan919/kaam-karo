import bcrypt from "bcryptjs";

import User from "../models/userModel.js"
import jwt from "jsonwebtoken";

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

    res.status(201).json({
        _id: user._id,
        name: user.name,
        email: user.email,
        phone: user.phone,
        profilePic: user.profilePic,
        isAdmin: user.isAdmin,
        isFreelancer: user.isFreelancer,
        token: generateToken(user._id)
    })

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
        res.status(200).json({
            _id: user._id,
            name: user.name,
            email: user.email,
            phone: user.phone,
            profilePic: user.profilePic,
            isAdmin: user.isAdmin,
            isFreelancer: user.isFreelancer,
            token: generateToken(user._id)
        })
    } else {
        res.status(400)
        throw new Error("Invalid Credentials")
    }


}


const privateController = (req, res) => {
    res.send("Request Made By : " + req.user.name)
}



// Generate Token 
const generateToken = (id) => {
    let token = jwt.sign({ id }, process.env.JWT_SECRET, { expiresIn: '30d' })
    return token
}


const authController = { registerUser, loginUser, privateController }

export default authController