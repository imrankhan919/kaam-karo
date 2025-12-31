import React, { useEffect, useState } from 'react'
import UpdateCreditsModal from '../../components/admin/UpdateCreditsModal'
import { useDispatch, useSelector } from 'react-redux'
import { useNavigate } from 'react-router-dom'
import { getAllUsers } from '../../features/admin/adminSlice'
import { toast } from 'react-toastify'
import { LoadingScreen } from '../../components/LoadingScreen'

const Dashboard = () => {

    const { user } = useSelector(state => state.auth)
    const { users, adminError, adminErrorMessage, adminLoading } = useSelector(state => state.admin)

    const dispatch = useDispatch()
    const navigate = useNavigate()

    let totalCredits = users.reduce((acc, user) => user.credits + acc, 0)

    const [showModal, setShowModal] = useState(false)

    const [currentUser, setCurrentUser] = useState({})

    const handleModal = (user) => {
        setCurrentUser(user)
        setShowModal(showModal ? false : true)
    }

    useEffect(() => {

        // Api Call
        dispatch(getAllUsers())


        if (!user && !user.isAdmin) {
            navigate("/")
        }

        if (adminError && adminErrorMessage) {
            toast.error(adminErrorMessage)
        }


    }, [user, adminError, adminErrorMessage])


    if (adminLoading) {
        return (
            <LoadingScreen />
        )
    }

    return (
        <div className="min-h-screen bg-slate-50 font-sans text-slate-900 antialiased p-4 md:p-8">
            {/* 1️⃣ Page Header */}
            <header className="max-w-7xl mx-auto flex flex-col md:flex-row md:items-center justify-between gap-4 mb-8">
                <div>
                    <h1 className="text-2xl font-semibold text-slate-900">User Credits Dashboard</h1>
                    <p className="text-slate-500 mt-1">Manage user credits and balances</p>
                </div>
                <div className="relative w-full md:w-72">
                    <input
                        type="text"
                        placeholder="Search users..."
                        className="w-full pl-10 pr-4 py-2 bg-white border border-slate-200 rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-emerald-500/20 focus:border-emerald-500 transition-all"
                    />
                    <svg
                        className="absolute left-3 top-2.5 h-5 w-5 text-slate-400"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                    >
                        <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth="2"
                            d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
                        />
                    </svg>
                </div>
            </header>

            {/* 2️⃣ Stats Section */}
            <section className="max-w-7xl mx-auto grid grid-cols-1 sm:grid-cols-2 gap-4 mb-8">
                <div className="bg-white p-6 rounded-xl border border-slate-100 shadow-sm flex items-center gap-4">
                    <div className="h-12 w-12 bg-emerald-50 text-emerald-600 rounded-full flex items-center justify-center">
                        <svg className="h-6 w-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                strokeWidth="2"
                                d="M12 4.354a4 4 0 110 5.292M15 21H3v-1a6 6 0 0112 0v1zm0 0h6v-1a6 6 0 00-9-5.197M13 7a4 4 0 11-8 0 4 4 0 018 0z"
                            />
                        </svg>
                    </div>
                    <div>
                        <p className="text-sm font-medium text-slate-500 uppercase tracking-wider">Total Users</p>
                        <p className="text-2xl font-semibold text-slate-900">{users.length}</p>
                    </div>
                </div>
                <div className="bg-white p-6 rounded-xl border border-slate-100 shadow-sm flex items-center gap-4">
                    <div className="h-12 w-12 bg-emerald-50 text-emerald-600 rounded-full flex items-center justify-center">
                        <svg className="h-6 w-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                strokeWidth="2"
                                d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
                            />
                        </svg>
                    </div>
                    <div>
                        <p className="text-sm font-medium text-slate-500 uppercase tracking-wider">Total Credits On Platform</p>
                        <p className="text-2xl font-semibold text-slate-900">{totalCredits}</p>
                    </div>
                </div>
            </section>

            {/* 3️⃣ Users Table */}
            <section className="max-w-7xl mx-auto bg-white border border-slate-100 rounded-xl shadow-sm overflow-hidden">
                <div className="overflow-x-auto">
                    <table className="w-full text-left border-collapse">
                        <thead>
                            <tr className="bg-slate-50 border-b border-slate-100">
                                <th className="px-6 py-4 text-xs font-semibold text-slate-500 uppercase tracking-wider">User Name</th>
                                <th className="px-6 py-4 text-xs font-semibold text-slate-500 uppercase tracking-wider">
                                    Email / Phone
                                </th>
                                <th className="px-6 py-4 text-xs font-semibold text-slate-500 uppercase tracking-wider">
                                    Current Credits
                                </th>
                                <th className="px-6 py-4 text-xs font-semibold text-slate-500 uppercase tracking-wider">Type</th>
                                <th className="px-6 py-4 text-xs font-semibold text-slate-500 uppercase tracking-wider">Action</th>
                            </tr>
                        </thead>
                        <tbody className="divide-y divide-slate-100">
                            {
                                users.map(user => {
                                    return (
                                        <tr key={user._id}>
                                            <td className="px-6 py-4 text-sm font-medium text-slate-900">{user.name}</td>
                                            <td className="px-6 py-4 text-sm text-slate-600">{user.email}</td>
                                            <td className="px-6 py-4 text-sm font-semibold text-emerald-600">{user.credits}</td>
                                            <td className="px-6 py-4">
                                                <span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-green-100 text-green-700">
                                                    {user.isFreelancer ? "Freelancer" : "User"}
                                                </span>
                                            </td>
                                            <td className="px-6 py-4">
                                                <button onClick={() => handleModal(user)} className="text-sm font-medium text-emerald-600 hover:text-emerald-700 hover:underline">
                                                    Update Credits
                                                </button>
                                            </td>
                                        </tr>
                                    )
                                })
                            }
                        </tbody>
                    </table>
                </div>
                <div className="px-6 py-4 bg-slate-50 border-t border-slate-100 text-center">
                    <p className="text-sm text-slate-500">Showing 3 of 12,842 users</p>
                </div>
            </section>

            {
                showModal && <UpdateCreditsModal handleModal={handleModal} currentUser={currentUser} />
            }

        </div>
    )
}

export default Dashboard
