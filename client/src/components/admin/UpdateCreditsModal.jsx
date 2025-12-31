import React, { useState } from 'react'
import { useDispatch } from 'react-redux'
import { grantCredits } from '../../features/admin/adminSlice'

const UpdateCreditsModal = ({ handleModal, currentUser }) => {

    const [credits, setCredits] = useState(0)

    const dispatch = useDispatch()


    const handleSubmit = (e) => {
        e.preventDefault()

        dispatch(grantCredits({ _id: currentUser._id, credits: credits }))

        handleModal()
    }



    return (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-900/50 backdrop-blur-sm">
            <form onSubmit={handleSubmit} className="w-full max-w-md bg-white rounded-xl shadow-xl overflow-hidden animate-in fade-in zoom-in duration-200">
                <div className="p-6 border-b border-slate-100">
                    <h3 className="text-xl font-semibold text-slate-900">Update User Credits</h3>
                    <p className="text-sm text-slate-500 mt-1">Adjust the credit balance for this user.</p>
                </div>

                <div className="p-6 space-y-4">
                    <div className="space-y-1.5">
                        <label className="text-sm font-medium text-slate-700">User Name</label>
                        <div className="w-full px-3 py-2 bg-slate-50 border border-slate-200 rounded-lg text-slate-600">
                            {currentUser?.name}
                        </div>
                    </div>

                    <div className="space-y-1.5">
                        <label className="text-sm font-medium text-slate-700">Current Credits</label>
                        <input
                            type="text"
                            disabled
                            value={currentUser?.credits}
                            className="w-full px-3 py-2 bg-slate-50 border border-slate-200 rounded-lg text-slate-400 cursor-not-allowed"
                        />
                    </div>

                    <div className="space-y-1.5">
                        <label className="text-sm font-medium text-slate-700">New Credits</label>
                        <input
                            value={credits}
                            onChange={(e) => setCredits(e.target.value)}
                            type="number"
                            placeholder="Enter amount"
                            className="w-full px-3 py-2 border border-slate-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-emerald-500/20 focus:border-emerald-500 transition-all"
                        />
                    </div>

                </div>

                <div className="p-6 bg-slate-50 flex items-center justify-end gap-3">
                    <button onClick={handleModal} className="px-4 py-2 text-sm font-medium text-slate-600 hover:bg-slate-200 rounded-lg transition-colors">
                        Cancel
                    </button>
                    <button type='submit' className="px-4 py-2 text-sm font-medium text-white bg-emerald-600 hover:bg-emerald-700 rounded-lg shadow-sm shadow-emerald-200 transition-all">
                        Update Credits
                    </button>
                </div>
            </form>
        </div>
    )
}

export default UpdateCreditsModal
