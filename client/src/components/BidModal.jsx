import { useState } from "react"
import { useDispatch } from "react-redux"
import { createBid } from "../features/freelancer/freelancerSlice"

export function BidModal({ work }) {

    const dispatch = useDispatch()


    const [isOpen, setIsOpen] = useState(false)
    const [bidAmount, setBidAmount] = useState("")

    const handleSubmit = () => {

        dispatch(createBid({ projectId: work._id, amount: bidAmount }))

        setIsOpen(false)
        setBidAmount("")
    }

    const handleCancel = () => {
        setIsOpen(false)
        setBidAmount("")
    }

    return (
        <>
            {/* Place Bid Button - Use this in your project card */}
            <button
                onClick={() => setIsOpen(true)}
                disabled={work.status === "accepted"} className="disabled:bg-gray-500 px-6 py-2 bg-emerald-500 text-white rounded-lg hover:bg-primary/90 transition-colors font-medium"
            >
                {work.status === "accepted" ? "Not Available" : "Place Bid"}
            </button>

            {/* Modal Overlay */}
            {isOpen && <div className="fixed inset-0 z-40 bg-black/50 transition-opacity duration-200" />}

            {/* Modal Content */}
            {isOpen && (
                <div className="fixed top-1/2 left-1/2 z-50 w-full max-w-md transform -translate-x-1/2 -translate-y-1/2 rounded-lg border border-gray-200 bg-white p-6 shadow-lg animate-in fade-in zoom-in-95 duration-200">
                    {/* Header */}
                    <div className="mb-6">
                        <h2 className="text-xl font-semibold text-gray-900">Enter Your Bid</h2>
                        <p className="mt-1 text-sm text-gray-600">Specify the amount you want to bid for this project</p>
                    </div>

                    {/* Input Field */}
                    <div className="mb-6">
                        <label className="block text-sm font-medium text-gray-700 mb-2">Your Pricing</label>
                        <input
                            type="number"
                            value={bidAmount}
                            onChange={(e) => setBidAmount(e.target.value)}
                            placeholder="Enter amount in INR"
                            className="w-full px-4 py-2 border border-gray-300 rounded-lg text-gray-900 placeholder-gray-500 focus:border-emerald-500 focus:outline-none focus:ring-2 focus:ring-emerald-500/20 transition-all duration-200"
                            autoFocus
                        />
                    </div>

                    {/* Footer with Buttons */}
                    <div className="flex flex-col-reverse gap-3 sm:flex-row sm:justify-end">
                        <button
                            onClick={handleCancel}
                            className="px-4 py-2 border border-gray-300 bg-white text-gray-700 font-medium rounded-lg hover:bg-gray-50 transition-colors duration-200"
                        >
                            Cancel
                        </button>
                        <button
                            onClick={handleSubmit}
                            disabled={!bidAmount.trim()}
                            className="px-6 py-2 bg-emerald-500 hover:bg-emerald-600 disabled:bg-gray-300 disabled:cursor-not-allowed text-white font-semibold rounded-lg transition-colors duration-200"
                        >
                            Send Bid
                        </button>
                    </div>
                </div>
            )}
        </>
    )
}
