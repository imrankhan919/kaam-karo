const registerUser = async (req, res) => {
    res.send("User Registered!")
}

const loginUser = async (req, res) => {
    res.send("User Logged In!")
}

const authController = { registerUser, loginUser }

export default authController