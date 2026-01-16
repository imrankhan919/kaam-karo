import { Star, MapPin, Edit2, Plus, Trash2, Eye, MessageSquare, CheckCircle, AlertCircle, Mail, UserCircle } from "lucide-react"
import { useDispatch, useSelector } from "react-redux"
import { LoadingScreen } from "../components/LoadingScreen"
import { useEffect, useState } from "react"
import { addPreviousProject, getFreelancer } from "../features/freelancer/freelancerSlice"
import { getBids, getProjects } from "../features/project/projectSlice"
import PostWorkForm from "../components/PostWorkForm"

export default function UserProfile() {

    const { user } = useSelector(state => state.auth)
    const { listedProjects, bids, projectLoading, projectError, projectSuccess, projectErroMessage } = useSelector(state => state.project)
    const { freelancer, freelancerLoading, freelancerSuccess, freelancerError, freelancerErrorMessage } = useSelector(state => state.freelancer)


    const myProjects = listedProjects.filter((project) => project.user._id === user._id)


    const [viewForm, setViewForm] = useState(false)
    const [viewBids, setViewBids] = useState(false)

    const [formData, setFormData] = useState({
        projectLink: "",
        projectDescription: "",
        projectImage: ""
    })


    const { projectLink, projectDescription, projectImage } = formData



    const handleChange = (e) => {
        setFormData({
            ...formData,
            [e.target.name]: e.target.value
        })
    }


    const handleSubmit = (e) => {
        e.preventDefault()
        dispatch(addPreviousProject(formData))
        dispatch(getFreelancer(user._id))

        setFormData({
            projectLink: "",
            projectDescription: "",
            projectImage: ""
        })

    }


    const dispatch = useDispatch()


    const handleViewForm = () => {
        setViewForm(viewForm ? false : true)
    }


    const handleViewBiddings = (id) => {
        dispatch(getBids(id))
        setViewBids(true)
    }



    // Role can be 'freelancer' or 'client' - change to test different layouts
    const userRole = "freelancer"

    const isFreelancer = user.isFreelancer

    // console.log(isFreelancer)

    // Freelancer projects
    const projects = freelancer?.previousWorks





    useEffect(() => {

        // Api Call

        dispatch(getFreelancer(user._id))
        dispatch(getProjects())

        if (freelancerError && freelancerErrorMessage) {
            toast.error(freelancerErrorMessage)
        }

    }, [freelancerError, freelancerErrorMessage, user])

    if (freelancerLoading || projectLoading) {
        return (
            <LoadingScreen />
        )
    }



    return (
        <main className="min-h-screen bg-gradient-to-b from-slate-50 to-white">
            {/* Cover Banner & Profile Section */}
            <div className="relative">
                {/* Cover Image */}
                <div className="h-64 md:h-80 bg-gradient-to-r from-indigo-500 via-blue-500 to-indigo-600 relative overflow-hidden">
                    <img src={user.coverImage || "/placeholder.svg"} alt="Cover" className="w-full h-full object-cover" />
                    <div className="absolute inset-0 bg-gradient-to-b from-transparent to-white/10" />
                </div>

                {/* Profile Content */}
                <div className="max-w-6xl mx-auto px-4 md:px-6 lg:px-8">
                    <div className="relative -mt-20 mb-8">
                        {/* Profile Card */}
                        <div className="bg-white rounded-2xl shadow-lg p-6 md:p-8 border border-slate-100">
                            <div className="flex flex-col md:flex-row gap-6">
                                {/* Profile Image */}
                                <div className="flex-shrink-0">
                                    <img
                                        src={user.profilePic || "/placeholder.svg"}
                                        alt={user.name}
                                        className="w-32 h-32 md:w-40 md:h-40 rounded-2xl object-cover border-4 border-indigo-500 shadow-lg"
                                    />
                                </div>

                                {/* Profile Info */}
                                <div className="flex-1">
                                    <div className="flex flex-col md:flex-row md:items-start md:justify-between gap-4">
                                        <div>
                                            <h1 className="text-3xl md:text-4xl font-bold text-slate-900 mb-2">{user.name}</h1>
                                            <p className="text-lg text-indigo-600 font-semibold mb-3">{user.phone}</p>

                                            <div className="flex flex-wrap gap-4 mb-4">
                                                <div className="flex items-center gap-2 text-slate-600">
                                                    <Mail size={18} className="text-indigo-500" />
                                                    <span>{user.email}</span>
                                                </div>
                                                <div className="flex items-center gap-2 text-slate-600">
                                                    <span className="font-semibold">{user.experience}</span>
                                                </div>
                                            </div>

                                            {/* Rating */}
                                            <div className="flex items-center gap-1 mb-4">
                                                {[...Array(5)].map((_, i) => (
                                                    <Star
                                                        key={i}
                                                        size={18}
                                                        className={i < Math.floor(user.rating) ? "fill-amber-400 text-amber-400" : "text-slate-300"}
                                                    />
                                                ))}
                                                <span className="ml-2 text-sm font-semibold text-slate-700">
                                                    {user.rating} ({user.reviews} reviews)
                                                </span>
                                            </div>

                                            <p className="text-slate-600 max-w-lg">{user.bio}</p>
                                        </div>

                                        {/* Edit Button */}
                                        <button className="flex items-center gap-2 px-6 py-3 bg-indigo-600 text-white rounded-xl hover:bg-indigo-700 transition-colors duration-200 font-semibold self-start md:self-auto whitespace-nowrap shadow-md hover:shadow-lg">
                                            <Edit2 size={18} />
                                            Edit Profile
                                        </button>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            {/* Main Content */}
            <div className="max-w-6xl mx-auto px-4 md:px-6 lg:px-8 py-12">
                {isFreelancer ? (
                    <>
                        {/* FREELANCER VIEW */}

                        {/* My Projects Section */}
                        <section className="mb-16">
                            <div className="flex items-center justify-between mb-8">
                                <h2 className="text-2xl md:text-3xl font-bold text-slate-900">My Projects</h2>
                            </div>

                            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                                {projects?.map((project) => (
                                    <div
                                        key={project.id}
                                        className="bg-white rounded-xl shadow-md border border-slate-100 overflow-hidden hover:shadow-lg transition-shadow duration-300 group"
                                    >
                                        {/* Project Image */}
                                        <div className="relative h-40 bg-slate-200 overflow-hidden">
                                            <img
                                                src={project.projectImage || "/placeholder.svg"}
                                                alt={project.projectLink}
                                                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                                            />
                                            {/* Delete Button */}
                                            <a href={project.projectLink} className="absolute top-3 right-3 p-2 bg-red-500 text-white rounded-lg hover:bg-red-600 transition-colors duration-200 opacity-0 group-hover:opacity-100 shadow-lg">
                                                <Trash2 size={18} />
                                            </a>
                                        </div>

                                        {/* Project Info */}
                                        <div className="p-5">
                                            <h3 className="text-lg font-bold text-slate-900 mb-2">{project.projectLink}</h3>
                                            <p className="text-sm text-slate-600 mb-4 line-clamp-2">{project.projectDescription}</p>
                                            <button className="w-full px-4 py-2 bg-indigo-600 text-white rounded-lg hover:bg-indigo-700 transition-colors duration-200 font-semibold text-sm">
                                                View Project
                                            </button>
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </section>

                        {/* Add New Project Section */}
                        <section>
                            <h2 className="text-2xl md:text-3xl font-bold text-slate-900 mb-8">Add New Project</h2>

                            <form onSubmit={handleSubmit} className="bg-white rounded-xl shadow-md border border-slate-100 p-8">
                                <div className="grid grid-cols-1 md:grid-cols-1 gap-6">
                                    {/* Project Link */}
                                    <div>
                                        <label className="block text-sm font-semibold text-slate-900 mb-2">Project Link</label>
                                        <input
                                            name="projectLink"
                                            value={projectLink}
                                            onChange={handleChange}
                                            type="url"
                                            placeholder="https://example.com"
                                            className="w-full px-4 py-3 border border-slate-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-transparent transition-all duration-200"
                                        />
                                    </div>

                                    {/* Project Description */}
                                    <div className="md:col-span-2">
                                        <label className="block text-sm font-semibold text-slate-900 mb-2">Project Description</label>
                                        <textarea
                                            name="projectDescription"
                                            value={projectDescription}
                                            onChange={handleChange}
                                            placeholder="Describe your project..."
                                            rows="4"
                                            className="w-full px-4 py-3 border border-slate-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-transparent transition-all duration-200 resize-none"
                                        />
                                    </div>

                                    {/* Project Image URL */}
                                    <div className="md:col-span-2">
                                        <label className="block text-sm font-semibold text-slate-900 mb-2">Project Image URL</label>
                                        <input
                                            name="projectImage"
                                            value={projectImage}
                                            onChange={handleChange}
                                            type="url"
                                            placeholder="https://example.com/image.jpg"
                                            className="w-full px-4 py-3 border border-slate-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-transparent transition-all duration-200"
                                        />
                                    </div>
                                </div>

                                {/* Submit Button */}
                                <button className="mt-8 w-full md:w-auto px-8 py-3 bg-indigo-600 text-white rounded-lg hover:bg-indigo-700 transition-colors duration-200 font-semibold flex items-center justify-center gap-2 shadow-md hover:shadow-lg">
                                    <Plus size={20} />
                                    Add Project
                                </button>
                            </form>
                        </section>
                    </>
                ) : (
                    <>
                        {/* CLIENT VIEW */}

                        {/* My Posted Works Section */}
                        <section className="mb-16">
                            <h2 className="text-2xl md:text-3xl font-bold text-slate-900 mb-8">My Posted Works</h2>

                            <button onClick={handleViewForm} className="my-4 px-6 py-2 bg-indigo-600 text-white rounded-lg hover:bg-indigo-700 transition-colors duration-200 font-semibold whitespace-nowrap">
                                List Project +
                            </button>

                            {

                                viewForm && <PostWorkForm handleViewForm={handleViewForm} />
                            }


                            <div className="space-y-4">
                                {myProjects.map((work) => (
                                    <div
                                        key={work.id}
                                        className="bg-white rounded-xl shadow-md border border-slate-100 p-6 hover:shadow-lg transition-shadow duration-300"
                                    >
                                        <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4">
                                            <div className="flex-1">
                                                <h3 className="text-lg font-bold text-slate-900 mb-2">{work.title}</h3>
                                                <p className="text-slate-600 mb-3">{work.description}</p>
                                                <div className="flex flex-wrap gap-4">
                                                    <div className="flex items-center gap-2">
                                                        <span className="font-semibold text-indigo-600">Budget: {work.budget}</span>
                                                    </div>
                                                    <div className="flex items-center gap-2">
                                                        {work.status === "accepted" && (
                                                            <>
                                                                <AlertCircle size={18} className="text-green-500" />
                                                                <span className="font-semibold text-green-600">{work.status}</span>
                                                            </>
                                                        )}
                                                        {work.status === "in-progress" && (
                                                            <>
                                                                <Eye size={18} className="text-blue-500" />
                                                                <span className="font-semibold text-blue-600">{work.status}</span>
                                                            </>
                                                        )}
                                                        {work.status === "pending" && (
                                                            <>
                                                                <CheckCircle size={18} className="text-slate-500" />
                                                                <span className="font-semibold text-slate-600">{work.status}</span>
                                                            </>
                                                        )}
                                                    </div>
                                                </div>
                                            </div>
                                            <button onClick={() => handleViewBiddings(work._id)} className="px-6 py-2 bg-indigo-600 text-white rounded-lg hover:bg-indigo-700 transition-colors duration-200 font-semibold whitespace-nowrap">
                                                View Bids
                                            </button>
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </section>


                        {/* Bidding List Section */}
                        {
                            viewBids && (
                                <section className="mb-16">
                                    <h2 className="text-2xl md:text-3xl font-bold text-slate-900 mb-2">Bids for Selected Work</h2>
                                    <p className="text-slate-600 mb-8">Received {bids.length} bids for Website Redesign</p>

                                    {
                                        !bids || bids.length === 0 ? (
                                            <h1>No Bids Yet</h1>
                                        ) : (
                                            <div className="space-y-4">
                                                {bids.map((bid) => (
                                                    <div
                                                        key={bid.id}
                                                        className="bg-white rounded-xl shadow-md border border-slate-100 p-6 hover:shadow-lg transition-shadow duration-300"
                                                    >
                                                        <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4">
                                                            <div className="flex-1">
                                                                <h3 className="text-lg font-bold text-slate-900 mb-2">{bid.freelancer.user}</h3>
                                                                <div className="flex items-center gap-2 mb-3">

                                                                    <span className="text-sm font-semibold text-slate-700">{bid.freelancer.skills}</span>
                                                                </div>
                                                                <div className="flex flex-col gap-4">
                                                                    <div className="flex items-center gap-1">
                                                                        <span className="font-semibold text-xl text-indigo-600">Bid Amount : INR {bid.amount}</span>
                                                                    </div>
                                                                    <div className="flex items-center gap-1 text-slate-600">
                                                                        <UserCircle size={16} />
                                                                        <span className="text-sm">{bid.freelancer.description}</span>
                                                                    </div>
                                                                </div>
                                                            </div>
                                                            <button className="px-6 py-2 bg-green-600 text-white rounded-lg hover:bg-green-700 transition-colors duration-200 font-semibold whitespace-nowrap">
                                                                Accept Bid
                                                            </button>
                                                        </div>
                                                    </div>
                                                ))}
                                            </div>
                                        )
                                    }

                                </section>
                            )
                        }

                        {/* Become Freelancer Section */}
                        <section>
                            <div className="bg-gradient-to-r from-indigo-500 via-blue-500 to-indigo-600 rounded-2xl shadow-lg p-8 md:p-12 text-white overflow-hidden relative">
                                {/* Decorative element */}
                                <div className="absolute top-0 right-0 w-40 h-40 bg-white/10 rounded-full -mr-20 -mt-20" />
                                <div className="absolute bottom-0 left-0 w-32 h-32 bg-white/10 rounded-full -ml-16 -mb-16" />

                                <div className="relative z-10 max-w-2xl">
                                    <h2 className="text-3xl md:text-4xl font-bold mb-4">Ready to Offer Services?</h2>
                                    <p className="text-lg text-white/90 mb-8 leading-relaxed">
                                        Expand your opportunities by becoming a freelancer. Showcase your skills, connect with clients, and
                                        earn from your expertise.
                                    </p>
                                    <button className="px-8 py-4 bg-white text-indigo-600 rounded-xl hover:bg-slate-100 transition-colors duration-200 font-bold text-lg shadow-lg hover:shadow-xl">
                                        Become a Freelancer
                                    </button>
                                </div>
                            </div>
                        </section>
                    </>
                )}
            </div>
        </main>
    )
}
