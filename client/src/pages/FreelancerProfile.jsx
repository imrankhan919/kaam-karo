import {
    Star,
    MapPin,
    MessageSquare,
    Briefcase,
    Languages,
    Clock,
    ExternalLink,
    Github,
    Twitter,
    Linkedin,
    Globe,
} from "lucide-react"
import { useEffect } from "react"
import { toast } from "react-toastify"
import { LoadingScreen } from "../components/LoadingScreen"
import { useDispatch, useSelector } from "react-redux"
import { getFreelancer } from "../features/freelancer/freelancerSlice"
import { Link, useParams } from "react-router-dom"

export default function FreelancerProfile() {



    const { freelancer, freelancerLoading, freelancerSuccess, freelancerError, freelancerErrorMessage } = useSelector(state => state.freelancer)


    const { id } = useParams()
    const dispatch = useDispatch()



    useEffect(() => {

        // Api Call
        dispatch(getFreelancer(id))

        if (freelancerError && freelancerErrorMessage) {
            toast.error(freelancerErrorMessage)
        }

    }, [freelancerError, freelancerErrorMessage, id])

    if (freelancerLoading || !freelancer) {
        return (
            <LoadingScreen />
        )
    }




    return (
        <main className="min-h-screen bg-background font-sans">
            {/* 1️⃣ Profile Header Section */}
            <div className="relative h-48 w-full bg-blue-500 md:h-64">
                <div className="absolute -bottom-16 left-1/2 -translate-x-1/2 md:left-24 md:translate-x-0">
                    <div className="relative h-32 w-32 overflow-hidden rounded-full border-4 border-background shadow-xl md:h-40 md:w-40">
                        <img
                            src={freelancer.profile?.user.profilePic}
                            alt={freelancer.profile?.user.name}
                            className="h-full w-full object-cover"
                        />
                    </div>
                </div>
            </div>

            <div className="mx-auto max-w-7xl px-4 pt-20 pb-12 md:px-8 md:pt-24">
                <div className="flex flex-col gap-6 md:flex-row md:items-end md:justify-between">
                    <div>
                        <h1 className="text-3xl font-bold tracking-tight text-foreground md:text-4xl">{freelancer.profile?.user.name}</h1>
                        <p className="mt-1 text-lg font-medium text-primary">{freelancer.profile?.category}</p>
                        <p className="mt-1 text-lg font-medium text-primary">{freelancer.profile?.experience} + Years Of Experience</p>
                        <div className="mt-4 flex flex-wrap items-center gap-4 text-sm text-muted-foreground">
                            <span className="flex items-center gap-1">
                                <Star className="h-4 w-4 fill-yellow-400 text-yellow-400" />
                                <span className="font-semibold text-foreground"></span>(
                                reviews)
                            </span>
                        </div>
                    </div>
                </div>

                {/* 2️⃣ Main Content Layout */}
                <div className="mt-12 grid grid-cols-1 gap-8 lg:grid-cols-12">
                    {/* 🟦 Left Column (Primary Info) */}
                    <div className="space-y-8 lg:col-span-12">
                        {/* About Me Card */}
                        <section className="rounded-2xl border border-gray-300 bg-card p-6 shadow-sm md:p-8">
                            <h2 className="text-xl font-bold text-foreground">About Me</h2>
                            <p className="mt-4 leading-relaxed text-muted-foreground">{freelancer?.profile?.description}</p>
                        </section>

                        {/* Skills Section */}
                        <section className="rounded-2xl border border-gray-300 bg-card p-6 shadow-sm md:p-8">
                            <h2 className="text-xl font-bold text-foreground">Expertise</h2>
                            <div className="mt-6 flex flex-wrap gap-2">

                                <span
                                    className="cursor-default rounded-full bg-primary/10 px-4 py-2 text-sm font-medium text-primary transition-all hover:bg-primary hover:text-primary-foreground"
                                >
                                    {freelancer?.profile?.skills}
                                </span>

                            </div>
                        </section>

                        {/* Portfolio Section */}
                        <section className="space-y-6">
                            <div className="flex items-center justify-between">
                                <h2 className="text-xl font-bold text-foreground">Portfolio</h2>
                                <button className="text-sm font-semibold text-primary hover:underline">View All</button>
                            </div>
                            <div className="grid grid-cols-1 gap-6 md:grid-cols-2">
                                {freelancer?.previousWorks.map((project) => (
                                    <div
                                        key={project._id}
                                        className="group relative overflow-hidden rounded-2xl border border-gray-300 bg-card shadow-sm transition-all hover:-translate-y-1 hover:shadow-md"
                                    >
                                        <div className="aspect-video w-full overflow-hidden">
                                            <img
                                                src={project.projectImage || "/placeholder.svg"}
                                                alt={project.title}
                                                className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-110"
                                            />
                                        </div>
                                        <div className="p-6">
                                            <h3 className="text-lg font-bold text-foreground">{project.title}</h3>
                                            <p className="mt-2 text-sm text-muted-foreground line-clamp-2">{project.description}</p>
                                            <Link to={`/${project.projectLink}`} className="mt-4 flex items-center gap-2 text-sm font-bold text-primary transition-all group-hover:gap-3">
                                                View Project
                                                <ExternalLink className="h-4 w-4" />
                                            </Link>
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </section>
                    </div>


                </div>

                {/* 🟨 Reviews Section */}
                {/* <section className="mt-16 space-y-8">
                    <div className="flex items-center gap-3">
                        <h2 className="text-2xl font-bold text-foreground">Client Reviews</h2>
                        <div className="rounded-full bg-accent px-3 py-1 text-xs font-bold text-primary">
                            {FREELANCER.reviewsCount}
                        </div>
                    </div>
                    <div className="grid grid-cols-1 gap-6 md:grid-cols-2">
                        {FREELANCER.reviews.map((review) => (
                            <div
                                key={review.id}
                                className="rounded-2xl border border-gray-300 bg-card p-6 shadow-sm transition-all hover:shadow-md"
                            >
                                <div className="flex items-center justify-between">
                                    <div className="flex items-center gap-3">
                                        <div className="h-10 w-10 overflow-hidden rounded-full bg-accent">
                                            <img
                                                src={`/diverse-avatars.png?height=40&width=40&query=avatar+${review.name}`}
                                                alt={review.name}
                                            />
                                        </div>
                                        <div>
                                            <p className="font-bold text-foreground">{review.name}</p>
                                            <p className="text-xs text-muted-foreground">{review.company}</p>
                                        </div>
                                    </div>
                                    <div className="flex items-center gap-1">
                                        {[...Array(review.rating)].map((_, i) => (
                                            <Star key={i} className="h-3 w-3 fill-yellow-400 text-yellow-400" />
                                        ))}
                                    </div>
                                </div>
                                <p className="mt-4 text-sm leading-relaxed text-muted-foreground italic">"{review.comment}"</p>
                            </div>
                        ))}
                    </div>
                    <button className="mx-auto block text-sm font-bold text-primary hover:underline">Read all 128 reviews</button>
                </section> */}
            </div>
        </main>
    )
}
