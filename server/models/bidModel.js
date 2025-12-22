import mongoose from "mongoose";

const bidSchema = new mongoose({
    freelancer: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "Freelancer",
        required: true
    },
    project: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "Project",
        required: true
    },
    amount: {
        type: number,
        required: true
    },
    status: {
        type: String,
        enum: ["accepeted", "rejected"],
        required: true
    }
}, {
    timestamps: true
})


const Bid = mongoose.model("Bid", bidSchema)

export default Bid