import jwt from "jsonwebtoken"
import User from "../models/userModel.js";

const forAuthUsers = async (req, res, next) => {

    try {

        // Extract Token From Headers
        let token = req.headers.authorization.split(" ")[1]

        // Check Token
        let decoded = jwt.verify(token, process.env.JWT_SECRET);

        // Find User
        let user = await User.findById(decoded.id).select("-password")

        //    Add User Into Request Object
        req.user = user



        next()

    } catch (error) {
        res.status(400)
        throw new Error("UnAuthorised Access : Access Denied")
    }

}

const forAdmin = async (req, res, next) => {

    try {

        // Extract Token From Headers
        let token = req.headers.authorization.split(" ")[1]

        // Check Token
        let decoded = jwt.verify(token, process.env.JWT_SECRET);

        // Find User
        let user = await User.findById(decoded.id).select("-password")

        //    Add User Into Request Object
        req.user = user

        // Check if user is admin
        if (user.isAdmin) {
            next()
        } else {
            res.status(400)
            throw new Error("UnAuthorised Access : Admin Only")
        }




    } catch (error) {
        res.status(400)
        throw new Error("UnAuthorised Access : Access Denied")
    }

}

const protect = { forAuthUsers, forAdmin }


export default protect