import { useState } from "react"
import { useDispatch } from "react-redux"
import { createBid, createRating } from "../features/freelancer/freelancerSlice"
import { useParams } from "react-router-dom"

export function RatingModal() {

    const [rating, setRating] = useState("")
    const [review, setReview] = useState("")

    const { id } = useParams()



    const dispatch = useDispatch()


    const [isOpen, setIsOpen] = useState(false)

    const handleSubmit = (e) => {
        e.preventDefault()
        dispatch(createRating({ id: id, rating, review }))

        // setIsOpen(false)

    }

    const handleCancel = () => {
        setIsOpen(false)

    }

    return (
        <>
            {/* Place Bid Button - Use this in your project card */}
            <button
                onClick={() => setIsOpen(true)}
                className="disabled:bg-gray-500 px-6 py-2 bg-blue-500 text-white rounded-lg hover:bg-primary/90 transition-colors font-medium"
            >
                Add Rating
            </button>

            {/* Modal Overlay */}
            {isOpen && <div className="fixed inset-0 z-40 bg-black/50 transition-opacity duration-200" />}

            {/* Modal Content */}
            {isOpen && (
                <form onSubmit={handleSubmit} className="fixed top-1/2 left-1/2 z-50 w-full max-w-md transform -translate-x-1/2 -translate-y-1/2 rounded-lg border border-gray-200 bg-white p-6 shadow-lg animate-in fade-in zoom-in-95 duration-200">
                    {/* Header */}
                    <div className="mb-6">
                        <h2 className="text-xl font-semibold text-gray-900">Enter Your Bid</h2>
                        <p className="mt-1 text-sm text-gray-600">Specify the amount you want to bid for this project</p>
                    </div>

                    {/* Input Field */}
                    <div className="mb-6">
                        <label className="block text-sm font-medium text-gray-700 mb-2">Rating</label>
                        <input
                            onChange={(e) => setRating(e.target.value)}
                            value={rating}
                            type="number"
                            placeholder="Enter Rating 1 to 5"
                            className="w-full px-4 py-2 border border-gray-300 rounded-lg text-gray-900 placeholder-gray-500 focus:border-blue-500 focus:outline-none focus:ring-2 focus:ring-blue-500/20 transition-all duration-200"
                            autoFocus
                        />
                    </div>
                    <div className="mb-6">
                        <label className="block text-sm font-medium text-gray-700 mb-2">Review</label>
                        <textarea
                            onChange={(e) => setReview(e.target.value)}
                            value={review}
                            type="text"
                            placeholder="Enter Your Review"
                            className="w-full h-36 px-4 py-2 border border-gray-300 rounded-lg text-gray-900 placeholder-gray-500 focus:border-blue-500 focus:outline-none focus:ring-2 focus:ring-blue-500/20 transition-all duration-200"
                            autoFocus
                        ></textarea>
                    </div>

                    {/* Footer with Buttons */}
                    <div className="flex flex-col-reverse gap-3 sm:flex-row sm:justify-end">
                        <button
                            type="submit"
                            className="px-6 py-2 bg-blue-500 hover:bg-blue-600 disabled:bg-gray-300 disabled:cursor-not-allowed text-white font-semibold rounded-lg transition-colors duration-200"
                        >
                            Submit Review
                        </button>
                    </div>
                </form>
            )}
        </>
    )
}
