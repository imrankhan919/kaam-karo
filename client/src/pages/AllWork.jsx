import { useEffect } from "react";
import WorkCard from "../components/WorkCard";
import { useDispatch, useSelector } from "react-redux";
import { getProjects } from "../features/project/projectSlice";
import { toast } from "react-toastify";
import { LoadingScreen } from "../components/LoadingScreen";

export default function AllWork() {

    const { listedProjects, projectLoading, projectSuccess, projectError, projectErrorMessage } = useSelector(state => state.project)

    const dispatch = useDispatch()

    useEffect(() => {
        dispatch(getProjects())


        if (projectError && projectErrorMessage) {
            toast.error(projectErrorMessage)
        }

    }, [projectError, projectErrorMessage])


    if (projectLoading) {
        return (
            <LoadingScreen />
        )
    }



    return (
        <main className="min-h-screen bg-background">
            {/* Header */}
            <div className="bg-gradient-to-r from-primary to-accent py-12 px-4 sm:px-6 lg:px-8">
                <div className="max-w-7xl mx-auto">
                    <h1 className="text-4xl font-bold text-primary-foreground mb-2">Browse All Gigs</h1>
                    <p className="text-primary-foreground/90 text-lg">Find the perfect project for your skills</p>
                </div>
            </div>

            {/* Main Content */}
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
                <div className="grid grid-cols-1 lg:grid-cols-4 gap-8">
                    {/* Sidebar Filters */}
                    <div className="lg:col-span-1">
                        <div className="sticky top-8 space-y-6">
                            {/* Search Input */}
                            <div className="relative">
                                <svg
                                    className="absolute left-3 top-1/2 transform -translate-y-1/2 w-4 h-4 text-muted-foreground"
                                    fill="none"
                                    stroke="currentColor"
                                    viewBox="0 0 24 24"
                                >
                                    <path
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                        strokeWidth={2}
                                        d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
                                    />
                                </svg>
                                <input
                                    type="text"
                                    placeholder="Search gigs..."
                                    className="w-full pl-10 pr-4 py-2 border border-gray-300 rounded-lg bg-card text-foreground placeholder-muted-foreground"
                                    disabled
                                />
                            </div>

                            {/* Category Filter */}
                            <div>
                                <h3 className="font-semibold text-foreground mb-3 flex items-center gap-2">
                                    <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                        <path
                                            strokeLinecap="round"
                                            strokeLinejoin="round"
                                            strokeWidth={2}
                                            d="M3 4a1 1 0 011-1h16a1 1 0 011 1v2.586a1 1 0 01-.293.707l-6.414 6.414a1 1 0 00-.293.707V17l-4 4v-6.586a1 1 0 00-.293-.707L3.293 7.293A1 1 0 013 6.586V4z"
                                        />
                                    </svg>
                                    Category
                                </h3>
                                <div className="space-y-2">
                                    <button className="w-full text-left px-3 py-2 rounded-lg bg-primary text-primary-foreground font-medium">
                                        All Categories
                                    </button>
                                    <button className="w-full text-left px-3 py-2 rounded-lg hover:bg-secondary text-foreground transition-colors">
                                        Web Development
                                    </button>
                                    <button className="w-full text-left px-3 py-2 rounded-lg hover:bg-secondary text-foreground transition-colors">
                                        Design
                                    </button>
                                    <button className="w-full text-left px-3 py-2 rounded-lg hover:bg-secondary text-foreground transition-colors">
                                        Backend Development
                                    </button>
                                    <button className="w-full text-left px-3 py-2 rounded-lg hover:bg-secondary text-foreground transition-colors">
                                        Content Writing
                                    </button>
                                    <button className="w-full text-left px-3 py-2 rounded-lg hover:bg-secondary text-foreground transition-colors">
                                        Game Development
                                    </button>
                                    <button className="w-full text-left px-3 py-2 rounded-lg hover:bg-secondary text-foreground transition-colors">
                                        Data Science
                                    </button>
                                    <button className="w-full text-left px-3 py-2 rounded-lg hover:bg-secondary text-foreground transition-colors">
                                        Video Production
                                    </button>
                                </div>
                            </div>

                            {/* Level Filter */}
                            <div>
                                <h3 className="font-semibold text-foreground mb-3">Experience Level</h3>
                                <div className="space-y-2">
                                    <button className="w-full text-left px-3 py-2 rounded-lg bg-primary text-primary-foreground font-medium">
                                        All Levels
                                    </button>
                                    <button className="w-full text-left px-3 py-2 rounded-lg hover:bg-secondary text-foreground transition-colors capitalize">
                                        Beginner
                                    </button>
                                    <button className="w-full text-left px-3 py-2 rounded-lg hover:bg-secondary text-foreground transition-colors capitalize">
                                        Intermediate
                                    </button>
                                    <button className="w-full text-left px-3 py-2 rounded-lg hover:bg-secondary text-foreground transition-colors capitalize">
                                        Expert
                                    </button>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* Gigs Grid */}
                    <div className="lg:col-span-3">
                        <div className="grid gap-6">
                            {/* Gig Card 1 */}
                            {
                                listedProjects.map(work => <WorkCard key={work._id} work={work} />)
                            }
                        </div>
                    </div>
                </div>
            </div>
        </main>
    )
}
