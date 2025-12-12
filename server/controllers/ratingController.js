const getRatings = async (req, res) => {
    res.send("All Ratings...")
}

const addRating = async (req, res) => {
    res.send("Rating Added..")
}


const ratingController = { getRatings, addRating }

export default ratingController