import { useDispatch, useSelector } from 'react-redux'
import { toast } from "react-toastify"
import { User, Mail, Lock, ArrowRight, Phone, User2Icon } from "lucide-react"

import { Link, useNavigate } from "react-router-dom"
import { useEffect, useState } from 'react'
import { registerUser } from '../features/auth/authSlice'

function Register() {

    const { user, isLoading, isError, message } = useSelector(state => state.auth)

    console.log(user)

    const dispatch = useDispatch()
    const navigate = useNavigate()


    const [formData, setFormData] = useState({
        name: "",
        email: "",
        phone: "",
        profilePic: "",
        password: "",
        confirmPassword: ""
    })

    const { name, email, password, confirmPassword, profilePic, phone } = formData


    const handleChange = (e) => {

        setFormData({
            ...formData,
            [e.target.name]: e.target.value
        })

    }


    const handleSubmit = (e) => {
        e.preventDefault()
        if (password !== confirmPassword) {
            toast.error("Passwords Not Match")
        } else {
            dispatch(registerUser(formData))
        }
    }

    useEffect(() => {

        if (user) {
            navigate("/")
        }

        if (isError && message) {
            toast.error(message)
        }

    }, [isError, message, user])


    if (isLoading) {
        return (
            <h1 className="my-10 text-center">Loading....</h1>
        )
    }



    return (
        <main className="min-h-screen bg-linear-to-br from-indigo-50 via-white to-purple-50 flex items-center justify-center p-4 sm:p-8">
            {/* Background Decorative Elements */}
            <div className="absolute inset-0 overflow-hidden pointer-events-none">
                <div className="absolute top-[-10%] left-[-10%] w-[40%] h-[40%] bg-purple-200/30 blur-[120px] rounded-full" />
                <div className="absolute bottom-[-10%] right-[-10%] w-[40%] h-[40%] bg-indigo-200/30 blur-[120px] rounded-full" />
            </div>

            <div className="relative w-full max-w-[1000px] grid lg:grid-cols-2 bg-white rounded-[2rem] shadow-2xl shadow-indigo-200/50 overflow-hidden border border-white">
                {/* Left Side: Information/Branding */}
                <div className="hidden lg:flex flex-col justify-between p-12 bg-linear-to-br from-indigo-600 to-purple-700 text-white relative">
                    <div className="relative z-10">
                        <div className="flex items-center gap-2 mb-12">
                            <div className="w-10 h-10 bg-white/20 backdrop-blur-md rounded-xl flex items-center justify-center border border-white/20">
                                <User className="w-6 h-6 text-white" />
                            </div>
                            <span className="text-xl font-bold tracking-tight">CloudFlow</span>
                        </div>

                        <h1 className="text-5xl font-bold leading-tight mb-6 text-balance">
                            Start your journey <br /> with us today.
                        </h1>
                        <p className="text-indigo-100 text-lg max-w-sm mb-8">
                            Join 50,000+ developers building the future of web applications on our platform.
                        </p>

                        <div className="space-y-6">
                            {["Advanced analytics & reporting", "Seamless cloud integration", "24/7 dedicated support"].map(
                                (feature, i) => (
                                    <div key={i} className="flex items-center gap-3">
                                        <div className="w-6 h-6 bg-indigo-400/30 rounded-full flex items-center justify-center border border-indigo-300/30">
                                            <div className="w-2 h-2 bg-white rounded-full" />
                                        </div>
                                        <span className="text-indigo-50 font-medium">{feature}</span>
                                    </div>
                                ),
                            )}
                        </div>
                    </div>

                    <div className="relative z-10 mt-12 pt-8 border-t border-white/10">
                        <p className="text-sm text-indigo-200/80 italic">
                            "The most intuitive form builder I've ever used. Our conversion rates jumped by 40% in the first month."
                        </p>
                        <div className="mt-4 flex items-center gap-3">
                            <div className="w-10 h-10 rounded-full bg-white/10 border border-white/20" />
                            <div>
                                <p className="text-sm font-semibold">Sarah Jenkins</p>
                                <p className="text-xs text-indigo-300">CTO at TechFlow</p>
                            </div>
                        </div>
                    </div>

                    {/* Abstract background shapes */}
                    <div className="absolute top-0 right-0 w-full h-full opacity-10 pointer-events-none overflow-hidden">
                        <div className="absolute top-1/4 -right-20 w-80 h-80 bg-white rounded-full blur-3xl" />
                        <div className="absolute -bottom-20 -left-20 w-80 h-80 bg-indigo-400 rounded-full blur-3xl" />
                    </div>
                </div>

                {/* Right Side: Form */}
                <div className="p-8 sm:p-12 flex flex-col justify-center">
                    <div className="mb-8">
                        <h2 className="text-3xl font-bold text-slate-900 mb-2">Create an account</h2>
                        <p className="text-slate-500">Enter your details below to get started.</p>
                    </div>

                    <form onSubmit={handleSubmit} className="space-y-5">
                        <div className="grid sm:grid-cols-2 gap-5">
                            <div className="space-y-1.5">
                                <label className="text-sm font-semibold text-slate-700 ml-1">Full Name</label>
                                <div className="relative group">
                                    <User className="absolute left-4 top-1/2 -translate-y-1/2 w-4 h-4 text-slate-400 group-focus-within:text-indigo-600 transition-colors" />
                                    <input
                                        name='name'
                                        value={name}
                                        onChange={handleChange}
                                        type="text"
                                        placeholder="John Doe"
                                        className="w-full pl-11 pr-4 py-3 bg-slate-50/50 border border-slate-200 rounded-2xl text-slate-900 placeholder:text-slate-400 focus:outline-none focus:ring-2 focus:ring-indigo-600/20 focus:border-indigo-600 focus:bg-white transition-all outline-none"
                                    />
                                </div>
                            </div>
                            <div className="space-y-1.5">
                                <label className="text-sm font-semibold text-slate-700 ml-1">Email</label>
                                <div className="relative group">
                                    <Mail className="absolute left-4 top-1/2 -translate-y-1/2 w-4 h-4 text-slate-400 group-focus-within:text-indigo-600 transition-colors" />
                                    <input
                                        name='email'
                                        value={email}
                                        onChange={handleChange}
                                        type="email"
                                        placeholder="name@example.com"
                                        className="w-full pl-11 pr-4 py-3 bg-slate-50/50 border border-slate-200 rounded-2xl text-slate-900 placeholder:text-slate-400 focus:outline-none focus:ring-2 focus:ring-indigo-600/20 focus:border-indigo-600 focus:bg-white transition-all outline-none"
                                    />
                                </div>
                            </div>
                            <div className="space-y-1.5">
                                <label className="text-sm font-semibold text-slate-700 ml-1">Phone</label>
                                <div className="relative group">
                                    <Phone className="absolute left-4 top-1/2 -translate-y-1/2 w-4 h-4 text-slate-400 group-focus-within:text-indigo-600 transition-colors" />
                                    <input
                                        name='phone'
                                        value={phone}
                                        onChange={handleChange}
                                        type="phone"
                                        placeholder="91234567890"
                                        className="w-full pl-11 pr-4 py-3 bg-slate-50/50 border border-slate-200 rounded-2xl text-slate-900 placeholder:text-slate-400 focus:outline-none focus:ring-2 focus:ring-indigo-600/20 focus:border-indigo-600 focus:bg-white transition-all outline-none"
                                    />
                                </div>
                            </div>
                            <div className="space-y-1.5">
                                <label className="text-sm font-semibold text-slate-700 ml-1">Profile Pic</label>
                                <div className="relative group">
                                    <User2Icon className="absolute left-4 top-1/2 -translate-y-1/2 w-4 h-4 text-slate-400 group-focus-within:text-indigo-600 transition-colors" />
                                    <input
                                        name='profilePic'
                                        value={profilePic}
                                        onChange={handleChange}
                                        type="phone"
                                        placeholder="Profile photo link"
                                        className="w-full pl-11 pr-4 py-3 bg-slate-50/50 border border-slate-200 rounded-2xl text-slate-900 placeholder:text-slate-400 focus:outline-none focus:ring-2 focus:ring-indigo-600/20 focus:border-indigo-600 focus:bg-white transition-all outline-none"
                                    />
                                </div>
                            </div>
                        </div>

                        <div className="space-y-1.5">
                            <label className="text-sm font-semibold text-slate-700 ml-1">Password</label>
                            <div className="relative group">
                                <Lock className="absolute left-4 top-1/2 -translate-y-1/2 w-4 h-4 text-slate-400 group-focus-within:text-indigo-600 transition-colors" />
                                <input
                                    name='password'
                                    value={password}
                                    onChange={handleChange}
                                    type="password"
                                    placeholder="••••••••"
                                    className="w-full pl-11 pr-4 py-3 bg-slate-50/50 border border-slate-200 rounded-2xl text-slate-900 placeholder:text-slate-400 focus:outline-none focus:ring-2 focus:ring-indigo-600/20 focus:border-indigo-600 focus:bg-white transition-all outline-none"
                                />
                            </div>
                        </div>
                        <div className="space-y-1.5">
                            <label className="text-sm font-semibold text-slate-700 ml-1">Confirm Password</label>
                            <div className="relative group">
                                <Lock className="absolute left-4 top-1/2 -translate-y-1/2 w-4 h-4 text-slate-400 group-focus-within:text-indigo-600 transition-colors" />
                                <input
                                    name='confirmPassword'
                                    value={confirmPassword}
                                    onChange={handleChange}
                                    type="password"
                                    placeholder="••••••••"
                                    className="w-full pl-11 pr-4 py-3 bg-slate-50/50 border border-slate-200 rounded-2xl text-slate-900 placeholder:text-slate-400 focus:outline-none focus:ring-2 focus:ring-indigo-600/20 focus:border-indigo-600 focus:bg-white transition-all outline-none"
                                />
                            </div>
                        </div>

                        <div className="flex items-center gap-2 px-1">
                            <input
                                type="checkbox"
                                id="terms"
                                className="w-4 h-4 rounded border-slate-300 text-indigo-600 focus:ring-indigo-600/20 transition-all cursor-pointer"
                            />
                            <label htmlFor="terms" className="text-xs text-slate-500 select-none">
                                I agree to the{" "}
                                <Link href="#" className="text-indigo-600 font-medium hover:underline">
                                    Terms of Service
                                </Link>{" "}
                                and{" "}
                                <Link href="#" className="text-indigo-600 font-medium hover:underline">
                                    Privacy Policy
                                </Link>
                                .
                            </label>
                        </div>

                        <button
                            type="submit"
                            className="w-full py-4 bg-indigo-600 text-white font-bold rounded-2xl shadow-lg shadow-indigo-200 hover:bg-indigo-700 hover:shadow-indigo-300 active:scale-[0.98] transition-all flex items-center justify-center gap-2 group"
                        >
                            Create Account
                            <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                        </button>
                    </form>
                    <p className="mt-8 text-center text-sm text-slate-500">
                        Already have an account?{" "}
                        <Link to="/login" className="text-indigo-600 font-bold hover:underline transition-all">
                            Log in
                        </Link>
                    </p>
                </div>
            </div>
        </main>
    );
}

export default Register;
