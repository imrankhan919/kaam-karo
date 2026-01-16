import React from 'react'
import { BidModal } from './BidModal'

const WorkCard = ({ work }) => {
    return (
        <div className="border border-gray-300 rounded-lg p-6 hover:shadow-lg transition-shadow bg-card">
            <div className="flex justify-between items-start mb-4">
                <div className="flex-1">
                    <div className="flex items-start justify-between mb-2">
                        <h2 className="text-xl font-bold text-foreground hover:text-primary cursor-pointer transition-colors">
                            {work.title}
                        </h2>
                        <span className="px-3 py-1 rounded-full text-sm font-medium bg-blue-100 text-blue-800">
                            {work.category}
                        </span>
                    </div>
                    <div className="flex items-center gap-4 text-sm text-muted-foreground mb-3">
                        <span className="flex items-center gap-1">
                            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    strokeWidth={2}
                                    d="M17 20h5v-2a3 3 0 00-5.856-1.487M15 10a3 3 0 11-6 0 3 3 0 016 0z"
                                />
                            </svg>
                            Listed By {work.user.name}
                        </span>
                        <span>{new Date(work.createdAt).toLocaleDateString('en-IN')}</span>
                    </div>
                </div>
            </div>

            <p className="text-foreground/80 mb-4 line-clamp-2">
                {work.description}
            </p>

            <div className="flex flex-wrap gap-2 mb-4">
                <span className="px-3 py-1 bg-secondary text-secondary-foreground rounded-full text-sm">React</span>
                <span className="px-3 py-1 bg-secondary text-secondary-foreground rounded-full text-sm">
                    {work.technology}
                </span>
            </div>

            <div className="flex flex-wrap items-center justify-between gap-4 pt-4 border-t border-gray-300">
                <div className="flex items-center gap-6">
                    <div className="flex items-center gap-2">
                        <svg className="w-4 h-4 text-accent" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                strokeWidth={2}
                                d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
                            />
                        </svg>
                        <span className="font-semibold text-foreground">{work.budget} INR</span>
                    </div>
                    <div className="flex items-center gap-2">
                        <svg className="w-4 h-4 text-accent" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                strokeWidth={2}
                                d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"
                            />
                        </svg>
                        <span className="text-foreground">{work.duration} Days</span>
                    </div>
                    <div className="px-2 py-1 rounded text-xs font-medium text-blue-600 bg-blue-50">{work.status}</div>
                </div>
                <div className="flex items-center gap-4">
                    <BidModal work={work} />

                </div>
            </div>
        </div>
    )
}

export default WorkCard
