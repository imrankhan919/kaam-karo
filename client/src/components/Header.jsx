import { Link, useNavigate } from 'react-router-dom'
import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { logoutUser } from '../features/auth/authSlice'

const Header = () => {

    const { user } = useSelector(state => state.auth)

    const dispatch = useDispatch()
    const navigate = useNavigate()

    const handleLogout = () => {
        dispatch(logoutUser())
        navigate("/")

    }

    return (
        <header className="border-b border-slate-200 bg-white/80 backdrop-blur-sm sticky top-0 z-50">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
                <div className="flex items-center justify-between">
                    <Link to={"/"}>
                        <div className="flex items-center gap-2">
                            <div className="w-10 h-10 bg-gradient-to-br from-indigo-600 to-violet-600 rounded-lg flex items-center justify-center text-white font-black">KK</div>
                            <span className="text-2xl font-bold bg-gradient-to-r from-indigo-600 to-violet-600 bg-clip-text text-transparent">Kaam-Karo</span>
                        </div>
                    </Link>
                    <nav className="hidden md:flex items-center gap-8">
                        <a className="text-slate-600 hover:text-indigo-600 transition-colors duration-300">Find Work</a>
                        <a className="text-slate-600 hover:text-indigo-600 transition-colors duration-300">Browse Talent</a>
                        <a className="text-slate-600 hover:text-indigo-600 transition-colors duration-300">How It Works</a>
                        {
                            user ? (<>
                                <Link to={"/auth/profile"} className="px-4 py-2 text-slate-600 hover:text-indigo-600 transition-colors duration-300">{user?.name}</Link>
                                <button onClick={handleLogout} className="px-6 py-2.5 bg-gradient-to-r from-red-600 to-red-600 text-white rounded-lg hover:shadow-lg hover:scale-105 transition-all duration-300">Logout</button>
                            </>) : (<>
                                <Link to={"/login"} className="px-4 py-2 text-slate-600 hover:text-indigo-600 transition-colors duration-300">Login</Link>
                                <Link to={"/register"} className="px-6 py-2.5 bg-gradient-to-r from-indigo-600 to-violet-600 text-white rounded-lg hover:shadow-lg hover:scale-105 transition-all duration-300">Sign Up</Link>
                            </>)
                        }
                    </nav>
                </div>
            </div>
        </header>
    )
}

export default Header
