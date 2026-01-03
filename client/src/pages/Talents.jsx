import { Star, ExternalLink } from "lucide-react"
import { useEffect } from "react"
import { useDispatch, useSelector } from "react-redux"
import { toast } from "react-toastify"
import { LoadingScreen } from "../components/LoadingScreen"
import { getFreelancers } from "../features/freelancer/freelancerSlice"



export default function Talents() {

    const { freelancers, freelancerLoading, freelancerSuccess, freelancerError, freelancerErrorMessage } = useSelector(state => state.freelancer)


    const dispatch = useDispatch()


    useEffect(() => {

        // Api Call
        dispatch(getFreelancers())

        if (freelancerError && freelancerErrorMessage) {
            toast.error(freelancerErrorMessage)
        }

    }, [freelancerError, freelancerErrorMessage])

    if (freelancerLoading) {
        return (
            <LoadingScreen />
        )
    }


    return (
        <main className="min-h-screen bg-slate-50 text-slate-900 relative overflow-hidden font-sans">
            {/* Decorative Gradients */}
            <div className="absolute top-0 left-1/4 w-96 h-96 bg-indigo-500/5 blur-[120px] rounded-full -translate-y-1/2 pointer-events-none" />
            <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-fuchsia-500/5 blur-[120px] rounded-full translate-y-1/2 pointer-events-none" />

            <div className="max-w-7xl mx-auto px-6 py-20 relative z-10">
                {/* Top Section */}
                <div className="text-center mb-16 space-y-4">
                    <h1 className="text-4xl md:text-6xl font-bold tracking-tight text-pretty bg-clip-text text-transparent bg-gradient-to-r from-slate-900 via-slate-800 to-slate-600">
                        Browse Top Freelancers
                    </h1>
                    <p className="text-slate-600 text-lg md:text-xl max-w-2xl mx-auto text-balance">
                        Hire skilled professionals for your next project and scale your business with top-tier talent.
                    </p>
                </div>

                {/* Freelancers Grid */}
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
                    {freelancers.map((talent) => (
                        <div
                            key={talent._id}
                            className="group relative bg-white border border-slate-200 rounded-2xl p-6 transition-all duration-300 hover:scale-[1.02] hover:shadow-xl hover:shadow-indigo-500/5 hover:border-indigo-200"
                        >
                            <div className="flex flex-col h-full">
                                {/* Header: Avatar & Rating */}
                                <div className="flex justify-between items-start mb-4">
                                    <div
                                        style={{ backgroundImage: `url(${talent.user.profilePic})` }}
                                        className={`w-14 h-14 rounded-full bg-cover bg-center border border-white flex items-center justify-center text-xl font-bold text-white/90 shadow-sm`}
                                    >

                                    </div>
                                    <div className="flex items-center gap-1 bg-slate-50 px-2 py-1 rounded-full border border-slate-100">
                                        <Star className="w-3.5 h-3.5 fill-yellow-500 text-yellow-500" />
                                        <span className="text-xs font-medium text-slate-700"></span>
                                    </div>
                                </div>

                                {/* Info */}
                                <div className="space-y-1 mb-3">
                                    <h3 className="text-lg font-semibold tracking-tight group-hover:text-indigo-600 transition-colors text-slate-900">
                                        {talent.user.name}
                                    </h3>
                                    <p className="text-sm font-medium text-indigo-600/90">{talent.category}</p>
                                    <p className="text-sm font-medium text-indigo-600/90">{talent.experience} Years Experienced</p>
                                </div>

                                <p className="text-sm text-slate-600 line-clamp-2 mb-4 leading-relaxed">{talent.description}</p>

                                {/* Skills */}
                                <div className="flex flex-wrap gap-2 mb-6">
                                    <span
                                        className="text-[10px] uppercase tracking-wider font-bold px-2.5 py-1 rounded-md bg-slate-100 text-slate-600 border border-slate-200"
                                    >
                                        {talent.skills}
                                    </span>
                                </div>

                                {/* Footer: Rate & CTA */}
                                <div className="mt-auto pt-4 border-t border-slate-100 flex items-center justify-between">
                                    <button className="flex items-center gap-2 text-sm font-semibold bg-indigo-600 hover:bg-indigo-700 text-white px-4 py-2 rounded-xl transition-all active:scale-95 group-hover:gap-3 shadow-md shadow-indigo-600/10">
                                        View Profile
                                        <ExternalLink className="w-3.5 h-3.5 opacity-70" />
                                    </button>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </main>
    )
}
