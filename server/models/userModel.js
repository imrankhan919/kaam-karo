import mongoose from "mongoose";

const userSchema = new mongoose.Schema({

    name: {
        type: String,
        required: [true, "Please Enter Name"]
    },
    email: {
        type: String,
        unique: true,
        required: [true, "Please Enter Email"]
    },
    phone: {
        type: String,
        unique: true,
        required: [true, "Please Enter Phone"]
    },
    profilePic: {
        type: String,
    },
    password: {
        type: String,
        required: [true, "Please Enter Password"]
    },
    isAdmin: {
        type: Boolean,
        default: false,
        required: true
    },
    isFreelancer: {
        type: Boolean,
        default: false,
        required: true
    },
    credits: {
        type: Number,
        default: 5,
        required: true
    }
}, {
    timestamps: true
})


const User = mongoose.model("User", userSchema)

export default User